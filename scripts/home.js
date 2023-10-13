const myhomeNavbar = document.querySelectorAll('.myhome-navbar-element');
const foodNavbar = document.querySelectorAll('.food-navbar-element');
const exerciseNavbar = document.querySelectorAll('.exercise-navbar-element');
const aboutNavbar = document.querySelectorAll('.about-navbar-element');

const myhomeElm = document.getElementById("myhome");
const foodElm = document.getElementById("food");
const exerciseElm = document.getElementById("exercise");
const aboutElm = document.getElementById("about");

function closeMyHome() {
    myhomeNavbar.forEach(elm => {
        elm.style.display = 'none';
    });
    myhomeElm.style.backgroundColor = 'aquamarine';
    myhomeElm.style.border = 'none';
}

function closeFood() {
    foodNavbar.forEach(elm => {
        elm.style.display = 'none';
    });
    foodElm.style.backgroundColor = 'aquamarine';
    foodElm.style.border = 'none';
}

function closeExercise() {
    exerciseNavbar.forEach(elm => {
        elm.style.display = 'none';
    });
    exerciseElm.style.backgroundColor = 'aquamarine';
    exerciseElm.style.border = 'none';
}

function closeAbout() {
    aboutNavbar.forEach(elm => {
        elm.style.display = 'none';
    });
    aboutElm.style.backgroundColor = 'aquamarine';
    aboutElm.style.border = 'none';
}

function openMyHome() {
    closeFood();
    closeExercise();
    closeAbout();
    myhomeNavbar.forEach(elm => {
        elm.style.display = 'flex';
    });
    myhomeElm.style.backgroundColor = 'rgb(82, 186, 151)';
    myhomeElm.style.border = '2px solid white';

    window.location.href = ("./home.html");
}

function openFood() {
    closeMyHome();
    closeExercise();
    closeAbout();
    foodNavbar.forEach(elm => {
        elm.style.display = 'flex';
    });
    foodElm.style.backgroundColor = 'rgb(82, 186, 151)';
    foodElm.style.border = '2px solid white';

    window.location.href = ("./food-journal.html");
    
}

function openExercise() {
    closeMyHome();
    closeFood();
    closeAbout();
    exerciseNavbar.forEach(elm => {
        elm.style.display = 'flex';
    });
    exerciseElm.style.backgroundColor = 'rgb(82, 186, 151)';
    exerciseElm.style.border = '2px solid white';
    
}

function openAbout() {
    closeMyHome();
    closeFood();
    closeExercise();
    aboutNavbar.forEach(elm => {
        elm.style.display = 'flex';
    });
    aboutElm.style.backgroundColor = 'rgb(82, 186, 151)';
    aboutElm.style.border = '2px solid white';

}

var home_date = document.getElementById("current-date");
var date = new Date();
var dd = date.getDate();
var mm = date.getMonth() + 1;
var yyyy = date.getFullYear();
var newDate = dd + "." + mm + "." + yyyy;
home_date.innerHTML = newDate;