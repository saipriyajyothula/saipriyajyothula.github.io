const fs = require('fs');
var river = 'R6';

fs.readFile('data/' + river + '.json', 'utf8', function (err, json) {
    if (err) throw err;
    var data = JSON.parse(json);
    fs.writeFile(river + '-ext.txt', getExtrema(data.z_interp, 0.25), function(err) {
      console.log(err);
    });
});

function getExtrema(elevationData, tolerance) {

  var extremaFound = [];

  var previousDifference = 0;
  var newDifference = 0;
  var E_i = 0;
  var sumE_i = 0;
  var T = tolerance;

  for (var i = 1; i < elevationData.length; i++) {
    previousDifference = newDifference;

    // calculate difference between successive elevations
    newDifference = elevationData[i] - elevationData[i-1];

    if (newDifference != undefined) E_i += newDifference;

    // if previous difference exists and is a different sign than the current 
    // difference, we have a turning point!
    if (previousDifference != undefined && 
    Math.sign(newDifference) != Math.sign(previousDifference)) {

      sumE_i += E_i;

      // if the cumulative elevation change is more than the tolerance
      if (Math.abs(sumE_i) >= T) {

        // either add the extremum to the front of the array
        if (extremaFound.length == 0 || Math.sign(sumE_i) != extremaFound[0][0]) {
          extremaFound.unshift([Math.sign(sumE_i), i-1]);
        } 
        // or replace the first extremum with this one if they have same sign
        else if (Math.sign(sumE_i) == extremaFound[0][0]) {
          extremaFound[0][1] = i-1; 
        }

        sumE_i = 0;

      }

      E_i = 0;

    }

  }
  
  return extremaFound.reverse();

}