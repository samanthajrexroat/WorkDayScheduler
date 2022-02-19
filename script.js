// Declaring variables
var containerEl = $(".container")


// Set today's date in the header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// Use color coding to display past, present, and future
function timeTracker() {
    // Get the current hour from moment API
    var hour =  moment().hours();
    

    // For each time-block:
    $(".time-block").each(function(){

        var currentHour = parseInt ($(this).attr("id"));
        
        console.log(currentHour);
        
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

timeTracker()

// On a click event for the save icon buttons:
containerEl.on("click", ".saveBtn", function (event) {
    // Capture the value from the text area in an object.
    var newItem = $(event.target).prev("#text-box").val();
    console.log(newItem);

})