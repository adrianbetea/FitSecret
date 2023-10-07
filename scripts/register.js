let lose = 0;
let maintain = 0;
let gain = 0;

function discardLose() {
    document.getElementById('lose-weight').style.color = "black";
    document.getElementById('lose-weight').style.borderColor = "black";
    lose = 0; 
}

function discardMaintain() {
    document.getElementById('maintain-weight').style.color = "black";
    document.getElementById('maintain-weight').style.borderColor = "black";
    maintain = 0;  
}

function discardGain() {
    document.getElementById('gain-weight').style.color = "black";
    document.getElementById('gain-weight').style.borderColor = "black";
    gain = 0;  
}

function saveLoseOnClick() {
    document.getElementById('lose-weight').style.color = "aquamarine";
    document.getElementById('lose-weight').style.borderColor = "aquamarine";
    discardMaintain();
    discardGain();
    lose = 1;
}

function saveMaintainOnClick() {
    document.getElementById('maintain-weight').style.color = "aquamarine";
    document.getElementById('maintain-weight').style.borderColor = "aquamarine";
    discardLose();
    discardGain();
    maintain = 1;
}

function saveGainOnClick() {
    document.getElementById('gain-weight').style.color = "aquamarine";
    document.getElementById('gain-weight').style.borderColor = "aquamarine";
    discardLose();
    discardMaintain();
    gain = 1;
}


let not_active = 0;
let lightly_active = 0;
let active = 0;
let very_active = 0;

document.getElementById("not-active")
document.getElementById("lightly-active")
document.getElementById("active")
document.getElementById("very-active")

function discardNotActive() {
    document.getElementById("not-active").style.color = "black";
    document.getElementById("not-active").style.borderColor = "black";
    not_active = 0;
}

function discardLightlyActive() {
    document.getElementById("lightly-active").style.color = "black";
    document.getElementById("lightly-active").style.borderColor = "black";
    lightly_active = 0;
}

function discardActive() {
    document.getElementById("active").style.color = "black";
    document.getElementById("active").style.borderColor = "black";
    active = 0;
}

function discardVeryActive() {
    document.getElementById("very-active").style.color = "black";
    document.getElementById("very-active").style.borderColor = "black";
    very_active = 0;
}

function saveNotActive() {
    document.getElementById("not-active").style.color = "aquamarine";
    document.getElementById("not-active").style.borderColor = "aquamarine";
    discardLightlyActive();
    discardActive();
    discardVeryActive()
    not_active = 1;
}

function saveLightlyActive() {
    document.getElementById("lightly-active").style.color = "aquamarine";
    document.getElementById("lightly-active").style.borderColor = "aquamarine";
    discardNotActive();
    discardActive();
    discardVeryActive()
    lightly_active = 1;
}

function saveActive() {
    document.getElementById("active").style.color = "aquamarine";
    document.getElementById("active").style.borderColor = "aquamarine";
    discardNotActive();
    discardLightlyActive();
    discardVeryActive()
    active = 1;
}


function saveVeryActive() {
    document.getElementById("very-active").style.color = "aquamarine";
    document.getElementById("very-active").style.borderColor = "aquamarine";
    discardNotActive();
    discardLightlyActive();
    discardActive()
    very_active = 1;
}

let male = 0;
let female = 0;

function maleUnchecked() {
    male = 0;
    document.getElementById("male-radiobutton").checked = false;
}

function femaleUnchecked() {
    female = 0;
    document.getElementById("female-radiobutton").checked = false;
}

function maleChecked() {
    femaleUnchecked()
    document.getElementById("male-radiobutton").checked = true;
    male = 1;
}

function femaleChecked() {
    maleUnchecked()
    document.getElementById("female-radiobutton").checked = true;
    female = 1;
}