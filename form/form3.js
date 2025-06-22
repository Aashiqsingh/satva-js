const submitHandler = (event)=>{
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let mobile = document.getElementById("mobile"); 

    let nameErr = document.getElementById("nameErr");
    let emailErr = document.getElementById("emailErr");
    let mobileErr = document.getElementById("mobileErr");

    var namePattern = /^[A-Z]{1}[A-Za-z]+$/

    if(name.value.match(namePattern)){
        // alert("Name is valid");
        nameErr.innerHTML = name.value;
        nameErr.style.color = "green";
    }
    else{
        // alert("Name is invalid");
        nameErr.innerHTML = "*Name must be in Uppercase";
        nameErr.style.color = "red";
    }

    var mobilePattern = /^[6-9]{1}[0-9]{9}$/
    if(!mobile.value.match(mobilePattern)){
        mobileErr.innerHTML = "*Mobile must be in 10 digit format";
        mobileErr.style.color = "red";
    }
    else{
        mobileErr.innerHTML = mobile.value;
        mobileErr.style.color = "green";
    }

    // aashiqsingh56789@gmail.com

    var emailPattern = /^[a-z0-9]+.@[a-z]+\.[a-z]+$/;
    if(email.value.match(emailPattern)){
        emailErr.innerHTML = email.value;
        emailErr.style.color = "green";
    }
    else{
        emailErr.innerHTML = "*Email must be invalid format";
        emailErr.style.color = "red";
    }



}