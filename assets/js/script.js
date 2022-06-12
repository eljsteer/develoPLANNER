// function which displays the Date/Day in the header of the application.
var today = moment();
$("#currentDay").text(today.format("dddd Do MMMM YYYY"));
console.log(today);

const dataSaved = $(".data-saved")
const timeStageEl = $(".time-stage");
const timeHourEl = $(".time-hour");
var currentHour = Number(today.format("kk"));
var savedSchedules = [];

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

// for (var i = 0; i < hours.length; i++) {
//     if (currentHour === hours[i]) {
//         console.log(i);
//         timeHourEl(i).classList.add("present");
//     }
//     if (currentHour > hours[i]) {
//         console.log(i);
//         timeHourEl(i).classList.add("past");
//     }
//     if (currentHour < hours[i]) {
//         console.log(i);
//         timeHourEl(i).classList.add("future");
//     }
// }

timeHourEl.each(function(index, item) {
    if (currentHour > timeHourEl.data("time")) {
        timeStageEl.addClass("past");
    
    } else if(currentHour < timeHourEl.data("time")) {
        timeStageEl.addClass("future");
    
    } else if (currentHour == timeHourEl.data("time")) {
        timeStageEl.addClass("present");
    };
    
})

console.log(currentHour)

var saveMessage = "Appointment added to localStorage ✔"

var savedSchedules = JSON.parse(localStorage.getItem("scheduleData"))

$(".saveBtn").on('click', function (event) {
    $("#data-saved") = saveMessage.text
})

// function that auto refreshes the page every 30secs