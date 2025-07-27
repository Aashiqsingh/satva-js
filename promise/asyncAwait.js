const getData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            resolve({
                message:"data fetched successfully..",
                status:200
            })
        },4000);
    })
}



const result = async()=>{
    console.log("starting.....");

    let res = await getData()
    console.log(res);

    console.log("Ending......");
}

result()














// async function result(){

//     console.log("starting.....");
    

//     let res = await getData()
//     console.log(res);


//     console.log("Ending......");
    
    
// }

// result()