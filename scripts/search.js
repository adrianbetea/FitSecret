const breakfast = document.getElementById('breakfast-sel');
const lunch = document.getElementById('lunch-sel');
const dinner = document.getElementById('dinner-sel');
const snacks = document.getElementById('snacks-sel');

function closeBreakfast() {
    breakfast.style.backgroundColor="white";
}

function closeLunch() {
    lunch.style.backgroundColor="white";
}
function closeDinner() {
    dinner.style.backgroundColor="white";
}
function closeSnacks() {
    snacks.style.backgroundColor="white";
}

function selectBreakfast() {
    closeLunch();
    closeDinner();
    closeSnacks();
    breakfast.style.backgroundColor="aquamarine";
}


function selectLunch() {
    closeBreakfast();
    closeDinner();
    closeSnacks();
    lunch.style.backgroundColor="aquamarine";
}


function selectDinner() {
    closeLunch();
    closeBreakfast();
    closeSnacks();
    dinner.style.backgroundColor="aquamarine";
}


function selectSnacks() {
    closeLunch();
    closeDinner();
    closeBreakfast();
    snacks.style.backgroundColor="aquamarine";
}