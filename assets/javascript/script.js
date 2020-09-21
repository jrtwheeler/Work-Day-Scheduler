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
var textArea = $(".description");

console.log(rowTimeHours)
//Select the class currentDay and add text;
$("#currentDay").text(displayTime);

$('div.hour').each(function(){
    if ($(this).text().slice(-2) < hour){
        textArea.addClass("bg-danger");
    }
    if ($(this).text().slice(-2) > hour){
        textArea.addClass("future");
    }
    if ($(this).text().slice(-2) === hour){
        textArea.addClass("present");
    }
  })

//while (hour < )