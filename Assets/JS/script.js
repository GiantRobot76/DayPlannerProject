//variable declarations
$(document).ready(function () {
  var input9 = document.getElementById("input9");
  var input10 = document.getElementById("input10");
  var input11 = document.getElementById("input11");
  var input12 = document.getElementById("input12");
  var input1 = document.getElementById("input1");
  var input2 = document.getElementById("input2");
  var input3 = document.getElementById("input3");
  var input4 = document.getElementById("input4");
  var input5 = document.getElementById("input5");

  var apptTxt;
  var apptHr;

  //array used to preserve appointments in local storage on refresh

  //Set Date in Header

  var dateText = $("#currentDay");
  dateText.text(moment().format("dddd, MMMM Do YYYY"));

  function getTime() {
    var now = moment();
    var hour = now.format("k");
    return hour;
  }

  //Set styling classes based on current hour

  var currentHr = parseInt(getTime());
  $(".form-control").each(function () {
    //travers DOM to get applicable hour ID. all elements of styleHr are in form of "hour - xx". Split by "-" to get the xx and cast as integer to get comparable num
    var styleHr = parseInt(
      $(this).parent().parent().parent().attr("id").split("-")[1]
    );

    //determine correct styling and apply
    if (styleHr === currentHr) {
      $(this).addClass("present");
    } else if (styleHr < currentHr) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future");
    }
  });

  //Event Listeners

  //One Event Listener for All Save Buttons
  $(".btn-primary").on("click", function () {
    //traverse dom to get to associated text input and assign to variable
    apptTxt = $(this).parent().siblings().eq(1).children().children().val();

    //traverse dom to get associated id to identify hour
    apptHr = $(this).parent().parent().attr("id");

    //add key:value to local storage
    localStorage.setItem(apptHr, apptTxt);
    console.log(apptHr);
    console.log(apptTxt);
  });

  //Display Items in Local Memory on Planner
  $("#input9").val(localStorage.getItem("hour-9"));
  $("#input10").val(localStorage.getItem("hour-10"));
  $("#input11").val(localStorage.getItem("hour-11"));
  $("#input12").val(localStorage.getItem("hour-12"));
  $("#input1").val(localStorage.getItem("hour-13"));
  $("#input2").val(localStorage.getItem("hour-14"));
  $("#input3").val(localStorage.getItem("hour-15"));
  $("#input4").val(localStorage.getItem("hour-16"));
  $("#input5").val(localStorage.getItem("hour-17"));
});
