function calculatescore(l) {
    
    var ran = 5;
    var crimeRates = [];
    for (var i=0; i<l.length; i++){
        crimeRates.push(Math.ceil(Math.random()*ran));
    }
    
    function calculateCrimeScore(crimeRates, ran) { // josh part starts
        var score = 0;
        var numRates = crimeRates.length; // records the number of crimerates recorded 
        var weight = numRates * ran; // will later be used as the divisor to obtain a weighted score
        for (var i = 0; i < numRates ; i++) {
            score += crimeRates[i];
        }
        return (score/weight)*(45);
    } // josh part ends
    
    function findvicinity(l){
        var m = []
        for (var i=0; i<l.length; i++){
            for (var j=0; j<100; j++){
                if(latlongdistance(l[i].lat, l[i].long, typedata[j].lat, typedata[j].long)<0.8){
                    z = {lat: typedata[j].lat, long: typedata[j].long, type: typedata[j].type};
                    if (m.indexOf(z) == -1)
                        m.push(z);
                }
            }
        }
        return vicinityPoints(m);
    }
    
    function vicinityPoints(JSONpoints) {  // josh part starts

        //initializing arrays
        var speedArr = [];
        var accelArr = [];
        var brakeArr = [];
        var phoneArr = [];

        for (var i = 0; i < JSONpoints.length; i++) {
            if (JSONpoints[i].type == 'speeding')
                speedArr.push({lat: JSONpoints[i].lat, long: JSONpoints[i].long});
            else if (JSONpoints[i].type == 'acceleration')
                accelArr.push({lat: JSONpoints[i].lat, long: JSONpoints[i].long});
            else if (JSONpoints[i].type == 'brake')
                brakeArr.push({lat: JSONpoints[i].lat, long: JSONpoints[i].long});
            else //assume we then have type == phone
                phoneArr.push({lat: JSONpoints[i].lat,long: JSONpoints[i].long});
        }  // josh part ends
        
        score = calculateCrimeScore(crimeRates, ran);
        var s = (speedArr.length>10)?10:(speedArr.length);
        var a = (accelArr.length>10)?10:(accelArr.length);
        var b = (brakeArr.length>10)?10:(brakeArr.length);
        var p = (phoneArr.length>10)?10:(phoneArr.length);
        score+=(((s)*10)+((a)*10)+((b)*5)+((p)*30));
        return score;
    }
    
    return findvicinity(l);
}
