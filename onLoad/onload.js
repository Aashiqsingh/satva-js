var body = document.getElementsByTagName("body")[0];
function red(){

    body.style.backgroundColor = "red";



    setTimeout(()=>{
        green();
    },4000);
}

function green(){
    body.style.backgroundColor = "green";

    setTimeout(()=>{
        blue();
    },4000)
}

function blue(){
    body.style.backgroundColor = "blue";

    setTimeout(()=>{
        yellow();
    },4000)
}

function yellow(){
    body.style.backgroundColor = "yellow";

    setTimeout(()=>{
        red();
    },4000)
}