function validation(){

    username = document.getElementById("username")
    password = document.getElementById("password")

    errorName = document.getElementById("error-name")
    errorPassword = document.getElementById("error-password")

    if(username.value != "") errorName.innerHTML = ""
    if(password.value != "") errorPassword.innerHTML = ""

    if(username.value == ""){
        errorName.innerHTML = "Username is required."
        return false
    } else if(username.value.length < 5){
        errorName.innerHTML = "Username length must be at least 5 characters."
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
    window.location.replace("homeuser.html")
}