
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

// ... (tu código existente) ...

let cart = [];
let total = 0;

function addToCart(productId, productName, productPrice) {
    const product = {
        id: productId,
        name: productName,
        price: productPrice
    };

    cart.push(product);
    total += product.price;

    updateCartUI();
}

function updateCartUI() {
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    const cartSection = document.getElementById('cart-section');
    const cartCount = document.getElementById('cart-count');

    cartList.innerHTML = '';
    cartCount.innerText = cart.length;

    cart.forEach(product => {
        const li = document.createElement('li');
        li.innerText = product.name + ' - $' + product.price;
        cartList.appendChild(li);
    });

    cartTotal.innerText = total;

    // Oculta el carrito si está vacío
    if (cart.length === 0) {
        cartSection.style.display = 'none';
    } else {
        cartSection.style.display = 'block';
    }
}

function checkout() {
    // Puedes implementar aquí la lógica para procesar el pago
    // Por ejemplo, enviar la información del carrito al servidor
    // y mostrar una ventana emergente de confirmación
    Swal.fire('¡Compra realizada!', 'Gracias por tu compra.', 'success');
    // Limpia el carrito después de realizar la compra
    cart = [];
    total = 0;
    updateCartUI();
}

function toggleCart() {
    const cartSection = document.getElementById('cart-section');
    if (cartSection.style.display === 'none') {
        cartSection.style.display = 'block';
    } else {
        cartSection.style.display = 'none';
    }
}





