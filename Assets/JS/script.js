//TODO: Create 9 - 5 Block Day Template Based on Mockup Using Bootstrap
//TODO: Make Fields Editable so that text describing appointment can be entered for each hour
//TODO: Include a "save" button on each row so that input for that row can be saved to local memory
//TODO: Link to (or download as applicable Moment.JS for use in date functions)
//TODO: Determine Which Date Functions are applicable to this exercise and how to use.
//TODO: Add Current Time and Date to Header
//TODO: Color hours already passed during a given day in a different color

var save9Btn = document.getElementById("save-9");
var input9 = document.getElementById("9-input");

var appointment9;

save9Btn.addEventListener("click", function () {
  appointment9 = input9.value;
  console.log(appointment9);
});
