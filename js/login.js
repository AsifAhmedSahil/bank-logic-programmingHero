// step 1 : add click evenet handleer with submit buttton
document.getElementById("btn-submit").addEventListener("click",function(){
    // step 2: get email inside the iemail field
    const emailField = document.getElementById("user-email");
    // get value from inside always use "value"
    const email = emailField.value;
    
    // getpassword
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;

    // lets verify user

    if(email === "asifahmedsahil.007@gmail.com" && password === "sahilsanji007"){
        window.location.href = "bank.html";
    }
    else{
        alert("Tui password bhule gesos . tui amr pola na  jah tor baap er kache")
    }

})