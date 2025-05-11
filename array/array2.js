


var users = ["ram","seeta","geeta","manjulekha","hanuman","lakshaman","ravan"]
var flag = true;

// for(let i=0;i<users.length;i++)
// {
//     if(users[i].length < 4)
//     {
//         flag = false;
//     }
// }

// console.log(flag);

// user == users[i]


// var x = users.some((user)=>{
//     return user.length < 4
// })
// console.log(x);


// var x = users.some((user)=>{
//     return user.startsWith("z")
// })

// console.log(x);

var x = users.some((user)=> user.startsWith("s"))
console.log(x);

