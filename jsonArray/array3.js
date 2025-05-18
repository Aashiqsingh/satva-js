var departments = [
    {
        name:"IT",
        employees:[
            {
                name:"amit",
                age:23,
                gender:"male",
                isActive:true,
                isChild:0
            },
            {
                name:"sumit",
                age:25,
                gender:"male",
                isActive:true,
                isChild:1
            },
            {
                name:"seeta",
                age:26,
                gender:"female",
                isActive:true,
                isChild:2
            }
        ]
    },
    {
        name:"HR",
        employees:[
            
            {
                name:"geeta",
                age:32,
                gender:"female",
                isActive:true,
                isChild:2
            },
            {
                name:"harita",
                age:36,
                gender:"female",
                isActive:false,
                isChild:1
            },
        ]
    },
    {
        name:"Finance",
        employees:[
            
            {
                name:"siya",
                age:35,
                gender:"female",
                isActive:true,
                isChild:3
            },
            {
                name:"axit",
                age:37,
                gender:"male",
                isActive:true,
                isChild:4
            },
            {
                name:"payal",
                age:39,
                gender:"female",
                isActive:true,
                isChild:2
            },
            {
                name:"sunit",
                age:24,
                gender:"male",
                isActive:false,
                isChild:1
            }
            
        ]
    },
]


// let x = departments.map((dep)=> dep.employees.reduce((total,emp)=>total +emp.isChild,0)).reduce((sum,emp)=> sum + emp,0)

// console.log(x)


// let x = departments.map((dep)=>dep.employees.filter((emp)=> emp.gender==="female"))

// console.log(x)


// let x = departments.find((depart)=> depart.name === "IT").employees.filter((emp)=> emp.isChild >= 1)
// console.log(x);



// let x = departments.find((depart)=> depart.name === "Finance").employees.filter((emp)=> emp.gender === "female")
// console.log(x);


// let x = departments.map((depart)=> depart.employees.filter((emp)=> emp.age > 25))
// console.log(x);


// let x = departments.map((depart)=>{
//     return depart.employees.filter((emp)=>{
//         return emp.age > 25
//     })
// })
// console.log(x);



// let x = departments.map((depart)=>{
//     return depart.name
// })
// console.log(x);

