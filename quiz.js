function login(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(email=== '') {
        alert("email is required");
        return;
    }
    if(password==='') {
        alert("password is required");
        return;
    }
    alert("login successful!");
    }
    