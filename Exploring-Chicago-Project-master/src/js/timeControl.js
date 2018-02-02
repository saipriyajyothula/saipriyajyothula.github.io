let TimeControl = (function() {

    let timeInHours;
    let timeInMinutes;
    let currentDay;
    let isTimelapse;

    let init = function(App) {
        
       initToggleButton();
       initTimelapseButton();
       initDayPicker();
       initTimeSlider();
       initHourButton();
       toggleControlPanel();
    };

    let initToggleButton = function() {
        let controlPanel = document.getElementById('controlpanel');
        let isSelected = false;
        let toggleButton = document.createElement("input");

        toggleButton.type = "button";
        toggleButton.id = "controlPanelToggleButton"
        toggleButton.value = "Show Control Panel";
        controlPanel.appendChild(toggleButton);

        $('input[type=button][id=controlPanelToggleButton]').on('click', function() {
            isSelected = !isSelected;
            if(isSelected)
                toggleButton.value = "Hide Control Panel";
            else  
                 toggleButton.value = "Show Control Panel";
            
            toggleControlPanel();
        });

    }

    let initTimelapseButton = function() {
        isTimelapse = false;

        let timelapse = document.getElementById('timelapse');

        let timelapseButton = document.createElement("input");

        timelapseButton.type = "button";
        timelapseButton.id = "timelapseButton"
        timelapseButton.value = "Timelapse";
        timelapse.appendChild(timelapseButton);

        $('input[type=button][id=timelapseButton]').on('click', function() {
           let tempTimeInMinutes = timeInMinutes;
           let timeplapseLoop;
           isTimelapse = true;
           $('#detailedMapContainer').hide();
           $('.clock').show();
           initLocalClock(moment().format("HH:mm"));
           tempLocalMinutes = 0; 
           timeplapseLoop = setInterval(function() {
            if(tempLocalMinutes==60){
                $('#nextHourButton').trigger('click');
                tempLocalMinutes = 0;
            }
            if(timeInMinutes >= 1440)
            {
                clearInterval(timeplapseLoop);
                timeInMinutes = tempTimeInMinutes;
                isTimelapse = false;
                $('#detailedMapContainer').show();
                $('.clock').hide();
                $('body').css("background-color","#fff");
                updateSlider();
            }
            minutes = parseInt(timeInMinutes[0])+tempLocalMinutes;
            let meridian =' AM';
            if(minutes>720)
            meridian = ' PM';
            let hour = Math.floor(minutes / 60);
            let minute = minutes - hour * 60;
            if(minute.length == 1)
            minute = '0'+minute;
            initLocalClock(moment(hour+':'+minute+meridian,'HH:mm').format("HH:mm"), true);
            tempLocalMinutes += 1;
            
           }, 20);          
        });
    }

    let toggleControlPanel = function() {

        $('#daycontrol').toggle();
        $('#timelapse').toggle();
        $('#timecontrol').toggle();
        $('#nexthourcontrol').toggle();
    }

    let initHourButton = function() {
        
        let nextHourControl = document.getElementById("nexthourcontrol");

        let prevHourButton = document.createElement("input");
        prevHourButton.type = "button";
        prevHourButton.value = "Prev Hour";
        prevHourButton.id = "prevHourButton";
        nextHourControl.appendChild(prevHourButton);

        let nextHourButton = document.createElement("input");
        nextHourButton.type = "button";
        nextHourButton.value = "Next Hour";
        nextHourButton.id = "nextHourButton";
        nextHourControl.appendChild(nextHourButton);
        
        $('input[type=button][id=nextHourButton]').on('click', function() {
         timeInMinutes = parseFloat(timeInMinutes[0]);
        
            if(timeInMinutes + 60 > 1440) 
                timeInMinutes = 1380;

            timeInMinutes += 60;

            updateSlider();
        });

        $('input[type=button][id=prevHourButton]').on('click', function() {
            timeInMinutes = parseFloat(timeInMinutes[0]);
        
            if(timeInMinutes - 60 < 0) 
                timeInMinutes = 60;

            timeInMinutes -= 60;
            
            updateSlider();
        });
       
    };

    let initDayPicker = function() {
        
        let radio_home = document.getElementById("daycontrol");
        let monday_button = makeRadioButton("daycontrol", "monday", "Mon");
        let tuesday_button = makeRadioButton("daycontrol", "tuesday", "Tue");
        let wednesday_button = makeRadioButton("daycontrol", "wednesday", "Wed");
        let thrusday_button = makeRadioButton("daycontrol", "thursday", "Thurs");
        let friday_button = makeRadioButton("daycontrol", "friday", "Fri");
        let saturday_button = makeRadioButton("daycontrol", "saturday", "Sat");
        let sunday_button = makeRadioButton("daycontrol", "sunday", "Sun");

        

        radio_home.appendChild(monday_button);
        radio_home.appendChild(tuesday_button);
        radio_home.appendChild(wednesday_button);
        radio_home.appendChild(thrusday_button);
        radio_home.appendChild(friday_button);
        radio_home.appendChild(saturday_button);
        radio_home.appendChild(sunday_button);

        $('input[type=radio][name=daycontrol]').on('change', function() {
            currentDay = $(this).val();
            App.update(timeInHours, currentDay, isTimelapse); 
          
        });
    };

    let initTimeSlider = function() {
        let slider = document.getElementById('timecontrol');
        noUiSlider.create(slider, {
            start: getTimeInMinutes(),
            connect: [true, false],
            tooltips: [  false],

            animate: false,
             pips: {
                mode: 'values',
                values: [0, 360, 720, 1080, 1440],
                density: 4,
                format: wNumb({
                    decimals: 0,
                    encoder: function(value) {
                        return value/60;
                    }
                })
            },
            range: {
                min: 0,
                max: 1440
            }  
        });

        slider.noUiSlider.on('update', function( values, handle ){
       
            timeInMinutes = values;
            timeInHours = convertValuesToTime(values);
            timeInHours = timeInHours[0];
            App.update(timeInHours, currentDay, isTimelapse);
        });
    };

    let makeRadioButton = function(name, value, text) {

        var label = document.createElement("label");
        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = name;
        radio.value = value;
        if(value == moment().format("dddd").toLowerCase())
        {
            radio.checked = true;
            currentDay = value;
        } 
        label.appendChild(radio);

        label.appendChild(document.createTextNode(text));
        return label;
    };

    let convertValuesToTime = function(values) {
        values = values
        .map(value => Number(value) % 1440)
        .map(value => convertMinutesToHoursAndMinutes(value));

        return values;
    };

    let convertMinutesToHoursAndMinutes = function(minutes) {
        let meridian =' AM';
        if(minutes>720)
            meridian = ' PM';
        let hour = Math.floor(minutes / 60);
        let minute = minutes - hour * 60;
        if(minute.length == 1)
         minute = '0'+minute;
        return hour + ':' + minute + meridian;
    }

    let getTimeInMinutes = function() {
        let time = moment().format('HH:mm')
        let a = time.split(':');
        let minutes = (+a[0]) * 60 + (+a[1]);
        return parseInt(minutes);
    }

    let updateSlider = function() {
        let slider = document.getElementById('timecontrol');
        slider.noUiSlider.set(timeInMinutes)
        timeInHours = convertValuesToTime(timeInMinutes);
        timeInHours = timeInHours[0];
        initLocalClock(moment(timeInHours,'HH:mm').format("HH:mm"), true);
        App.update(timeInHours, currentDay, isTimelapse); 
    }

    let initLocalClock = function(time, update=false) {
        // Get the local time using JS
        var a = time.split(':');
        var seconds = a[2];
        //if(!update)
            var minutes = a[1];
        //else
            //var minutes = "00";
        var hours = a[0];

        // Create an object with each hand and it's angle in degrees
        var hands = [
            {
            hand: 'hours',
            angle: (hours * 30) + (minutes / 2)
            },
            {
            hand: 'minutes',
            angle: (minutes * 6)
            },
            {
            hand: 'seconds',
            angle: (seconds * 6)
            }
        ];
        // Loop through each of these hands to set their angle
        for (var j = 0; j < hands.length; j++) {
            var elements = document.querySelectorAll('.' + hands[j].hand);
            for (var k = 0; k < elements.length; k++) {
                elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
                elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
                // If this is a minute hand, note the seconds position (to calculate minute position later)
                if (hands[j].hand === 'minutes') {
                elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
                }
            }
        }
    }

    let setUpMinuteHands = function() {
        // Find out how far into the minute we are
        var containers = document.querySelectorAll('.minutes-container');
        var secondAngle = containers[0].getAttribute("data-second-angle");
        if (secondAngle > 0) {
            // Set a timeout until the end of the current minute, to move the hand
            var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
            setTimeout(function() {
            moveMinuteHands(containers);
            }, delay);
        }
    }

    let moveMinuteHands = function() {
        for (var i = 0; i < containers.length; i++) {
            containers[i].style.webkitTransform = 'rotateZ(6deg)';
            containers[i].style.transform = 'rotateZ(6deg)';
        }
        // Then continue with a 60 second interval
        setInterval(function() {
            for (var i = 0; i < containers.length; i++) {
            if (containers[i].angle === undefined) {
                containers[i].angle = 12;
            } else {
                containers[i].angle += 6;
            }
            containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
            containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
            }
        }, 60000);
    }

    let moveSecondHands = function() {
        var containers = document.querySelectorAll('.seconds-container');
        setInterval(function() {
            for (var i = 0; i < containers.length; i++) {
            if (containers[i].angle === undefined) {
                containers[i].angle = 6;
            } else {
                containers[i].angle += 6;
            }
            containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
            containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
            }
        }, 1000);
    }

    return {
        show: init
    }
})();