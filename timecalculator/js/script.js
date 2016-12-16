var total_type_value = 0;
var lunch_type_value = 0;

$(".form").submit(function(e) {
    e.preventDefault();
});

function total_type_change(a){
    total_type_value = a;
    if(a){
        $('#total_hours').removeClass('display').addClass('dont_display');
        $('#total_points').removeClass('dont_display').addClass('display');
    }
    else{
        $('#total_points').removeClass('display').addClass('dont_display');
        $('#total_hours').removeClass('dont_display').addClass('display');
    }
}

function lunch_type_change(a){
    lunch_type_value = a;
    if(a){
        $('#lunch_after_hours').removeClass('display').addClass('dont_display');
        $('#lunch_mins').removeClass('dont_display').addClass('display');
    }
    else{
        $('#lunch_mins').removeClass('display').addClass('dont_display');
        $('#lunch_after_hours').removeClass('dont_display').addClass('display');
    }
}

function calculate_end(){
    var start_time = $('#start_time')["0"].value;
    var lunch_time = $('#lunch_time')["0"].value;
    var total_time = (total_type_value==0)?($('#total_time_hours')["0"].value):(conv_points_hours($('#total_time_points')["0"].value));
    var lunch_after_time = (lunch_type_value==0)?($('#lunch_break_hours')["0"].value):(add_hours((lunch_time), (conv_min_hours($('#lunch_break_mins')["0"].value)), '+'));
    var interm_before = add_hours(lunch_time, start_time, '-');
    var end_time = add_hours(lunch_after_time, add_hours(total_time, interm_before, '-'), '+');
    $('#end_time')["0"].value = end_time;
}

function conv_points_hours(points){
    points = parseFloat(points);
    var hrs = (Math.floor(points)<10)?("0"+Math.floor(points)):(Math.floor(points));
    var mins = (Math.floor((points-Math.floor(points))*60)<10)?("0"+Math.floor((points-Math.floor(points))*60)):(Math.floor((points-Math.floor(points))*60));
    return hrs+":"+mins
}

function conv_min_hours(min){
    return ((Math.floor(min/60))+":"+(((min%60)>9)?(min%60):("0"+(min%60))));
}

function add_hours(a,b,sign){
    var a_h = a.split(':')[0];
    var a_m = a.split(':')[1];
    var b_h = b.split(':')[0];
    var b_m = b.split(':')[1];
    if(sign == '+'){
        var h = conv_min_hours(parseInt(a_m)+parseInt(b_m));
        return (parseInt(a_h)+parseInt(b_h)+parseInt(h.split(':')[0]))+":"+(h.split(':')[1]);
    }
    else{
        var x = new Date(), y = new Date();
        x.setHours(a_h);
        y.setHours(b_h);
        x.setMinutes(a_m);
        y.setMinutes(b_m);
        return conv_min_hours((x-y)/60000);
    }
}
