// Por ahora en esta entrega, se va a trabajar la lógica del botón con id: "addProductBtn".

let products = getProductsFromLocalStorage();

// Asociar el evento al botón después de obtener los productos
document.getElementById("addProductBtn").addEventListener("click", addProductToInventory);

// Agregar un nuevo producto:
function addProductToInventory() {

  const productName = document.getElementById("productName").value;
  const productPrice = parseFloat(document.getElementById("productPrice").value);

  
    // uso de operador ternario
    const validacionInput = !productName || isNaN(productPrice) || productPrice <= 0;
    validacionInput ? alert("Por favor, ingresa un nombre y un precio válido.") : null;

    if (validacionInput) return;

  // Se crea el producto
  let newProduct = {
    id: products.length + 1,
    name: productName,
    price: productPrice
  };

  // Se agrega el nuevo producto al arreglo
  products.push(newProduct);

  // Se actualiza el arreglo con el nuevo producto
  saveProductsToLocalStorage(products);

  console.log("New product added:", newProduct);

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
}

function getProductsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("products")) || [];
}

function saveProductsToLocalStorage(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

