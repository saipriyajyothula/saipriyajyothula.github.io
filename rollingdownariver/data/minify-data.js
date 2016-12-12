const fs = require('fs');
const jm = require('jsonminify');
const riverNumbers = [0, 1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 16, 18];

for (var n in riverNumbers) {
  var obj = require('./'+ riverNumbers[n] + '.json');
  fs.writeFile('./' + riverNumbers[n] + '.min.json', JSON.minify(JSON.stringify(obj)), function(err) {
    console.log(err);
  });
}
