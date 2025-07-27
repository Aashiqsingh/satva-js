const selectProduct = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                productId:1,
                productName:"iPhone 12",
                price:10000,
                message:"Product selected successfully..",
            })
        },4000);
    })
}

const addToCart = (product)=>{
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            ...product,
            message:"Product added to cart successfully..",
            status:200,
        })
    },4000);
   }) 
}

const getOrder = (cart)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                ...cart,
                message:"Order placed successfully..",
                status:200,
            })
        },4000);
    })
}

selectProduct().then((data)=>{
    console.log("selectProduct...",data);
    addToCart(data).then((res)=>{
        console.log("addToCart...",res);

        getOrder(res).then((data)=>{
            console.log("getOrder...",data);
        }).catch((error)=>{
            console.log("getOrder error...",error);
        })
    }).catch((err)=>{
        console.log("addToCart error...",err);
    })
    
}).catch((err)=>{
    console.log("selectProduct error...",err);
})