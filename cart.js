document.addEventListener('DOMContentLoaded', function () {
    updateCart();  // Asegúrate de que la función de actualización del carrito se llame al cargar la página

    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', function () {
        checkout();
    });
});

function updateCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartList.innerHTML = '';
    
    let total = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

function checkout() {
    // Agrega la lógica para procesar el pago o realizar otras acciones relacionadas con el pago
    // Por ejemplo, podrías reiniciar el carrito después de un pago exitoso
    localStorage.setItem('cart', JSON.stringify([]));
    updateCart();
    alert('Checkout complete!');  // Puedes reemplazar esto con la lógica de tu aplicación
}