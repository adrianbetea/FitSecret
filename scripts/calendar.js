var food_date = document.getElementById("date-div");
var date = new Date();
var dd = date.getDate();
var mm = date.getMonth() + 1;
var yyyy = date.getFullYear();
var newDate = dd + "." + mm + "." + yyyy;
food_date.innerHTML = newDate;

