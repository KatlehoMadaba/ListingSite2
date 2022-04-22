//Function for button on registration form(getting values and redirecting to login form)
function registerFunc() {

    let fullName = document.forms["myForm"]["fullName"].value;
    let email = document.forms["myForm"]["email"].value;
    let userName = document.forms["myForm"]["userName"].value;
    let confirmUserName = document.forms["myForm"]["confirmUserName"].value;
    let password = document.forms["myForm"]["Pass"].value;
    let confirmPassword = document.forms["myForm"]["Passwrd"].value;

    if ( confirmUserName != userName ) {
        alert("Usernames do not match, please retry.");
    }
    else if (confirmPassword != password) {
        alert("Password do not match, please retry.")
    }
    else if (fullName == '' ||  email=='' || userName ==''|| confirmUserName==''|| password==''|| confirmPassword=='') {
        alert("Please fill in empty fields");
    }

    else {
        console.log(fullName,email,userName,confirmUserName,password,confirmPassword);
        window.location.href = "/Login Page/login.html";
    }
}
 


//Function for button on registration form(getting values and redirecting to login form)
function login(){
    var user= document.forms["myForm"]["userName"].value;
    var pw= document.forms["myForm"]["Pass"].value;
    if(user=="" && pw==""){
        alert("Please enter a Username and Password");
    }
    else{
        window.location.href="/Home Page/homepage.html"
    }
}

//Function to redirect to login page
function toLoginPage() {
    window.location.href = "/Login Page/login.html";
}

//Function to redirect to Registration page
function toRegistrationPage() {
    window.location.href = "/Registration Page/registrationpage.html";
}



