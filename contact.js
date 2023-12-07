function sendMail() {
    let parametros = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_24q20w2";
    const templateID = "template_tn5hegg";

    emailjs.send(serviceID, templateID, parametros).then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message was sent successfully!",
            showConfirmButton: false,
            timer: 1500
          });
    })
    .catch((err) => console.log(err));
}

