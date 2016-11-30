var PNG = require('node-pngjs').PNG,
    path = require('path'),
    ejs = require('ejs'),
    fs = require('fs');

function Sprite(opt) {
  this.opt = opt || {};
  if (this.opt.cssTemplate == null) {
    this.opt.globalTemplate = this.opt.globalTemplate || '{\
      background-image:url(<%- JSON.stringify(relativePngPath) %>);\
      display:inline-block;\
      background-repeat:no-repeat;\
      overflow:hidden;\
      background-size: <%= width / ratio %>px <%= height / ratio %>px;\
    }';

    this.opt.eachTemplate = this.opt.eachTemplate || '<%= "."+node.className %>{\
      background-position:<%= -node.x / ratio %>px <%= -node.y / ratio %>px;\
      width:<%= node.width / ratio %>px;\
      height:<%= node.height / ratio %>px;\
      text-indent:<%= node.width / ratio %>px;\
    }';

    this.opt.cssTemplate = '<%= nodes.map(function(node){ return "."+node.className }).join(",\\n") %>'
    + this.opt.globalTemplate +
    '<% nodes.forEach(function(node){ %>'
    + this.opt.eachTemplate +
    '<%})%>';

    this.opt.className = '<%= namespace != null ? namespace + "-" : "" %>' +
    '<%= path.normalize(node.image.base != null ? path.relative(node.image.base, node.image.path) : node.image.path).replace(/\\.png$/,"").replace(/\\W+/g,"-") %>';
  }
  if (this.opt.ratio == null) {
    this.opt.ratio = 1;
  }
  if (this.opt.namespace == null) {
    this.opt.namespace = null;
  }
  this.images = [];
}

Sprite.prototype.addImageSrc = function (images, cb) {
  var self = this;
  var wait = images.length;
  images.forEach(function (imagePath) {
    fs.createReadStream(imagePath)
        .pipe(new PNG())
        .on('parsed', function () {
          this.path = imagePath;
          self.images.push(this);
          if (--wait == 0 && cb != null) {
            cb();
          }
        });
  });
};
Sprite.prototype.addFile = function (file, cb) {
  var self = this;
  file
      .pipe(new PNG())
      .on('parsed', function () {
        this.path = file.path;
        this.base = file.base;
        self.images.push(this);
        if (cb != null) {
          cb();
        }
      });
};
Sprite.prototype.addFiles = function (files, cb) {
  var self = this;
  var wait = files.length;
  files.forEach(function (file) {
    self.addFile(file, function () {
      if (--wait == 0 && cb != null) {
        cb();
      }
    })
  });
};

Sprite.prototype.compile = function (relativePngPath) {
  var self = this;

  var width = 0;
  var height = 0;

  var root = new Node();
  var sortedImage = this.images.sort(function (a, b) {
    return b.height - a.height;
  });
  sortedImage.forEach(function (image) {
    root.insert(image);
  });

  var nodes = root.getNodeWithImages();
  nodes.forEach(function (node) {
    width = Math.max(width, node.width + node.x);
    height = Math.max(height, node.height + node.y);
  });

  var png = new PNG({
    width: width,
    height: height,
    deflateStrategy: 1
  });

  // clean png
  for (var i = 0; i < width * height * 4; i++) {
    png.data[i] = 0x00;
  }

  nodes.forEach(function (node) {
    // Format Name
    node.className = ejs.render(self.opt.className, {
      path: path,
      node: node,
      namespace: self.opt.namespace
    });
    //
    node.image.bitblt(png, 0, 0, node.width, node.height, node.x, node.y);
  });

  cssString = ejs.render(this.opt.cssTemplate, {
    path: path,
    nodes: nodes,
    relativePngPath: relativePngPath.replace(/\\/g, '/'),
    ratio: this.opt.ratio,
    namespace: this.opt.namespace,
    width: width,
    height: height
  });

  return {
    css: cssString,
    png: png.pack()
  }
};

exports.Sprite = Sprite;

exports.gulp = function (opt) {
  return require('./gulp')(opt)
};

function Node(x, y, width, height) {
  this.x = x || 0;
  this.y = y || 0;
  this.width = width || Infinity;
  this.height = height || Infinity;
}

Node.prototype.insert = function (image) {
  //  if we're not a leaf
  if (this.image == null && this.left != null && this.right != null) {
    // try inserting into first child
    var newNode = this.left.insert(image);
    if (newNode != null) {
      return newNode;
    }
    //no room, insert into second
    return this.right.insert(image);
  }
  // if there's already a image here
  if (this.image != null) return null;
  // if we're too small
  if (this.width < image.width || this.height < image.height) return null;
  // if we're just right
  if (this.width == image.width && this.height == image.height) {
    this.image = image;
    return this;
  }

  // gotta split this node and create some kids
  var dw = this.width - image.width;
  var dh = this.height - image.height;
  if (dw > dh) {
    this.left = new Node(
        this.x,
        this.y,
        image.width,
        this.height
    );
    this.right = new Node(
        this.x + image.width,
        this.y,
        this.width - image.width,
        this.height
    );
  } else {
    this.left = new Node(
        this.x,
        this.y,
        this.width,
        image.height
    );
    this.right = new Node(
        this.x,
        this.y + image.height,
        this.width,
        this.height - image.height
    );
  }
  // insert into first child we created
  return this.left.insert(image);
};

Node.prototype.getNodeWithImages = function () {
  if (this.image) return [this];
  if (this.left != null && this.right != null) {
    return this.left.getNodeWithImages().concat(this.right.getNodeWithImages())
  }
  return [];
};
