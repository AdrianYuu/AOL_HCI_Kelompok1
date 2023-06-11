function validation(){
    username = document.getElementById("username")
    age = document.getElementById("age")
    email = document.getElementById("email")
    password = document.getElementById("password")

    errorName = document.getElementById("error-name")
    errorAge = document.getElementById("error-age")
    errorEmail = document.getElementById("error-email")
    errorPassword = document.getElementById("error-password")

    if(username.value != "") errorName.innerHTML = ""
    if(age.value != "") errorAge.innerHTML = ""
    if(email.value != "") errorEmail.innerHTML = ""
    if(password.value != "") errorPassword.innerHTML = ""

    if(username.value == ""){
        errorName.innerHTML = "Username is required."
        return false
    } else if(username.value.length < 5){
        errorName.innerHTML = "Username length must be at least 5 characters."
        return false
    }

    if(age.value == ""){
        errorAge.innerHTML = "Age is required."
        return false
    } else if(isNaN(age.value)){
        errorAge.innerHTML = "Age must be numeric."
        return false
    } else if(age.value < 18){
        errorAge.innerHTML = "You must be at least 18 years old."
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
    window.location.replace("homeuser.html")
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