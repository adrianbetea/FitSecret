const myhomeNavbar = document.querySelectorAll('.myhome-navbar-element')
const foodNavbar = document.querySelectorAll('.food-navbar-element')
const exerciseNavbar = document.querySelectorAll('.exercise-navbar-element')

const myhomeElm = document.getElementById("myhome");
const foodElm = document.getElementById("food");
const exerciseElm = document.getElementById("exercise");

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

function openMyHome() {
    closeFood();
    closeExercise();
    myhomeNavbar.forEach(elm => {
        elm.style.display = 'flex';
    });
    myhomeElm.style.backgroundColor = 'rgb(82, 186, 151)';
    myhomeElm.style.border = '2px solid white';
}

function openFood() {
    closeMyHome();
    closeExercise();
    foodNavbar.forEach(elm => {
        elm.style.display = 'flex';
    });
    foodElm.style.backgroundColor = 'rgb(82, 186, 151)';
    foodElm.style.border = '2px solid white';
    
}

function openExercise() {
    closeMyHome();
    closeFood();
    exerciseNavbar.forEach(elm => {
        elm.style.display = 'flex';
    });
    exerciseElm.style.backgroundColor = 'rgb(82, 186, 151)';
    exerciseElm.style.border = '2px solid white';
    
}
