let Sidebar = (function() {

    let map;
    let container;
    let mainContainer;

    let col;
    let row;
    let sidebarForms;

    let icon;
    let iconImage;
    let iconText;

   
   
    let isKioskSet = false;
    let kioskID;
    let kioskData;
    let kioskIndex;
    let kioskMarker;
    let kioskImageData;
    let fixedKioskPoint = L.icon.pulse({iconSize: [10,10], color: "#045a8d" });

    let attractionMarkerList = [];
    let anchorPolylineMarkerList = [];
    let fixedAttracionUrl = "imgs/kiosks/circle.ico"
    let fixedAttracionPoint;
    let attractionImageData;
    let attractionEndLat, attractionEndLon;

    uniqueNumber.previous = 0;
  
    

// Initializing Map
    let init = function(controlMap) {
        map = controlMap;
        mainContainer = document.getElementById('startOptionsContainer');
        initControlNavBar();
        initUI();
       
    }


// Initializing and loading data from result.json
    let initUI = function() {
      
        clearSidebar();
        clearMap();
        let addKioskName = "New Kiosk";
        let addKioskId ="new";
        let addKioskIconUrl = "imgs/kiosks/add.png";
        let addKioskIconSize = [200, 200];

        container = document.createElement("div");
        container.className = "container";
        mainContainer.appendChild(container);

        row = document.createElement("div");
        row.id= "mainRow";
        row.className = "row text-center text-lg-left";
        container.appendChild(row);

        addIcon(addKioskName,addKioskId, addKioskIconUrl, addKioskIconSize);
        
        d3.json('data/results.json', function(data) {
            if(data)
            {
                _.forEach(data, function(d, i) {
                    addIcon(d.name, i, d.iconUrl, d.iconSize);
                    mainKioskPoint = L.icon({iconUrl: d.iconUrl, iconSize: [30,30] });
                    kioskMainMarker = new L.marker([ d.lat,  d.lon], { draggable: true, icon: mainKioskPoint }).addTo(map);
                    attractionMarkerList.push(kioskMainMarker);
                });
            }
            
            $(".kioskIconDiv").hover(function(){
                $(this).css("opacity", 1.0);
            }, function(){
                $(this).css("opacity", 0.5);
            });

            $(".kioskIconDiv").on("click", function() {
                $('#startOptionsContainer').empty();
                initNavBar();
              
                if(this.id=="new")
                {
                    
                     addKioskDetails();
                }
                else 
                {
                    loadKioskDetails(data, this.id);
                   
                }
                    
                    
            })
        });
    }


    let initControlNavBar = function() {
        mainMenuBar = document.createElement("div");
        mainMenuBar.className = "menuBar";
        mainContainer.appendChild(mainMenuBar);

        mainNavTextKiosk = document.createElement('a');
        mainNavTextKiosk.className = "menuNavLinks";
        mainNavTextKiosk.id = "addMainKioskNav";
        mainNavTextKiosk.href="#";
        mainNavTextKiosk.innerHTML = "Add Kiosk";
        mainMenuBar.appendChild(mainNavTextKiosk);

        mainNavTextAttraction = document.createElement('a');
        mainNavTextAttraction.className = "menuNavLinks";
        mainNavTextAttraction.id = "addMainAttractionNav";
        mainNavTextAttraction.href="#";
        mainNavTextAttraction.innerHTML = "Add Attraction";
        mainMenuBar.appendChild(mainNavTextAttraction);

        $("#addMainKioskNav").css("color","#ffeda0");

        $('#addMainKioskNav').on('click', function() {
            clearAllNavHighlight();
            $("#addMainKioskNav").css("color","#ffeda0");
            initUI();
        });

        $('#addMainAttractionNav').on('click', function() {
            clearAllNavHighlight();
            $('#addMainAttractionNav').css('color', '#ffeda0');
            addNewAttractions();
        });
    }


// Koisk functions
    let initAddKioskUI = function() {
        clearMap();
        clearAllNavHighlight();
        $('#addKioskNav').css('color', '#ffeda0');

        sidebarForms = document.getElementById('sidebarForms');
        sidebarForms.className="col-md-12";

        kioskImgTitle = document.createElement("h3")
        kioskImgTitle.id = "kioskImgTitle";
        kioskImgTitle.innerHTML = "Kiosk Image"
        sidebarForms.appendChild(kioskImgTitle);

        kioskImg = document.createElement("img");
        kioskImg.width =200;
        kioskImg.height =200;
        kioskImg.src = "http://via.placeholder.com/200x200";
        kioskImg.id = "kioskImg";
        sidebarForms.appendChild(kioskImg);

        kioskImgUpload = document.createElement("input");
        kioskImgUpload.type = "file";
        kioskImgUpload.id = "kioskImgUpload";
        kioskImgUpload.accept = ".png";
        sidebarForms.appendChild(kioskImgUpload);


        kioskName = document.createElement("input");
        kioskName.type = "text";
        kioskName.id = "kioskName";
        kioskName.placeholder = "Kiosk Name";
        sidebarForms.appendChild(kioskName);

        kioskLat = document.createElement("input");
        kioskLat.type = "text";
        kioskLat.id = "kioskLat"
        kioskLat.placeholder = "Kiosk Latitude";
        kioskLat.readOnly = true;
        sidebarForms.appendChild(kioskLat);
        
        kioskLon = document.createElement("input");
        kioskLon.type = "text";
        kioskLon.id = "kioskLon";
        kioskLon.placeholder = "Kiosk Longitude";
        kioskLon.readOnly = true;
        sidebarForms.appendChild(kioskLon);


        kioskSubmitButton = document.createElement("input")
        kioskSubmitButton.type = "button";
        kioskSubmitButton.id = "kioskSubmitButton";
        kioskSubmitButton.className = "btn btn-danger btn-lg";
        kioskSubmitButton.value = "Save";
        sidebarForms.appendChild(kioskSubmitButton);


        kioskFormStatus = document.createElement("p")
        kioskFormStatus.id = "kioskFormStatus";
        sidebarForms.appendChild(kioskFormStatus);


        $("#kioskImgUpload").change(function(){
            getBase64($("#kioskImgUpload")[0].files[0], 'kiosk');
            readURL(this,'kiosk');
        });

        $('#kioskSubmitButton').on("click", function() {
            
            if($("#kioskName").val()=="" || $("#kioskLat").val()=="" || $("#kioskLon").val()=="")
            {
                $("#kioskFormStatus").css("color","#fec44f");
                kioskFormStatus.innerHTML ="Incomplete form.";
               
            }
            else {
               d3.json('data/results.json', function(d){
                   
               });
               if(kioskID)
               {
                   $.ajax({
                        url: "src/php/sidebar.php",
                        type: "post",
                        dataType: "json",
                        cache:false,
                     
                        data: {
                            action: 'updateKiosk',
                            id: kioskID,
                            name: $("#kioskName").val(),
                            lat: $("#kioskLat").val(),
                            lon: $("#kioskLon").val(),
                            mapCenterLat: map.getCenter().lat,
                            mapCenterLon: map.getCenter().lng,
                            mapZoom: map.getZoom(),
                            image: kioskImageData,
                        },
                        success: function(id) {
                            kioskID = id;
                         
                            $("#kioskFormStatus").show();
                            $("#kioskFormStatus").css("color","#fec44f");
                            kioskFormStatus.innerHTML ="Saved!";
                            $("#kioskFormStatus").fadeOut( 3000, "linear");
                        }
                    });
               }
               else{
                    $.ajax({
                        url: "src/php/sidebar.php",
                        type: "post",
                        dataType: "json",
            
                        data: {
                            action: 'addKiosk',
                            id: ID(),
                            name: $("#kioskName").val(),
                            lat: $("#kioskLat").val(),
                            lon: $("#kioskLon").val(),
                            mapCenterLat: map.getCenter().lat,
                            mapCenterLon: map.getCenter().lng,
                            mapZoom: map.getZoom(),
                            image: kioskImageData
                        },
                        success: function(id) {
                            kioskID = id;
                            kioskName = $("#kioskName").val();
                       
                            
                            $("#kioskFormStatus").show();
                            $("#kioskFormStatus").css("color","#fec44f");
                            kioskFormStatus.innerHTML ="Saved!";
                            $("#kioskFormStatus").fadeOut( 3000, "linear");;
                        }
                    });
               }     
            }

        });
    }

    let addKioskDetails = function() {
        initAddKioskUI();
        if(!isKioskSet)
        {
            map.on('click', function(e){
                kioskLat.value = 'Lat: ' + e.latlng.lat;
                kioskLon.value = 'Lon: ' + e.latlng.lng;
                kioskMarker = L.marker(e.latlng, { draggable: true, icon: fixedKioskPoint }).addTo(map).on("move", function(d) {
                    kioskLat.value = 'Lat: ' + d.latlng.lat;
                    kioskLon.value = 'Lon: ' + d.latlng.lng;
                });
                map.off('click');
                isKioskSet = true;
            });
          
        }
    }

    let loadKioskDetails = function(data, i) {
        initAddKioskUI();
    
        kioskIndex = i;
        kioskID = data[i].id;
        kioskName = data[i].name;
        $('#kioskName').val(kioskName);
        kioskLat.value = 'Lat: ' + data[i].lat;
        kioskLon.value = 'Lon: ' + data[i].lon;
     
        kioskImg.src = data[i].iconUrl;

        if(!kioskMarker)
        {
            kioskMarker = L.marker([data[i].lat, data[i].lon], { draggable: true, icon: fixedKioskPoint }).addTo(map).on("move", function(d) {
                    kioskLat.value = 'Lat: ' + d.latlng.lat;
                    kioskLon.value = 'Lon: ' + d.latlng.lng;
            });
        }
        else {
            kioskMarker.addTo(map).on("move", function(d) {
                    kioskLat.value = 'Lat: ' + d.latlng.lat;
                    kioskLon.value = 'Lon: ' + d.latlng.lng;
            });
        }
        
        kioskImageData = "";

        map.setView(new L.LatLng(data[i].mapCenterLat, data[i].mapCenterLon), data[i].mapZoom);
    }

    let addIcon = function(name, id, iconUrl, iconSize, showOnMap) {
        col = document.createElement("div");
        col.id = id;
        col.className = "col-lg-3 col-md-4 col-xs-6 kioskIconDiv";
        row.appendChild(col);

        icon = document.createElement("a");
        icon.href="#";
        icon.className= "d-block mb-4 h-100";
        col.appendChild(icon);

        iconImage= document.createElement("img");
        if(showOnMap)
            iconImage.className = "img-fluid kiosk-img-thumbnail mainAttractionIcon";
        else
            iconImage.className = "img-fluid kiosk-img-thumbnail attractionIcon";
        iconImage.src = iconUrl;
        iconImage.width = iconSize[0];
        iconImage.height = iconSize[1];
        icon.appendChild(iconImage);

        iconText = document.createElement('div');
        iconText.className = "kioskName";
        iconText.innerHTML = name;
        icon.appendChild(iconText);
    }

// Attraction functions 

    let initAddNewAttractionUI = function() {

        sidebarForms = document.getElementById('sidebarForms');
        sidebarForms.className="col-md-12";

        attractionImgTitle = document.createElement("h3")
        attractionImgTitle.id = "attractionImgTitle";
        attractionImgTitle.innerHTML = "Attraction Image";
        sidebarForms.appendChild(attractionImgTitle);

        attractionImg = document.createElement("img");
        attractionImg.width =200;
        attractionImg.height =200;
        attractionImg.src = "http://via.placeholder.com/200x200";
        attractionImg.id = "attractionImg";
        sidebarForms.appendChild(attractionImg);

        attractionImgUpload = document.createElement("input");
        attractionImgUpload.type = "file";
        attractionImgUpload.id = "attractionImgUpload";
        attractionImgUpload.accept = ".png";
        sidebarForms.appendChild(attractionImgUpload);

        attractionName = document.createElement("input");
        attractionName.type = "text";
        attractionName.id = "attractionName";
        attractionName.placeholder = "Attraction Name";
        sidebarForms.appendChild(attractionName);

        attractionLat = document.createElement("input");
        attractionLat.type = "text";
        attractionLat.id = "attractionLat"
      
        attractionLat.placeholder = "Attraction Latitude";
        attractionLat.readOnly = true;
        sidebarForms.appendChild(attractionLat);
        
        attractionLon = document.createElement("input");
        attractionLon.type = "text";
        attractionLon.id = "attractionLon";
        attractionLon.placeholder = "Attraction Longitude";
        attractionLon.readOnly = true;
        sidebarForms.appendChild(attractionLon);

        attractionTypeTitle = document.createElement("h3")
        attractionTypeTitle.id = "attractionTypeTitle";
        attractionTypeTitle.innerHTML = "Attraction Type";
        sidebarForms.appendChild(attractionTypeTitle);

        attractionTypePOIContainer = document.createElement('div');
        attractionTypePOIContainer.className = "radio-inline";
        sidebarForms.appendChild(attractionTypePOIContainer);
        attractionTypePOILabel = document.createElement('label');
        attractionTypePOIContainer.append(attractionTypePOILabel);
        attractionTypePOIRadio = document.createElement('input');
        attractionTypePOIRadio.type = "radio";
        attractionTypePOIRadio.name ="attractionType";
        attractionTypePOIRadio.value = "poi";
        attractionTypePOIRadio.checked= true;
        attractionTypePOILabel.className ="radio-inline";
        attractionTypePOILabel.innerHTML ="Point of Interest";
        attractionTypePOIContainer.appendChild(attractionTypePOIRadio);

        attractionTypeEventContainer = document.createElement('div');
        attractionTypeEventContainer.className = "radio-inline";
        sidebarForms.appendChild(attractionTypeEventContainer);
        attractionTypeEventLabel = document.createElement('label');
        attractionTypeEventContainer.append(attractionTypeEventLabel);
        attractionTypeEventRadio = document.createElement('input');
        attractionTypeEventRadio.type = "radio";
        attractionTypeEventRadio.name ="attractionType";
        attractionTypeEventRadio.value = "event";
        attractionTypeEventLabel.className ="radio-inline";
        attractionTypeEventLabel.innerHTML ="Event";
        attractionTypeEventContainer.appendChild(attractionTypeEventRadio);


        attractionTypeOffMapContainer = document.createElement('div');
        attractionTypeOffMapContainer.className = "radio-inline";
        sidebarForms.appendChild(attractionTypeOffMapContainer);
        attractionTypeOffMapLabel = document.createElement('label');
        attractionTypeOffMapContainer.append(attractionTypeOffMapLabel);
        attractionTypeOffMapRadio = document.createElement('input');
        attractionTypeOffMapRadio.type = "radio";
        attractionTypeOffMapRadio.name ="attractionType";
        attractionTypeOffMapRadio.value = "offmap";
        attractionTypeOffMapLabel.className ="radio-inline";
        attractionTypeOffMapLabel.innerHTML ="Off Map";
        attractionTypeOffMapContainer.appendChild(attractionTypeOffMapRadio);

        attractionDaysTitle = document.createElement("h3")
        attractionDaysTitle.id = "attractionDaysTitle";
        attractionDaysTitle.innerHTML = "Days";
        sidebarForms.appendChild(attractionDaysTitle);

        attractionDaysAllDayContainer = document.createElement('div');
        attractionDaysAllDayContainer.className = "checkbox-inline";
        sidebarForms.appendChild(attractionDaysAllDayContainer);
        attractionDaysAllDayLabel = document.createElement('label');
        attractionDaysAllDayContainer.append(attractionDaysAllDayLabel);
        attractionDaysAllDayCheckBox = document.createElement('input');
        attractionDaysAllDayCheckBox.type = "checkbox";
        attractionDaysAllDayCheckBox.value = "everyday";
        attractionDaysAllDayCheckBox.name ="attractionDay";
        attractionDaysAllDayCheckBox.checked= true;
        attractionDaysAllDayLabel.className ="checkbox-inline";
        attractionDaysAllDayLabel.innerHTML ="Everyday";
        attractionDaysAllDayContainer.appendChild(attractionDaysAllDayCheckBox);

        attractionDaysMondayContainer = document.createElement('div');
        attractionDaysMondayContainer.className = "checkbox-inline";
        sidebarForms.appendChild(attractionDaysMondayContainer);
        attractionDaysMondayLabel = document.createElement('label');
        attractionDaysMondayLabel.className ="checkbox-inline";
        attractionDaysMondayLabel.innerHTML ="Monday";
        attractionDaysMondayContainer.append(attractionDaysMondayLabel);
        attractionDaysMondayCheckBox = document.createElement('input');
        attractionDaysMondayCheckBox.type = "checkbox";
        attractionDaysMondayCheckBox.value = "monday";
        attractionDaysMondayCheckBox.name ="attractionDay";
        attractionDaysMondayContainer.appendChild(attractionDaysMondayCheckBox);

        attractionDaysTuesdayContainer = document.createElement('div');
        attractionDaysTuesdayContainer.className = "checkbox-inline";
        sidebarForms.appendChild(attractionDaysTuesdayContainer);
        attractionDaysTuesdayLabel = document.createElement('label');
        attractionDaysTuesdayLabel.className ="checkbox-inline";
        attractionDaysTuesdayLabel.innerHTML ="Tuesday";
        attractionDaysTuesdayContainer.append(attractionDaysTuesdayLabel);
        attractionDaysTuesdayCheckBox = document.createElement('input');
        attractionDaysTuesdayCheckBox.type = "checkbox";
        attractionDaysTuesdayCheckBox.value = "tuesday";
        attractionDaysTuesdayCheckBox.name ="attractionDay";
        attractionDaysTuesdayContainer.appendChild(attractionDaysTuesdayCheckBox);

        attractionDaysWednesdayContainer = document.createElement('div');
        attractionDaysWednesdayContainer.className = "checkbox-inline";
        sidebarForms.appendChild(attractionDaysWednesdayContainer);
        attractionDaysWednesdayLabel = document.createElement('label');
        attractionDaysWednesdayLabel.className ="checkbox-inline";
        attractionDaysWednesdayLabel.innerHTML ="Wednesday";
        attractionDaysWednesdayContainer.append(attractionDaysWednesdayLabel);
        attractionDaysWednesdayCheckBox = document.createElement('input');
        attractionDaysWednesdayCheckBox.type = "checkbox";
        attractionDaysWednesdayCheckBox.value = "wednesday";
        attractionDaysWednesdayCheckBox.name ="attractionDay";
        attractionDaysWednesdayContainer.appendChild(attractionDaysWednesdayCheckBox);

        attractionDaysThursdayContainer = document.createElement('div');
        attractionDaysThursdayContainer.className = "checkbox-inline";
        sidebarForms.appendChild(attractionDaysThursdayContainer);
        attractionDaysThursdayLabel = document.createElement('label');
        attractionDaysThursdayLabel.className ="checkbox-inline";
        attractionDaysThursdayLabel.innerHTML ="Thrusday";
        attractionDaysThursdayContainer.append(attractionDaysThursdayLabel);
        attractionDaysThursdayCheckBox = document.createElement('input');
        attractionDaysThursdayCheckBox.type = "checkbox";
        attractionDaysThursdayCheckBox.value = "thrusday";
        attractionDaysThursdayCheckBox.name ="attractionDay";
        attractionDaysThursdayContainer.appendChild(attractionDaysThursdayCheckBox);

        attractionDaysFridayContainer = document.createElement('div');
        attractionDaysFridayContainer.className = "checkbox-inline";
        sidebarForms.appendChild(attractionDaysFridayContainer);
        attractionDaysFridayLabel = document.createElement('label');
        attractionDaysFridayLabel.className ="checkbox-inline";
        attractionDaysFridayLabel.innerHTML ="Friday";
        attractionDaysFridayContainer.append(attractionDaysFridayLabel);
        attractionDaysFridayCheckBox = document.createElement('input');
        attractionDaysFridayCheckBox.type = "checkbox";
        attractionDaysFridayCheckBox.value = "friday";
        attractionDaysFridayCheckBox.name ="attractionDay";
        attractionDaysFridayContainer.appendChild(attractionDaysFridayCheckBox);

        attractionDaysSaturdayContainer = document.createElement('div');
        attractionDaysSaturdayContainer.className = "checkbox-inline";
        sidebarForms.appendChild(attractionDaysSaturdayContainer);
        attractionDaysSaturdayLabel = document.createElement('label');
        attractionDaysSaturdayLabel.className ="checkbox-inline";
        attractionDaysSaturdayLabel.innerHTML ="Saturday";
        attractionDaysSaturdayContainer.append(attractionDaysSaturdayLabel);
        attractionDaysSaturdayCheckBox = document.createElement('input');
        attractionDaysSaturdayCheckBox.type = "checkbox";
        attractionDaysSaturdayCheckBox.value = "saturday";
        attractionDaysSaturdayCheckBox.name ="attractionDay";
        attractionDaysSaturdayContainer.appendChild(attractionDaysSaturdayCheckBox);

        attractionDaysSundayContainer = document.createElement('div');
        attractionDaysSundayContainer.className = "checkbox-inline";
        sidebarForms.appendChild(attractionDaysSundayContainer);
        attractionDaysSundayLabel = document.createElement('label');
        attractionDaysSundayLabel.className ="checkbox-inline";
        attractionDaysSundayLabel.innerHTML ="Sunday";
        attractionDaysSundayContainer.append(attractionDaysSundayLabel);
        attractionDaysSundayCheckBox = document.createElement('input');
        attractionDaysSundayCheckBox.type = "checkbox";
        attractionDaysSundayCheckBox.value = "sunday";
        attractionDaysSundayCheckBox.name ="attractionDay";
        attractionDaysSundayContainer.appendChild(attractionDaysSundayCheckBox);

        attractionDayContainer = document.createElement("div")
        attractionDayContainer.id = "attractionDayContainer";
        sidebarForms.appendChild(attractionDayContainer);

        attractionDayTitle = document.createElement("h3")
        attractionDayTitle.id = "attractionDayTitle";
        attractionDayTitle.innerHTML = "Active dates (optional)";
        attractionDayContainer.appendChild(attractionDayTitle);

        attractionStartDateInput = document.createElement("input");
        attractionStartDateInput.type = "text";
        attractionStartDateInput.id = "attractionStartTimeInput";
        attractionStartDateInput.className = "datetime";
        attractionStartDateInput.placeholder ="Start Date";
        attractionDayContainer.append(attractionStartDateInput);

        attractionEndDateInput = document.createElement("input");
        attractionEndDateInput.type = "text";
        attractionEndDateInput.id = "attractionEndDateInput";
        attractionEndDateInput.className = "datetime";
        attractionEndDateInput.placeholder ="End Date";
        attractionDayContainer.append(attractionEndDateInput);

        $('#attractionStartTimeInput').datepicker();
        $('#attractionEndDateInput').datepicker();

        attractionHoursContainer = document.createElement("div")
        attractionHoursContainer.id = "attractionHoursContainer";
        sidebarForms.appendChild(attractionHoursContainer);

        attractionHoursTitle = document.createElement("h3")
        attractionHoursTitle.id = "attractionHourTitle";
        attractionHoursTitle.innerHTML = "Hours (optional)";
        attractionHoursContainer.appendChild(attractionHoursTitle);

        attractionStartTimeInput = document.createElement("input");
        attractionStartTimeInput.type = "text";
        attractionStartTimeInput.id = "attractionStartTimeInput";
        attractionStartTimeInput.className = "timepicker datetime";
        attractionStartTimeInput.placeholder ="Start Time";
        attractionHoursContainer.append(attractionStartTimeInput);

        attractionEndTimeInput = document.createElement("input");
        attractionEndTimeInput.type = "text";
        attractionEndTimeInput.id = "attractionEndTimeInput";
        attractionEndTimeInput.className = "timepicker datetime";
        attractionEndTimeInput.placeholder ="End Time";
        attractionHoursContainer.append(attractionEndTimeInput);

        $('.timepicker').timepicker({
            timeFormat: 'H:mm ',
            interval: 30,
            minTime: '00',
            maxTime: '23',
            dynamic: false,
            dropdown: true,
            scrollbar: true
        });


        attractionDescriptionContainer = document.createElement("div")
        attractionDescriptionContainer.id = "attractionDescriptionContainer";
        sidebarForms.appendChild(attractionDescriptionContainer);

        attractionDescriptionTitle = document.createElement("h3")
        attractionDescriptionTitle.id = "attractionDescriptionTitle";
        attractionDescriptionTitle.innerHTML = "Description";
        attractionDescriptionContainer.appendChild(attractionDescriptionTitle);

        attractionDecription = document.createElement("input");
        attractionDecription.type = "text";
        attractionDecription.id = "attractionDecription";
        attractionDecription.placeholder = "Description goes here...";
        attractionDescriptionContainer.appendChild(attractionDecription);

        attractionSubmitButton = document.createElement("input")
        attractionSubmitButton.type = "button";
        attractionSubmitButton.id = "attractionSubmitButton";
        attractionSubmitButton.className = "btn btn-danger btn-lg";
        attractionSubmitButton.value = "Save";
        sidebarForms.appendChild(attractionSubmitButton);

        attractionDeleteButton = document.createElement("input")
        attractionDeleteButton.type = "button";
        attractionDeleteButton.id = "attractionDeleteButton";
        attractionDeleteButton.className = "btn btn-primary btn-lg";
        attractionDeleteButton.value = "Delete";
        sidebarForms.appendChild(attractionDeleteButton);

        attractionFormStatus = document.createElement("p")
        attractionFormStatus.id = "attractionFormStatus";
        sidebarForms.appendChild(attractionFormStatus);
    }

    let addNewAttractions = function() {
        clearSidebar();
        clearMap();

        row = document.createElement("div");
        row.id= "mainRow";
        row.className = "row text-center text-lg-left";
        container.appendChild(row);
        
        populateAttractions();
       
        initAddNewAttractionMapControl();
        clearAllNavHighlight();
        $('#addMainAttractionNav').css('color', '#ffeda0');


       

        let fixedAttracionUrl = "imgs/kiosks/circle.ico"
        fixedAttracionPoint = L.icon({iconUrl: fixedAttracionUrl, iconSize: [10,10] });
        let isSaved = false;
        map.on('click', function(e){
            
            if(!isSaved){
                clearSidebar();
                initAddNewAttractionUI();
                attractionLat.value = 'Lat: ' + e.latlng.lat;
                attractionLon.value = 'Lon: ' + e.latlng.lng;
                let coord = e.latlng.toString().split(',');
                let lat = coord[0].split('(');
                let lng = coord[1].split(')');

                let startLat;
                let startLng;
                let endLat;
                let endLng;
                let anchor;
                let attractionIcon;
                let polyline;
                    
                attractionIcon = L.marker(e.latlng,{draggable: true}).addTo(map).on('move', function(d) {
                    
                    if(!anchor)
                    {
                        startLat = e.latlng.lat;
                        startLng = e.latlng.lng;
                    }
                        
                    endLat  = d.latlng.lat;
                    endLng  = d.latlng.lng;

                    attractionEndLat = endLat;
                    attractionEndLon = endLng;

                    if(anchor)
                        map.removeLayer(anchor)
                    anchor = new L.marker([ startLat,  startLng], { draggable: true, icon: fixedAttracionPoint }).addTo(map);

                    let polylineAttr = {
                        polyline: polyline,
                        startLat: startLat,
                        startLng: startLng,
                        endLat: endLat,
                        endLng: endLng,
                        map: map
                    };

                    polyline = drawPolyline(polylineAttr);
                    polyline.addTo(map);
                    anchorPolylineMarkerList.push(polyline);
   
                });

                attractionIcon.on('moveend', function() {
                    anchorPolylineMarkerList.push(anchor);
                    
                    anchor.on('move', function(d) {
                            startLat = d.latlng.lat;
                            startLng = d.latlng.lng;

                            attractionLat.value = 'Lat: ' + d.latlng.lat;
                            attractionLon.value = 'Lon: ' + d.latlng.lng;

                            let polylineAttr = {
                                polyline: polyline,
                                startLat: startLat,
                                startLng: startLng,
                                endLat: endLat,
                                endLng: endLng,
                                map: map
                            };

                            polyline = drawPolyline(polylineAttr);
                            polyline.addTo(map);
                            anchorPolylineMarkerList.push(polyline);
                    });

                
                });

                attractionMarkerList.push(attractionIcon);


                $("#attractionImgUpload").change(function(){
                    getBase64($("#attractionImgUpload")
                    [0].files[0], 'attraction');
                    readURL(this,'attraction', attractionIcon);
                });

                isSaved = true;

                $('#attractionDeleteButton').on("click", function() {
                    if(attractionIcon)
                        map.removeLayer(attractionIcon);
                    if(polyline)
                        map.removeLayer(polyline);
                    if(anchor)
                        map.removeLayer(anchor);
                   clearSidebar();
                   isSaved = false;

                   addNewAttractions();
                });

            } 

            else {
                   $("#attractionFormStatus").show();
                   $("#attractionFormStatus").css("color","#fec44f");
                   attractionFormStatus.innerHTML ="Save or Delete this attraction before adding a new one!";
                   $("#attractionFormStatus").fadeOut( 10000, "linear");
            }

            $('#attractionSubmitButton').on("click", function() {

                if($("#attractionName").val()=="" || $('#attractionDecription').val()=="" || !attractionImageData)
                {
                    $("#attractionFormStatus").show();
                    $("#attractionFormStatus").css("color","#fec44f");
                    attractionFormStatus.innerHTML ="Incomplete Form.";
                    $("#attractionFormStatus").fadeOut( 3000, "linear");
                   
                }   
                else {

                    let attractionDay = [];
                    let attractionType = $('[name="attractionType"]').val();
                    $('input[name="attractionDay"]:checked').each(function() {
                        attractionDay.push(this.value);
                    });
            
                    $.ajax({
                        url: "src/php/sidebar.php",
                        type: "post",
                        dataType: "json",
            
                        data: {
                            action: 'addAttraction',
                            id: ID(),
                            name: $('#attractionName').val(),
                            lat: $('#attractionLat').val(),
                            lon: $('#attractionLon').val(),
                            endLat: attractionEndLat,
                            endLon: attractionEndLon,
                            type: attractionType,
                            day: attractionDay,
                            startDate: $('#attractionStartDateInput').val(),
                            endDate: $('#attractionEndDateInput').val(),
                            startTime: $('#attractionStartTimeInput').val(),
                            endTime: $('#attractionEndTimeInput').val(),
                            description:$('#attractionDecription').val(),
                            image: attractionImageData
                        },
                        success: function(d) {
                
                            $('#attractionFormStatus').show();
                            $('#attractionFormStatus').css("color","#fec44f");
                            attractionFormStatus.innerHTML ="Saved!";
                            $('#attractionFormStatus').fadeOut( 3000, "linear");
                            addNewAttractions();
                        }
                    });

                     isSaved = false;
                }
                  
            });
        });
    }

    let addNewAttractionsToKioskList = function() {

        clearPerKioskView();
        
        container = document.createElement("div");
        container.className = "container";
        mainContainer.appendChild(container);

        row = document.createElement("div");
        row.id= "mainRow";
        row.className = "row text-center text-lg-left";
        container.appendChild(row);
        
        populateAttractions(showOnMap=false);
    }

    let populateAttractions = function(showOnMap=true) {

        let filePath = 'data/attractions/AttractionList.json';

        let addKioskName = "New Attraction";
        let addKioskId ="new";
        let addKioskIconUrl = "imgs/kiosks/add.png";
        let addKioskIconSize = [200, 200];

        addIcon(addKioskName, addKioskId, addKioskIconUrl, addKioskIconSize, showOnMap);

        if(fileExists(filePath)) {
            d3.json(filePath, function(data) {
                _.forEach(data, function(d,i) {
                     addIcon(d.name, i, d.iconUrl, d.iconSize, showOnMap);
                     if(showOnMap)
                     {
                        mainAttracionPoint = L.icon({iconUrl: d.iconUrl, iconSize: [30,30] });
                        attractionMainMarker = new L.marker([ d.lat,  d.lon], { draggable: true, icon: mainAttracionPoint }).addTo(map)
                        attractionMarkerList.push(attractionMainMarker);
                     }
                });
            });
        }
        else {
            console.log("don't exist");
        }
       
    }

    let initAddNewAttractionMapControl = function() {
    }

    let drawPolyline = function(polylineAttr) {

        if(polylineAttr.polyline)
            polylineAttr.map.removeLayer(polylineAttr.polyline)
        let pointA = new L.LatLng(polylineAttr.startLat, polylineAttr.startLng);
        let pointB = new L.LatLng(polylineAttr.endLat, polylineAttr.endLng);
        let pointList = [pointA, pointB];
        polylineAttr.polyline = new L.Polyline(pointList, {
            color: 'red',
            weight: 3,
            opacity: 0.5,
            smoothFactor: 1
        });
        return polylineAttr.polyline;
    }



// UI helper functions
    let clearMap = function() {
        map.off('click');
        _.forEach(anchorPolylineMarkerList, function(d){
            if(d)
                map.removeLayer(d)
        });

        _.forEach(attractionMarkerList, function(d){
            if(d)
                map.removeLayer(d)
        });

        $('#sidebarForms').empty();

    }

    let clearPerKioskView = function() {
        clearMap();
        clearSidebar();
        if(kioskMarker)
        {
            map.removeLayer(kioskMarker);
            kioskMarker=null;
        }  
    }

    let clearSidebar = function() {
        if($('.container'))
            $('.container').empty();
        $('#sidebarForms').empty();
    }
 
    let clearAllNavHighlight = function() {
        let navs = $('.menuNavLinks');
        _.forEach(navs, function(d) {
            $(d).css('color','white');
        })
    }

    let initNavBar = function() {
        menuBar = document.createElement("div");
        menuBar.className = "menuBar";
        mainContainer.appendChild(menuBar);

        navTextKiosk = document.createElement('a');
        navTextKiosk.className = "menuNavLinks";
        navTextKiosk.id = "addKioskNav";
        navTextKiosk.href="#";
        navTextKiosk.innerHTML = "Kiosk";
        menuBar.appendChild(navTextKiosk);

        navTextAttraction = document.createElement('a');
        navTextAttraction.className = "menuNavLinks";
        navTextAttraction.id = "addAttractionNav";
        navTextAttraction.href="#";
        navTextAttraction.innerHTML = "Attractions";
        menuBar.appendChild(navTextAttraction);

        navTextTransit = document.createElement('a');
        navTextTransit.className = "menuNavLinks";
        navTextTransit.href="#";
        navTextTransit.innerHTML = "Transit";
        menuBar.appendChild(navTextTransit);

        navTextSimulation = document.createElement('a');
        navTextSimulation.className = "menuNavLinks";
        navTextSimulation.href="#";
        navTextSimulation.innerHTML = "Simulation";
        menuBar.appendChild(navTextSimulation);

        navTextHome = document.createElement('a');
        navTextHome.className = "menuNavLinks";
        navTextHome.id = "linkToMainView";
        navTextHome.href="#";
        navTextHome.innerHTML = "Home";
        menuBar.appendChild(navTextHome);

        $('#addKioskNav').on('click', function() {
            clearSidebar();
            clearAllNavHighlight();
            $("#addKioskNav").css("color","#ffeda0");
            if(!kioskID)
                addKioskDetails();
            else
               {
                   let data=[];
                   data[kioskIndex]= {
                       'id': kioskID,
                       'name': kioskName,
                       'lat': kioskLat.value.slice(4),
                       'lon': kioskLon.value.slice(4),
                       'iconUrl': kioskImg.src,
                       'mapCenterLat': map.getCenter().lat,
                       'mapCenterLon': map.getCenter().lng,
                       'mapZoom': map.getZoom()
                   }

                   loadKioskDetails(data, kioskIndex);
               }
        });

        $('#addAttractionNav').on('click', function() {
            clearAllNavHighlight();
            $("#addAttractionNav").css("color","#ffeda0");
            addNewAttractionsToKioskList();
        });

        $('#linkToMainView').click(function() {
            clearPerKioskView();
            $('.menuBar').remove();
            init(map);
        });
    }

// Other helper functions

    function uniqueNumber() {
        let date = Date.now();
        
        if (date <= uniqueNumber.previous) {
            date = ++uniqueNumber.previous;
        } else {
            uniqueNumber.previous = date;
        }

        return date;
    }

    function ID(){
        return uniqueNumber();
    };

    function readURL(input, origin, icon) {
        if (input.files && input.files[0]) {
           
            var reader = new FileReader();

            reader.onload = function (e) {
                if(origin=="kiosk")
                    $('#kioskImg').attr('src', e.target.result);
                else if(origin=="attraction") {
                   $('#attractionImg').attr('src', e.target.result);
                   let newIcon = L.icon({iconUrl: e.target.result, iconSize: [100/2, 103/2]});
                   icon.setIcon(newIcon);
                }
               
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    function getBase64(file, origin) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            if(origin=="kiosk")
                kioskImageData = reader.result;
            else if(origin=="attraction") {
                attractionImageData = reader.result;
            }
            // console.log(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    function fileExists(url)
    {
        var http = new XMLHttpRequest();
        try{
            http.open('HEAD', url, false);
        }
        catch(err) {
            console.log(err);
        }
       
        http.send();
        return http.status!=404;
    }

    return {
        init: init
    }
})();