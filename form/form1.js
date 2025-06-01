const submitHandler = (event)=>{
    event.preventDefault(); // Prevent the default form submission behavior
    // alert("Form submitted successfully!");

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value

    let nameErr = document.getElementById("nameErr");
    let emailErr = document.getElementById("emailErr");
    let ageErr = document.getElementById("ageErr");

    if(name.length == "")
    {
        // alert("Name is required");
        nameErr.innerHTML = "*Name is required";
        nameErr.style.color = "red";
    }
    else if(name.length < 4)
    {
        nameErr.innerHTML = "*Name must be at least 4 characters";
        nameErr.style.color = "red";
    }
    else{
        nameErr.innerHTML = name;
        nameErr.style.color = "green";
    }

    if(email.length == "")
    {
        emailErr.innerHTML = "*Email is required";
        emailErr.style.color = "red";
    }
    else if(!email.includes("@") || !email.includes("."))
    {
        emailErr.innerHTML = "*Email must contain @ and .";
        emailErr.style.color = "red";
    }
    else{
        emailErr.innerHTML = email;
        emailErr.style.color = "green";
    }



    // var namePattern = /^[A-Z]{1}[A-Za-z0-9]+$/
    // var mobilePattern = /^[6-9]{1}[0-9]{9}$/




    // var user = {
    //     name:name.value,
    //     email:email,
    //     age:age.value
    // }

    // console.log(user);

    // var user = {
    //     name,
    //     email,
    //     age
    // }
    // // console.log(user);

    // let output = document.getElementById("output");

    // // output.innerHTML = user
    // let res = JSON.stringify(user)
    // output.innerHTML = res;

    // console.log(res[0]);
    
    
    



    // console.log("Namw ----> ",name.value);
    // console.log("Email ----> ",email);
    // console.log("Age ----> ",age.value);
    

    console.log("Form submitted successfully!");

}