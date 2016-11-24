// Copyright (c) 2012 Kuba Niegowski
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

'use strict';


var util = require('util'),
    Stream = require('stream'),
    zlib = require('zlib'),
    Filter = require('./filter'),
    CrcStream = require('./crc'),
    constants = require('./constants');


var Packer = module.exports = function(options) {
    Stream.call(this);

    this._options = options;
	options.bitDepth = options.bitDepth || 8;
	options.colorType = (typeof options.colorType=="number")? options.colorType : 6;
	options.deflateChunkSize = options.deflateChunkSize || 32 * 1024;
    options.deflateLevel = options.deflateLevel || 9;
    options.deflateStrategy = options.deflateStrategy || 3;

    this.readable = true;
};
util.inherits(Packer, Stream);


Packer.prototype.pack = function(data, width, height) {

    // Signature
    this.emit('data', new Buffer(constants.PNG_SIGNATURE));
    this.emit('data', this._packIHDR(width, height, this._options.bitDepth, this._options.colorType));

	if(this._options.colorType==3){
		this.emit('data', this._packPLTE(data));
		if(this._TRNS)
		{
			this.emit('data', this._packTRNS(data));
		}
	}

    // filter pixel data
    var filter = new Filter(width, height, colorTypeToBppMap[this._options.colorType], data, this._options);
    this._data = filter.filter();

    // compress it
    var deflate = zlib.createDeflate({
            chunkSize: this._options.deflateChunkSize,
            level: this._options.deflateLevel,
            strategy: this._options.deflateStrategy
        });
    deflate.on('error', this.emit.bind(this, 'error'));

    deflate.on('data', function(data) {
        this.emit('data', this._packIDAT(data));
    }.bind(this));

    deflate.on('end', function() {
        this.emit('data', this._packIEND());
        this.emit('end');
    }.bind(this));

    deflate.end(this._data);
};

Packer.prototype._packChunk = function(type, data) {

    var len = (data ? data.length : 0),
        buf = new Buffer(len + 12);

    buf.writeUInt32BE(len, 0);
    buf.writeUInt32BE(type, 4);

    if (data) data.copy(buf, 8);

    buf.writeInt32BE(CrcStream.crc32(buf.slice(4, buf.length - 4)), buf.length - 4);
    return buf;
};

Packer.prototype._packIHDR = function(width, height, bitDepth, colorType) {
    var buf = new Buffer(13);
    buf.writeUInt32BE(width, 0);
    buf.writeUInt32BE(height, 4);
    buf[8] = bitDepth;
    buf[9] = colorType; // colorType
    buf[10] = 0; // compression
    buf[11] = 0; // filter
    buf[12] = 0; // interlace

    return this._packChunk(constants.TYPE_IHDR, buf);
};

Packer.prototype._packIDAT = function(data) {
    return this._packChunk(constants.TYPE_IDAT, data);
};

Packer.prototype._packIEND = function() {
    return this._packChunk(constants.TYPE_IEND, null);
};
var colorTypeToBppMap = {
	0: 1,
	2: 3,
	3: 1,
	4: 2,
	6: 4
};

Packer.prototype._packPLTE = function(data) {
	function addNode(level)
	{
		var node = level < 8 ? {
			isLeaf: false,
			children: {},
			next:map[level]
		} : {
			isLeaf: true,
			count: 0,
			colorR: 0,
			colorG: 0,
			colorB: 0,
			pos:[]
		};
		if(node.isLeaf){leafCount++;}else{map[level]=node;}
		return node;
	}

	function addColor(node,pos,colorR,colorG,colorB,level)
	{
		if (node.isLeaf)
		{//如果是叶结点，更新颜色信息
			node.count++;
			node.colorR += colorR;
			node.colorG += colorG;
			node.colorB += colorB;
			node.pos.push(pos);
		}
		//如果不是叶结点，递归下一层
		else
		{
			var nIndex = (((colorR & mask[level]) >> (7-level)) << 2) |
				(((colorG & mask[level]) >> (7-level)) << 1) |
				((colorB & mask[level]) >> (7-level)),
				subNode = node.children[nIndex]||(node.children[nIndex]=addNode(level+1));
			subNode.parent = node;
			addColor(subNode, pos,colorR,colorG,colorB,level+1)
		}
	}
	var leafCount = 0,
		maxColor = 256,
		tranCount = 0,
		mask = [0x80, 0x40, 0x20, 0x10, 0x08, 0x04, 0x02, 0x01],
		map = {},
		tree = addNode(0);

	for(var i=data.length/4-1;i>=0;i--){
		var opacity = data[i*4+3];
		if(opacity<1){
			if(!tranCount){
				maxColor--;
				tranCount++;
			}
			data[i*4] = 0;
		}
		else{
			addColor(tree,
				i,
				Math.round(data[i*4+0]*opacity/255+(255-opacity)),
				Math.round(data[i*4+1]*opacity/255+(255-opacity)),
				Math.round(data[i*4+2]*opacity/255+(255-opacity)),
				0
			)
		}
		while(leafCount > maxColor){
			//找到最深层次的子节点
			var level;
			for (level = 7; (level > 0 && !map[level]); level--);
			var node = map[level];
			map[level] = node.next;
			node.count = 0;
			node.colorR = 0;
			node.colorG = 0;
			node.colorB = 0;
			node.pos =[];
			for(var key in node.children)
			{
				var child = node.children[key];
				node.count+=child.count;
				node.colorR += child.colorR;
				node.colorG += child.colorG;
				node.colorB += child.colorB;
				node.pos = node.pos.concat(child.pos);
				leafCount--;
			}
			node.children =null;
			node.isLeaf = true;
			leafCount++;
		}
	}
	function walk(node,func){
		func(node);
		if(!node.children){return;}
		for(var key in node.children)
		{
			walk(node.children[key],func);
		}
	}
	var buf = new Buffer((leafCount+tranCount)*3),bIndex=0;
	if(tranCount)
	{
		this._TRNS = new Buffer(1);//设置第一个颜色为0
		this._TRNS[0] = 0;
		buf[bIndex*3+0]=0;
		buf[bIndex*3+1]=0;
		buf[bIndex*3+2]=0;
		bIndex++;
	}
	walk(tree,function(node){
		if(!node.isLeaf){return;}
		buf[bIndex*3+0]=Math.round(node.colorR/node.count);
		buf[bIndex*3+1]=Math.round(node.colorG/node.count);
		buf[bIndex*3+2]=Math.round(node.colorB/node.count);
		for(var i=node.pos.length-1;i>=0;i--)
		{
			data[node.pos[i]*4]=bIndex;
		}
		bIndex++;
	});
	return this._packChunk(constants.TYPE_PLTE, buf);
};

Packer.prototype._packTRNS = function() {
	if(this._options.colorType==3){
    	return this._packChunk(constants.TYPE_tRNS, this._TRNS);
	}
};