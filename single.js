console.log("product loaded...");

const id = 1528;
const productUrl = `"https://kea-alt-del.dk/t7/api/products/${id}" + id`;
const productcontainer = document.querySelector("#productcontainer");

console.log("product: ", productUrl);

//get the data

function getData() {
  fetch(productUrl).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  console.log("shows data er", data);

  productcontainer.innerHTML = `

    <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="Produktbillede" class="productImage">
    <h2>${data.productdisplayname}</h2>
    <p class="productPrice"><span class="bold">Pris:</span> ${data.price}</p>
    
    <div class="sizes">
        <div class="size_box><p>XS</p></div>
        <div class="size_box><p>S</p></div> 
        <div class="size_box><p>M</p></div> 
        <div class="size_box><p>L</p></div> 
        <div class="size_box><p>XL</p></div>
    </div>
    `;
}

getData();
