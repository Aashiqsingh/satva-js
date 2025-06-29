// date --> class 

// Date

// var date = new Date()
// console.log(date);

function getDate(){
    // var date = new Date();

    // // console.log(date);
    // console.log(date.getDate());
    // console.log(date.getDay());
    // console.log(date.getFullYear());
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    // console.log(date.getMonth() + 1);
    // console.log(date.getSeconds());
    // console.log(date.getTime());
    


    var date2 = new Date("2023-10-01T01:00:00Z");
    date2.setDate(14);
    date2.setMonth(1); // January
    date2.setFullYear(2020);
    date2.setHours(12);
    date2.setMinutes(20);
    date2.setSeconds(30);


    console.log(date2);
    
    // console.log(date2);
    
    
}

getDate()