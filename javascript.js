
function emailSend(){
       
    Email.send({
        Host : "smtp.gmail.com",
        Username : "sarbanibhattacharjee61@gmail.com",
        Password : "ABA8AB73AD3CDBEF3412E5A96DAEC08914FF",
        To : 'sarbanibhattacharjee61@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New enquiry",
        Body : "Name:"+getElementById("name").value
        +"<br> Email:"+getElementById("email").value
        +"<br> Subject:"+getElementById("subject").value
        +"<br> Message:"+getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    ).catch(
                error => alert("Failed to send message: " + error)
            );
}
console.log("sarbani");