function changeTxt(){
    let txt = document.getElementById("txt");
    console.log(txt.value);

    let txtError = document.getElementById("txtError");

    if(txt.value.length < 3)
    {
        // alert("Please enter at least 3 characters");
        txtError.innerHTML = "Please enter at least 3 characters";
        txtError.style.color = "red";
        txt.style.outline = "2px solid red";
    }
    else{
        txtError.innerHTML = txt.value;
        txtError.style.color = "green";
        txt.style.outline = "2px solid green";
    }
    
}