function init() {
                var input = document.getElementById('locationFromTextField');
                var autocomplete = new google.maps.places.Autocomplete(input);
                //google.maps.event.addListener(autocomplete, 'place_changed',dirchange);
                var input2 = document.getElementById('locationToTextField');
                var autocomplete2 = new google.maps.places.Autocomplete(input2);
                google.maps.event.addListener(autocomplete2, 'place_changed',dirchange);
                function dirchange() {
                var place = autocomplete.getPlace();
                var lat = place.geometry.location.lat();
                var lng = place.geometry.location.lng();
                var place2= autocomplete2.getPlace();
                var lat2 = place2.geometry.location.lat();
                var lng2 = place2.geometry.location.lng();
                mquest(lat,lng,lat2,lng2);
              }
              //dirchange();
            }

            google.maps.event.addDomListener(window, 'load', init);
