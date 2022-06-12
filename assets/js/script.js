// function which displays the Date/Day in the header of the application.
var today = moment();
$("#currentDay").text(today.format("dddd Do MMMM YYYY"));
console.log(today);

const dataSaved = $(".data-saved")
const timeStageEl = $(".time-stage");
const saveBtn = $(".saveBtn");
const saveDisplay = $("#data-saved")
var currentHour = today.format("kk")
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

console.log(currentHour)

timeStageEl.each(function() {
    console.log(timeStageEl.data("time"))
    if (currentHour > timeStageEl.data("time")) {
        timeStageEl.addClass("past");
    
    } else if(currentHour < timeStageEl.data("time")) {
        timeStageEl.addClass("future");
    
    } else if (currentHour == timeStageEl.data("time")) {
        timeStageEl.addClass("present");
    };
})

// for (var i = 0; i < hours.length; i++) {
//     if (currentHour === hours[i]) {
//       console.log('current');
//       document.getElementById('stage').classList.add('present');
      
//     }
//     if (currentHour > hours[i]) {
//       console.log('past');
//       document.getElementById('stage').classList.add('past');
      
//     }
//     if (currentHour < hours[i]) {
//       console.log('future');
//       document.getElementById('stage').classList.add('future');
      
//     }
//   }

var savedSchedules = JSON.parse(localStorage.getItem("scheduleData"))

saveBtn.on('click', function () {
    var saveMessage = "Appointment added to localStorage ✔"
    saveDisplay = text(saveMessage)
})

// function that auto refreshes the page every 30secs