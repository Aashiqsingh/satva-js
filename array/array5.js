var language = ["hindi","english","french","gujarati","marathi","telgu","tamil","urdu"]


// var x = language.filter((lang)=>{
//     return lang != "marathi"
// })

// console.log(x);


// const deleteLang = (langName)=>{

//     var x = language.filter((lang)=>{
//         return lang != langName
//     })

//     return x
// }


// let ans = deleteLang("english")
// console.log(ans);



// const deleteLang = (langName)=>{

//     return language.filter((lang)=>{
//         return lang != langName
//     })

    
// }


// let ans = deleteLang("french")
// console.log(ans);



// const deleteLang = (langName)=>{

//     return language.filter((lang)=> lang != langName)

    
// }


// let ans = deleteLang("tamil")
// console.log(ans);



const deleteLang = (langName)=> language.filter((lang)=> lang != langName)

    



let ans = deleteLang("urdu")
console.log(ans);