//establish time in a variable
var date = moment().get('date');
var month = moment().get('month');  
var year = moment().get('year');
var hour = moment().get('hour');
var minute = moment().get('minute');
var second = moment().get('second');
var millisecond = moment().get('millisecond');

var displayTime = moment().format("dddd, MMMM Do, YYYY");
var rowTime = $("div.hour");
var rowTimeHours = $("div.hour").text;
console.log(rowTimeHours)
//Select the class currentDay and add text;
$("#currentDay").text(displayTime);

$('div.hour').each(function(){
    if ($(this).text().slice(-2) < hour){
        console.log(hour)
    }
  })

//while (hour < )