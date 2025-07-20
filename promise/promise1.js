const getData = ()=>{

    console.log("Starting data.........");
    

    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data fetched successfully..");
            // reject("error in fetching data..");
        },4000);
    })

    console.log(promise);
    promise.then((res)=>{
        console.log(res);
        console.log("Ending data.........");

    })
    promise.catch((err)=>{
        console.log(err);
    })
    

    
}


getData()