$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))
var displayHour = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2PM", "3 PM", "4 PM", "5 PM"]
for (var i = 9; i < 18; i++) {
    $(".container").append(`
    <div class = "row time-block" id = "hour-${i}">
    <div class = "col-1 hour">${displayHour[i - 9]}</div>
    <textarea class = "col-10 description"/>
    <button class = "col-1 saveBtn"> Save </button>
    </div>
    `)

    if (i == moment().format("H")) {
        $(`#hour-${i}`).addClass("present")
    } else if (i > moment().format("H")) {
        $(`#hour-${i}`).addClass("future")
    } else {$(`#hour-${i}`).addClass("past")
    }
    $(`hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
}

$(".saveBtn").on("click", function () {
    var key = $(this).parent().attr("id")
    var value = $(this).siblings(".description").val()
    localStorage.setItem(key, value)
})
