// function which displays the Date/Day in the header of the application.
var today = moment();
$("#currentDay").text(today.format("dddd Do MMMM YYYY"));

const timeStageEl = $(".time-stage");
const saveBtn = $(".saveBtn");
const saveDisplay = $("#data-saved");
let currentHour = today.format("kk");
let savedSchedules = [];

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

saveBtn.on("click", function(event) {
   
    let text = $(this).siblings(".time-stage").val();

    let apptHour = $(this).siblings(".time-stage").attr("data-time");

    localStorage.setItem(apptHour, (text))
})

timeStageEl.each(function(index, item) {
    var retrieve = $(this).attr("data-time");
    var retrieveItem = localStorage.getItem(retrieve);
    $(this).val(retrieveItem)
 })

saveBtn.on("click", function () {
    var saveMessage = ("Appointment added to localStorage ✔")
    saveDisplay.text(saveMessage);
    saveDisplay.css("display", "flex");
    var fade_out = function() {
        $("#data-saved").fadeOut(500);
        }
        setTimeout(fade_out, 2000);
})