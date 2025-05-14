function hasUpperCase(str) {
    return str !== str.toLowerCase();
}

function validateForm(){
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let password = document.forms["myForm"]["password"].value;
    let address = document.forms["myForm"]["address"].value;
    let addons = document.forms["myForm"]["addons"].value;

    let nameError = document.getElementById("name-valid");
    let emailError = document.getElementById("email-valid");
    let passwordError = document.getElementById("password-valid");
    let addressError = document.getElementById("address-valid");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    addressError.innerHTML = "";

    let isValid = true;

    if(name == ""){
        nameError.innerHTML = "- Name Cannot be Empty";
        isValid = false;
    }   

    if(email == ""){
        emailError.innerHTML = "- Email Cannot be Empty";
        isValid = false;
    }
    if(!email.includes("@") && !email.includes(".com")){
        emailError.innerHTML = "- Email is not Valid";
        isValid = false;
    }

    if(password == ""){
        passwordError.innerHTML = "- Password cannot be Empty";
        isValid = false;
    }
    if(password.length < 6 && password.length > 0){
        passwordError.innerHTML = "- Password must be longer than 6 Characters";
        isValid = false;
    }
    if(!hasUpperCase(password)){
        if(passwordError == ""){
            passwordError.innerHTML = ("- Password must have an Uppercase");
            isValid = false;
        }else{
            passwordError.innerHTML.concat("<br>- Password must have an Uppercase");
            isValid = false;
        }
    }

    if(address == ""){
        addressError.innerHTML = "- Address Cannot be Empty";
        isValid = false;
    }     
    
    return isValid;

}


function openPopup() {
  let popup = document.getElementById("darken");
  popup.style.display = "";
}
function closePopup() {
  let popup = document.getElementById("darken");
  popup.style.display = "none";
  window.location = "../html/menu.html";
}
