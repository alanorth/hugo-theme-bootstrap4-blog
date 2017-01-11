// Adapted from: https://gist.github.com/jmervine/ae1bace0fe37dce75b90ec3e9592771c

var crypto = require('crypto');
var fs     = require('fs');
var assets = require('./assets.json');

var generate384 = function (file) {
  var enc  = 'utf8';
  var body = fs.readFileSync(file, { encoding: enc });
  var hash = crypto.createHash('sha384').update(body, enc);
  var sha  = hash.digest('base64');

  return 'sha384-' + sha;
}

for (var asset in assets) {
  var path = assets[asset];
  var hash = generate384(path);

  console.log(asset + ' = "' + hash + '"');
}

// vim: set ts=2 sw=2 et:
