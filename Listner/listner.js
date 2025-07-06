let btn = document.getElementById("btn")
let txt = document.getElementById("txt")
btn.addEventListener("click",()=>{
    txt.innerHTML = "Royal technosoft p ltd."
})
btn.addEventListener("mouseenter",()=>{
    btn.style.backgroundColor = "red"
    btn.style.color = "white";
    btn.style.height = "40px";
    btn.style.width = "80px";
    btn.style.transition = "1s"
})

btn.addEventListener("mouseleave",()=>{
    txt.style.backgroundColor = "green";
    txt.style.color = "white"
})