var students = [
    {
        id: 1,
        name: "shrey",
        email: "shrey@gmail.com",
        age: 17,
        gender: "male",
        url:"https://c.ndtvimg.com/2024-06/2c4h1tuo_pm-modi_625x300_01_June_24.jpg"
    },
    {
        id: 2,
        name: "priya",
        email: "priya@gmail.com",
        age: 18,
        gender: "female",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_mRZdeuWO0LuwpnajotcrcF3vyjwEVMSoQ&s"
    },
    {
        id: 3,
        name: "harsh",
        email: "harsh@gmail.com",
        age: 19,
        gender: "male",
        url:"https://upload.wikimedia.org/wikipedia/commons/6/64/Yogi_Adithyanath_in_Uttar_Pradesh_2023.jpg"
    },
    {
        id: 4,
        name: "amit",
        email: "amit@gmail.com",
        age: 20,
        gender: "male",
        url:"https://www.elections.in/political-leaders/images/amit-shah.jpg"
    },
    {
        id: 5,
        name: "vijay",
        email: "vijay@gmail.com",
        age: 21,
        gender: "male",
        url:"https://upload.wikimedia.org/wikipedia/commons/8/8c/BCCI_Secretary_Shri_Jay_Shah_in_PMO_New_Delhi.jpg"
    }
]

let thead = document.getElementById("thead")
thead.style.display = "none"


let tbody = document.getElementById("tbody")

const addData = () => {

    thead.style.display = ""

    for (let i = 0; i < students.length; i++) {
        let tr = document.createElement("tr")
        let idTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let emailTd = document.createElement("td")
        let ageTd = document.createElement("td")
        let genderTd = document.createElement("td")
        let imgTd = document.createElement("td")
        let img = document.createElement("img")


        idTd.innerHTML = students[i].id;
        nameTd.innerHTML = students[i].name;
        emailTd.innerHTML = students[i].email;
        ageTd.innerHTML = students[i].age;
        genderTd.innerHTML = students[i].gender;
        img.src = students[i].url;
        img.style.height = "100px";
        img.style.width = "100px";


        tbody.appendChild(tr)
        tr.appendChild(idTd)
        tr.appendChild(nameTd)
        tr.appendChild(emailTd)
        tr.appendChild(ageTd)
        tr.appendChild(genderTd)
        tr.appendChild(imgTd)
        imgTd.appendChild(img)
    }
}