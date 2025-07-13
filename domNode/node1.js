let mydiv = document.getElementById("mydiv")
const createTag = ()=>{
    let h1 = document.createElement("h1")
    h1.innerHTML = "Royal technosoft p ltd."


    let link = document.createElement("a");
    link.innerHTML = "amazon"
    link.href = "https://www.amazon.com/";
    link.target = "_blank"


    let img = document.createElement("img");
    img.src = "../Image/img1.png";
    img.style.height = "100px";
    img.style.width = "100px";




    mydiv.appendChild(h1);
    mydiv.appendChild(link);
    mydiv.appendChild(document.createElement("br"))
    mydiv.appendChild(img);
}