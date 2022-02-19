// Declaring variables
var containerEl = $(".container")
var textAreaEl = $("#text-box");
var timeBlockEl = $(".time-block");

// Set today's date in the header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));


$(document).ready(function(){
// On a click event for the save icon buttons:
    containerEl.on("click", ".saveBtn", function (event) {
        // Capture the value from the text area in an object.
        var newItem = $(event.target).prev("#text-box").val();
        // Capture the time in which the new object was placed.
        var itemTime = $(event.target).parent().attr("id");
        // Set these into local storage
        localStorage.setItem(itemTime, newItem);
    });

    for (i = 0; i< timeBlockEl.length; i++){
        // console.log(timeBlockEl[i]);
        var timeId = timeBlockEl[i].id;
        console.log(timeId);
        var itemText = localStorage.getItem(timeId);
        console.log();
         if (itemText) {
             textAreaEl[i].value = itemText;
        }
    }

    // Use color coding to display past, present, and future
    function timeTracker() {
        // Get the current hour from moment API
        var hour =  moment().hours();
        

        // For each time-block:
        $(".time-block").each(function(){

            var currentHour = parseInt ($(this).attr("id"));
            
            
                // To check the time and add the classes for background indicators
            if (currentHour < hour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }else if (currentHour === hour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    timeTracker();

})











