//called id current day and import current date from moment
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))
//declared variable equal to business hours in a day
var displayHour = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2PM", "3 PM", "4 PM", "5 PM"]
//created for loop starting at 9 to reflect hours in a business day
for (var i = 9; i < 18; i++) {
    //loop through display hour and create divs for a row for each hour, a column for the display hour, text area and save button
    $(".container").append(`
    <div class = "row time-block" id = "hour-${i}">
    <div class = "col-1 hour">${displayHour[i - 9]}</div>
    <textarea class = "col-10 description"/>
    <button class = "col-1 saveBtn"> Save </button>
    </div>
    `)
    //if statement for determining current hour from moment and then applying corresponding CSS styles to hours in past, present and future
    if (i == moment().format("H")) {
        $(`#hour-${i}`).addClass("present")
    } else if (i > moment().format("H")) {
        $(`#hour-${i}`).addClass("future")
    } else {$(`#hour-${i}`).addClass("past")
    }
    //display item saved in local storage from the textarea
    $(`hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
}

//add event listener to save text entered in textarea in local storage with key of row id and value of description class
$(".saveBtn").on("click", function () {
    var key = $(this).parent().attr("id")
    var value = $(this).siblings(".description").val()
    localStorage.setItem(key, value)
})
