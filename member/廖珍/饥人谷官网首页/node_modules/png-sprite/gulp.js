var gutil = require('gulp-util');
var through = require('through2');
var Buffer = require('buffer').Buffer;

var Sprite = require("./index.js").Sprite;

var path = require('path');
var PluginError = gutil.PluginError;


module.exports = function (opt) {
  opt = opt || {};
  opt.cssPath = opt.cssPath || './sprite.css';
  opt.pngPath = opt.pngPath || './sprite.png';

  var sprite = new Sprite(opt);

  function bufferImages(file, encoding, done) {
    if (file.isNull()) {
      return; // ignore
    }

    if (opt.base == null) {
      opt.base = file.base;
    }

    sprite.addFile(file, done);
  }

  function endStream(done) {
    var relativePath = opt.relPath || path.relative(path.dirname(opt.cssPath), opt.pngPath);
    var obj = sprite.compile(relativePath);
    var self = this;
    self.push(new gutil.File({
      cwd: "/",
      base: opt.base,
      path: path.resolve(opt.base, opt.cssPath),
      contents: new Buffer(obj.css)
    }));

    // through don't like the png stream
    // just concat the buffer ftw
    var buffers = [];
    obj.png.on('data', function(chunk){
      buffers.push(chunk);
    });
    obj.png.on('end', function(chunk){
      self.push(new gutil.File({
        cwd: "/",
        base: opt.base,
        path: path.resolve(opt.base, opt.pngPath),
        contents: Buffer.concat(buffers)
      }));
      done();
    })
  }

  return through.obj(bufferImages, endStream);
};
