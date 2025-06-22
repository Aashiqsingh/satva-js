const sendEmail = (event)=>{
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");


    console.log("name ---> ", name.value);
    console.log("email ---> ", email.value);
    console.log("message ---> ", message.value);


    const params = {
        name:name.value,
        email:email.value,
        message:message.value
    }

    const serviceId = "service_5xn19rc";
    const templateId = "template_qgmmaae";


    emailjs.send(serviceId,templateId,params).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })

}