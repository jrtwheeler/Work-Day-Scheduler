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
    $(this).siblings("textarea").addClass("past");
  }

  if (stringTextTrimmedSlicedNumber > hour) {
    $(this).siblings("textarea").addClass("future");
  }

  if (stringTextTrimmedSlicedNumber === hour) {
    $(this).siblings("textarea").addClass("present");
  }
}

$(".saveBtn").on("click", function () {
  var textAreaClass = $(this).siblings("textarea");
  var parentDiv = $(this).parent().attr("id");
  localStorage.setItem(parentDiv.toString(), textAreaClass.val());
});

function renderPage() {
  $(".saveBtn").each(function () {
    var parentDiv = $(this).parent().attr("id");
    var textAreaClass = $(this).siblings("textarea");
    localStorage.getItem(parentDiv);
    textAreaClass.val(localStorage.getItem(parentDiv));
  });
}

$("#currentDay").text(displayTime);
$(".hour").each(plannerRowBackgrounds);
renderPage();
