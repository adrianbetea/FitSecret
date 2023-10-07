
function closeLoginForm() {
    document.getElementById('login-form').style.display = 'none'; 
    document.getElementById('username_input_login').value = '';
    document.getElementById('password_input_login').value = ''; 
}

function openLoginForm() {
    closeSignupForm()
    document.getElementById('login-form').style.display = 'block';
}

function closeSignupForm() {
    document.getElementById('signup-form').style.display = 'none';   
    document.getElementById('username_input_signup').value = '';
    document.getElementById('password_input_signup').value = '';
}

function openSignupForm() {
    closeLoginForm();
    document.getElementById('signup-form').style.display = 'block';
}

function openSignupFormScrollTop() {
    closeLoginForm();
    $("html, body").animate({ scrollTop: "0" }, 400);
    document.getElementById('signup-form').style.display = 'block';   
}

function Login() {
    // saves the username and the password input form the LOGIN formular
    let username=document.getElementById('username_input_login').value;
    let password=document.getElementById('password_input_login').value;
    alert(username + " " + password);
}

function Signup() {
    // saves the username and the password input from the SIGNUP formular
    let username=document.getElementById('username_input_signup').value;
    let password=document.getElementById('password_input_signup').value;
    alert(username + " " + password);
}
