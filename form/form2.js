function submitHandler(event){
    event.preventDefault();


    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let gender = document.getElementsByName("gender");

    let gen = ""


    if(gender[0].checked == true)
    {
        gen = "Male"
    }
    else if(gender[1].checked)
    {
        gen = "Female"
    }
    else{
        gen = "Other"
    }

    let output = document.getElementById("output");

    if(gen == "Male")
    {
        if(age > 18)
        {
            output.innerHTML = "You are eligible for the scholarship";
        }
        else{
            output.innerHTML = "You are not eligible for the scholarship";
        }
    }
    else if(gen == "Female")
    {
        if(age > 21)
        {
            output.innerHTML = "You are eligible for the scholarship";
        }
        else{
            output.innerHTML = "You are not eligible for the scholarship";
        }
    }
    else{
        if(age > 25)
        {
            output.innerHTML = "You are eligible for the scholarship";
        }
        else{
            output.innerHTML = "You are not eligible for the scholarship";
        }
    }

}