//establish time in a variable
var date = moment().get("date");
var month = moment().get("month");
var year = moment().get("year");
var hour = moment().get("hour");
var minute = moment().get("minute");
var second = moment().get("second");
var millisecond = moment().get("millisecond");

var displayTime = moment().format("dddd, MMMM Do, YYYY");
var rowTime = $("div.hour");
var textArea = $(".description");

//Select the class currentDay and add text;

function plannerRowBackgrounds() {
  var text = $(this).text();
  var stringText = text.toString();
  var stringTextTrimmed = stringText.trim();
  var stringTextTrimmedSliced = stringTextTrimmed.substring(
    0,
    stringTextTrimmed.length - 2
  );
  var stringTextTrimmedSlicedNumber = parseInt(stringTextTrimmedSliced);

  if (
    stringTextTrimmedSlicedNumber >= 1 &&
    stringTextTrimmedSlicedNumber <= 5
  ) {
    stringTextTrimmedSlicedNumber = stringTextTrimmedSlicedNumber + 12;
  }

  if (stringTextTrimmedSlicedNumber < hour) {
    textArea.addClass("past");
  }

  if (stringTextTrimmedSlicedNumber > hour) {
    textArea.addClass("future");
  }

  if (stringTextTrimmedSlicedNumber === hour) {
    textArea.addClass("present");
  }
}

  $(".saveBtn").on("click", function () {
    var textAreaClass = $(this).siblings('textarea');
    localStorage.setItem("userInput", textAreaClass.val());  
  });


$("#currentDay").text(displayTime);
$(".hour").each(plannerRowBackgrounds);
