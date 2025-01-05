
function signup() {
    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const namePattern = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const passwordPattern=/^[A-Za-z@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

    if (!name) {
        alert("please enter your full name");
        return;
    }
    if (!namePattern.test(name)) {
        alert("please enter a valid name");
        return;
    }
    if (!email) {
        alert("please enter a email");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("please enter valid email ");
        return;
    }
    if(!password){
        alert("please enter password");
        return;
    }
    if(!password.length<8){
        alert("please create valid password");
        return;
    }
    
}

