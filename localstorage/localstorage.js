function submit(){
    let name = document.getElementById("name")
    let age = document.getElementById("age").value;

    console.log(name + " " + age);

    localStorage.setItem("name",name.value);
    localStorage.setItem("age",age);
    
}
var output = document.getElementById("output");

function getData(){
    let name = localStorage.getItem("name")
    let age = localStorage.getItem("age")

    output.innerHTML = name + " " + age
}

function clearData(){
    // localStorage.clear()
    localStorage.removeItem("name")
    location.href = ""
}