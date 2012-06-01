var memes = [];

var create = function(vals, cb) {
  memes.push({
    name: vals.title,
    link: vals.link
  });
  cb(memes[memes.length -1])
}

var get = function(id) {
  if (id) {
    return memes[id];
  }
  return memes;
}

exports.get         = get;
exports.create      = create;