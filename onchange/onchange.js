var mydiv = document.getElementById("mydiv");

function changeColor(){
    let color = document.getElementById("colors")

    console.log(color.value);
    mydiv.style.height = "200px"
    mydiv.style.width = "200px"
    mydiv.style.backgroundColor = color.value;
    mydiv.style.margin = "100px 400px"

    
    
}