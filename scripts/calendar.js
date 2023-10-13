var date = new Date();
var dd = date.getDate();
var mm = date.getMonth() + 1;
var yyyy = date.getFullYear();
var newDate = dd + "." + mm + "." + yyyy;
var p = document.getElementById("current-date");
p.innerHTML = newDate;