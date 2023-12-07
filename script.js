// Logica para hacer las transiciones con los labels
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
});



const DDBB = [
    {
        email: "silvia23@gmail.com",
        password: "123silvia"
    },
    {
        email: "juan@gmail.com",
        password: "123juan"
    },
    {
        email: "mariana12@gmail.com",
        password: "123mariana"
    }
  ]



const inputUsuario = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const botonIniciar = document.querySelector("#btn-iniciar");

const usuarioALoguear = {
    email: '',
    password: ''
}

inputUsuario.addEventListener("input",(e) => { 
   usuarioALoguear.email = e.target.value
})


inputPassword.addEventListener("input",(e) => {
   usuarioALoguear.password = e.target.value
})


botonIniciar.addEventListener("click",(e) => {
    
    const usuarioEncontrado =  DDBB.find((el) => {
         return usuarioALoguear.email === el.email && usuarioALoguear.password === el.password;
    });

    if(usuarioEncontrado){
        window.location.href = 'index2.html';
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User not found!",
            footer: '<a href="index.html">Try again</a>'
          });
    }

    
});


