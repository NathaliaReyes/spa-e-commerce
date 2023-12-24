
document.addEventListener("DOMContentLoaded", function () {
    // Función para obtener el carrito desde localStorage
    function getCart() {
        const cart = localStorage.getItem("cart");
        return cart ? JSON.parse(cart) : [];
    }

    // Función para guardar el carrito en localStorage
    function saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCounter(cart);
    }

    // Función para actualizar el contador del carrito en la interfaz
    function updateCartCounter(cart) {
        const cartCounter = document.getElementById("cuenta-carrito");
        cartCounter.textContent = cart.length;
    }

    // Agrega un evento click a todos los botones con la clase "buybtn"
    const buyButtons = document.querySelectorAll(".buybtn");
    buyButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Obtiene el nombre y el precio del producto desde los atributos data
            const productName = button.getAttribute("data-name");
            const productPrice = parseFloat(button.getAttribute("data-price"));

            // Crea un objeto representando el producto
            const product = { name: productName, price: productPrice };

            // Obtiene el carrito actual, agrega el producto y guarda en localStorage
            const cart = getCart();
            cart.push(product);
            saveCart(cart);
        });
    });
}); 
