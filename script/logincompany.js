function validation(){

    names = document.getElementById("name")
    password = document.getElementById("password")

    errorName = document.getElementById("error-name")
    errorPassword = document.getElementById("error-password")

    if(names.value != "") errorName.innerHTML = ""
    if(password.value != "") errorPassword.innerHTML = ""

    if(names.value == ""){
        errorName.innerHTML = "Company name is required."
        return false
    } else if(names.value.length < 5){
        errorName.innerHTML = "Company name length must be at least 5 characters."
        return false
    }

    if(password.value == ""){
        errorPassword.innerHTML = "Password is required."
        return false
    } else if(password.value.length < 8){
        errorPassword.innerHTML = "Password length must be at least 8 characters."
        return false
    }

    alert("Login Success!")
    window.location.replace("homecompany.html")
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