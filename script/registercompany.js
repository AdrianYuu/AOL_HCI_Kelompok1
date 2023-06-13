function validation(){

    names = document.getElementById("name")
    address = document.getElementById("address")
    email = document.getElementById("email")
    password = document.getElementById("password")

    errorName = document.getElementById("error-name")
    errorAddress = document.getElementById("error-address")
    errorEmail = document.getElementById("error-email")
    errorPassword = document.getElementById("error-password")

    if(names.value != "") errorName.innerHTML = ""
    if(address.value != "") errorAddress.innerHTML = ""
    if(email.value != "") errorEmail.innerHTML = ""
    if(password.value != "") errorPassword.innerHTML = ""

    if(names.value == ""){
        errorName.innerHTML = "Company name is required."
        return false
    } else if(names.value.length < 5){
        errorName.innerHTML = "Company name  length must be at least 5 characters."
        return false
    }

    if(address.value == ""){
        errorAddress.innerHTML = "Address is required."
        return false
    } else if(address.value.length < 4){
        errorAddress.innerHTML = "Address length must be at least 4 characters."
        return false
    }

    if(email.value == ""){
        errorEmail.innerHTML = "Email is required."
    } else if(!isValid(email.value)){
        return false
    }

    if(password.value == ""){
        errorPassword.innerHTML = "Password is required."
        return false
    } else if(password.value.length < 8){
        errorPassword.innerHTML = "Password length must be at least 8 characters."
        return false
    }

    alert("Register Success!")
    window.location.replace("homecompany.html")
}

function isValid(email){
    let countA = 0
    let countDot = 0

    for(let i = 0; i < email.length; i++){
        if(email[i] == '@'){
            countA++
            posA = i
        } else if(email[i] == '.'){
            countDot++;
        }
    }

    if(countA != 1){
        errorEmail.innerHTML = "Email must contain one [@]"
        return false
    } 

    if(email.split("@")[0].length == 0){
        errorEmail.innerHTML = "There must be a text before [@]"
        return false
    } else if(email.split("@")[1].length == 0){
        errorEmail.innerHTML = "There must be a text after [@]"
        return false
    } else if(email.split("@")[1][0] == '.'){
        errorEmail.innerHTML = "[.] can't be directly behind [@]"
        return false    
    } 
    
    if(countDot != 1){
        errorEmail.innerHTML = "Email must contain one [.]"
        return false
    }
    
    if(email.split(".")[1].length == 0){
        errorEmail.innerHTML = "There must be a text behind [.]"
        return false
    }

    return true
}

let flag = 0
function toggle(){
    if(flag == 0){
        document.getElementById("eye").src = "assets/eye-open.png"
        document.getElementById("password").type = "text"
        flag = 1
    } else{
        document.getElementById("eye").src = "assets/eye-close.png"
        document.getElementById("password").type = "password"
        flag = 0
    }
}