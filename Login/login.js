const register = (event)=>{
    event.preventDefault();


    alert("Registered Successfully");

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let mobile = document.getElementById("mobile");


    console.log("name ---> ", name.value);
    console.log("email ---> ", email.value);
    console.log("password ---> ", password.value);
    console.log("mobile ---> ", mobile.value);

    location.href = "./login.html"


    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)
    
}


const login = ()=>{

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    let emailRegister = localStorage.getItem("email");
    let passwordRegister = localStorage.getItem("password");


    if(emailRegister === email && passwordRegister === password){
        alert("Login Successfully");
        location
    }
    else{
        alert("Invalid Credentials");
    }
}