// onload jquery below function will be called
$(function () {

  // Display the current date in the header of the page.
  // saveBtn onclick listener
  // Todays's date
  var todayDate = dayjs().format('dddd, MMMM D');
  $("#currentDay").html(todayDate);

  //Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 

  $(".saveBtn").on("click", function () {
    // Values of description and time
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save the time and description in localstorage
    localStorage.setItem(time, description);
  })

  function scheduleTracker() {
    //get current hour
    var currentTime = dayjs().hour();
    console.log("currentTime:" + currentTime);

    // iterate over the each time from 9am to 5pm div elements with class attribute "time-block"
    $(".time-block").each(function () {

      var timeBlock = parseInt($(this).attr("id").split("hour-")[1]);
      console.log("timeBlock: " + timeBlock);

      // To apply the past, present, or future class to each time
      // block by comparing the id to the current hour. 

      // past time check and apply past style
      if (timeBlock < currentTime) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
      }
      //present time check and apply present style
      else if (timeBlock === currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      }
      // apply future style for all remaining hours
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");

      }
    })
  }

  // get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  //initialize this call on load.
  scheduleTracker();
});



