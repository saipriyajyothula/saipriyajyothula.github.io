const pug = require('pug');
const fs = require('fs');
var open = require('open');

fs.readFile('data/river-names.json', 'utf-8', function(err, riverDataStr) {
  
  // Compile template.pug, and render a set of data
  var html = pug.renderFile('index.pug', {rivers: JSON.parse(riverDataStr), pretty: '  '});

  fs.writeFile('index.html', html, function(err) {
    if(err) return console.log(err);
    console.log('HTML compiled');
  });

});
