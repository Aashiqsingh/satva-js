

function changeTxt(){
    // document.getElementById("txt").innerHTML = "RRoyal technosoft p ltd.";

    let txt = document.getElementById("txt")
    txt.innerHTML = "Royal technosoft p ltd.";
    txt.style.color = "white";
    txt.style.backgroundColor = "red";
    txt.style.fontFamily = "cursive"
}

function changeLink(){
    let link = document.getElementById("link")
    link.href = "https://www.netflix.com";
    link.innerHTML = "Netflix";
    link.target = "_blank"
}


const changeSize = ()=>{
    let img = document.getElementById("myimg")
    img.style.width = "300px";
    img.style.height = "300px";
}