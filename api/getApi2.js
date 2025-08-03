const getData = async()=>{
    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"GET",
        headers:{
            "content-type": "application/json"
        }
    })

    const res = await response.json();
    console.log(res.data);

    let tbody = document.getElementById("tbody");

    res.data.forEach((user)=>{
        let tr = document.createElement("tr");
        let idTd = document.createElement("td");
        let nameTd = document.createElement("td");
        let emailTd = document.createElement("td");
        let passwordTd = document.createElement("td");
        let ageTd = document.createElement("td");
        let statusTd = document.createElement("td");
        let actionTd = document.createElement("td");
        let btn = document.createElement("button");
        btn.innerHTML = "Delete"
        btn.className = "btn btn-danger";
        btn.addEventListener("click",async()=>{
            // alert(user._id);
            const response2 = await fetch("https://node5.onrender.com/user/user/"+user._id,{
                method:"DELETE",
                headers:{
                    "content-type": "application/json"
                }
            })
            console.log(response2);
            tr.remove()
        })

        idTd.innerText = user._id;
        nameTd.innerText = user.name;
        emailTd.innerText = user.email;
        passwordTd.innerText = user.password;
        ageTd.innerText = user.age;
        statusTd.innerText = user.isActive;
    
        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        tr.appendChild(emailTd);
        tr.appendChild(passwordTd);
        tr.appendChild(ageTd);
        tr.appendChild(statusTd);
        tr.appendChild(actionTd);
        actionTd.appendChild(btn);
        tbody.appendChild(tr);
    })
    
}