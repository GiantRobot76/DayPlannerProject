//Done: Create 9 - 5 Block Day Template Based on Mockup Using Bootstrap
//Done: Make Fields Editable so that text describing appointment can be entered for each hour
//TODO: Include a "save" button on each row so that input for that row can be saved to local memory
//TODO: Link to (or download as applicable Moment.JS for use in date functions)
//TODO: Determine Which Date Functions are applicable to this exercise and how to use.
//TODO: Add Current Time and Date to Header
//TODO: Color hours already passed during a given day in a different color

//variable declarations
var save9Btn = document.getElementById("save-9");
var input9 = document.getElementById("9-input");
var save10Btn = document.getElementById("save-10");
var input10 = document.getElementById("10-input");
var save11Btn = document.getElementById("save-11");
var input11 = document.getElementById("11-input");
var save12Btn = document.getElementById("save-12");
var input12 = document.getElementById("12-input");
var save1Btn = document.getElementById("save-1");
var input1 = document.getElementById("1-input");
var save2Btn = document.getElementById("save-2");
var input2 = document.getElementById("2-input");
var save3Btn = document.getElementById("save-3");
var input3 = document.getElementById("3-input");
var save4Btn = document.getElementById("save-4");
var input4 = document.getElementById("4-input");
var save5Btn = document.getElementById("save-5");
var input5 = document.getElementById("5-input");

var apptTxt;
var apptHr;

//array used to preserve appointments in local storage on refresh

var appts = JSON.parse(localStorage.getItem("appointments")) || [];

for (var i = 0; i < appts.length; i++) {
  console.log(appts[i].hour);

  var hrToRender = appts[i].hour;
  var apptToRender = appts[i].appointment;
  var lookupStrng = "data-hour=" + hrToRender;
  console.log(lookupStrng);
  //   $('.input-group').find()
}

save9Btn.addEventListener("click", function () {
  apptTxt = input9.value;
  apptHr = 9;
  appts.push({ hour: apptHr, appointment: apptTxt });
  localStorage.setItem("appointments", JSON.stringify(appts));
});
