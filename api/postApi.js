const postData = async()=>{

    // const user = {
    //     name:"priya",
    //     age:20,
    //     email:"priya@gmail.com",
    //     password:"123456",
    //     isActive:true
    // }

    const res = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        // body:JSON.stringify(user)
        body:JSON.stringify({
            name:"priya",
            age:20,
            email:"priya@gmail.com",
            password:"123456",
            isActive:true
        })

    })

    // console.log(res);
    const response = await res.json();
    console.log(response);
    
}