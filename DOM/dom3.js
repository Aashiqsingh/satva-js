// let a = 1;
var colors = ["red", "green", "blue", "yellow", "orange", "purple", "black","gray"];
function changes(){
    let mydiv = document.getElementById("mydiv")

    let randomIndex = Math.floor(Math.random() * colors.length)
    console.log(randomIndex);
    

    mydiv.style.backgroundColor = colors[randomIndex]

    // console.log("hello world");
    // console.log(a++);
    
}