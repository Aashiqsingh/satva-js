var users = ["ram","seeta","geeta","manjulekha","hanuman","lakshaman","ravan"]


// users.forEach((user)=>{
//     console.log(user);
    
// })

// users.forEach((user)=>{
//     console.log(user.toUpperCase());
    
// })

// users.forEach((user)=>{
//     if(user.length > 5)
//     {
//         console.log(user);
        
//     }
// })


var newAryy = []
users.forEach((user)=>{
    newAryy.push(user.toUpperCase())
})
console.log(newAryy);



// map : it will return new array with same length 

// var x = users.map((user)=>{
//     return user.toUpperCase()
// })
// console.log(x);

// var x = users.map((user)=>{
//     return user.length > 5
// })
// console.log(x);



// filter : it will return new array with modified data
// var x = users.filter((user)=>{
//     return user.length > 5
// })
// console.log(x);