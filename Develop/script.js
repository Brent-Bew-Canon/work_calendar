// Wraps all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  let block = $(".time-block")

  // event listener function for save button
  block.children(".btn").on("click", function () {
    const blockBtn = $(this);

    //gets the text input from textarea and id from parent element to store
    let item = blockBtn.siblings(".description").val()
    let hour = blockBtn.parent().attr("id")

    //saves the hour and item in local storage
    localStorage.setItem(hour, item)
  })

  const today = dayjs();
  const currentHour = dayjs().format("H");

  // function to loop over each hour and apply the correct coloring for past, present, and future. Also gets data from localstorage to display previous items that have been saved
  $(".time-block").each(function () {
    const timeBlock = $(this);

    // gets the id and parses it out to get the hour only
    const hourId = timeBlock.attr("id")
    const hour = timeBlock.attr("id").split("-").pop()

    // add appropiate class by comparing hour to current hour
    if (+hour < +currentHour) {
      timeBlock.addClass("past");
    } else if (+hour === +currentHour) {
      timeBlock.addClass("present");
    } else {
      timeBlock.addClass("future");
    }

    // check local storage and displays any item that has previously been saved
    if (localStorage.getItem(hourId === "")) {
    } else {
      timeBlock.children(".description").val(localStorage.getItem(hourId))
    }
  })

  // displays the current date in the header of the page.
  $("#currentDay").text(dayjs().format("dddd, MMMM D"))
});
