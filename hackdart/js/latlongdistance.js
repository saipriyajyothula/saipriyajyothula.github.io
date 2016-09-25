function latlongdistance(lat1,lon1,lat2,lon2){
    function radians(x){
        return x*(Math.PI)/360;
    }

    var R = 6371; // gives d in metres
    var latdelta = radians(lat2-lat1), londelta = radians(lon2-lon1);
    var a = (Math.sin(latdelta/2)*Math.sin(latdelta/2))+(Math.cos(radians(lat1))*Math.cos(radians(lat2))*Math.sin(londelta/2)*Math.sin(londelta/2));
    var c = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
    return R*c;
}