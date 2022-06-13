// function which displays the Date/Day in the header of the application.
var today = moment();
$("#currentDay").text(today.format("dddd Do MMMM YYYY"));

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

timeStageEl.each(function(index, item) {

    if (currentHour > item.dataset["time"]) {
     item.classList.add("past");
    
    } else if(currentHour < item.dataset["time"]) {
        item.classList.add("future");
    
    } else if (currentHour == item.dataset["time"]) {
        item.classList.add("present");
    };
})

var savedSchedules = JSON.parse(localStorage.getItem("scheduleData")) || [];

saveBtn.on("click", function(event) {
    savedSchedules = [];

    timeStageEl.each(function(index, item) {
        var scheduleData = $("#stage1").val();

        if (scheduleData != "") {
            savedSchedules.push(scheduleData);
        
        } else if(scheduleData == "") {
            savedSchedules.push("");
        };
        
    })

    

    localStorage.setItem("SavedSchedules", JSON.stringify(savedSchedules))
})

// saveBtn.on("click", function () {
//     var saveMessage = ("Appointment added to localStorage ✔")
//     saveDisplay.text(saveMessage);
//     saveDisplay.css("display", "flex");
//     var fade_out = function() {
//         $("#data-saved").fadeOut(500);
//         }
//         setTimeout(fade_out, 3000);
    
// })