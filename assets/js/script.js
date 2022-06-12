// function which displays the Date/Day in the header of the application.
var today = moment();
$("#currentDay").text(today.format("dddd Do MMMM YYYY"));
console.log(today);

const timeStageEl = $(".time-stage");
const timeHourEl = $(".time-hour");
var currentHour = Number(today.format("kk"));
const hours = [
    08,
    09,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
]

$(".time-hour").each(function(index, item) {
    if (currentHour > timeHourEl.data("time")) {
        timeStageEl.addClass("past");
    
    } else if(currentHour < timeHourEl.data("time")) {
        timeStageEl.addClass("future");
    
    } else if (currentHour == timeHourEl.data("time")) {
        timeStageEl.addClass("present");
    };
    
})

console.log(currentHour)




// function that auto refreshes the page every 30secs

// For Loop function that creates 
// for (var i=0; i < hours.length; i++) {
// }