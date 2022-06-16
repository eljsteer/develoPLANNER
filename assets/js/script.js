// function which displays the Date/Day in the header of the application.
var today = moment();
$("#currentDay").text(today.format("dddd Do MMMM YYYY"));

const timeStageEl = $(".time-stage");
const saveBtn = $(".saveBtn");
const saveDisplay = $("#data-saved");
let currentHour = today.format("kk");

// Function which loops through each data-attribute in the HTML on each element to check whether the currentHour time is in past, present or future and applies a class with css attributes.
timeStageEl.each(function(index, item) {
    if (currentHour > item.dataset["time"]) {
     item.classList.add("past");
    
    } else if(currentHour < item.dataset["time"]) {
        item.classList.add("future");
    
    } else if (currentHour == item.dataset["time"]) {
        item.classList.add("present");
    };
})
// eventListener function that will save the schedules entered for the corresponding hour into localStorage to be used in later function 
saveBtn.on("click", function(event) {
   
    let scheduleText = $(this).siblings(".time-stage").val();

    let apptHour = $(this).siblings(".time-stage").attr("data-time");

    localStorage.setItem(apptHour, (scheduleText))
})
// looping function which loops through data-attributes in HTML on each Textarea element to retrieve data from local storage.
timeStageEl.each(function(index, item) {
    var scheduleData = $(this).attr("data-time");
    var retrieveSchedule = localStorage.getItem(scheduleData);
    $(this).val(retrieveSchedule)
 })
// Function which controls the text popup on the click of the Savebutton to notify client schedule is saved.
saveBtn.on("click", function () {
    var saveMessage = ("Appointment added to localStorage ✔")
    saveDisplay.text(saveMessage);
    saveDisplay.css("display", "flex");
    var fade_out = function() {
        $("#data-saved").fadeOut(500);
        }
        setTimeout(fade_out, 2000);
})