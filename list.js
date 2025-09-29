console.log("HEJ FRA PRODUCTLIST");
const productContainer = document.querySelector(".product_list_container");
getData("https://kea-alt-del.dk/t7/api/products");
function getData(url) {
  fetch(url).then((res) => res.json().then((data) => showProducts(data)));
}

function showProducts(products) {
  console.log("products", products);
  products.forEach((products) => {
    console.log("productdisplayname", products.productdisplayname);
    productContainer.innerHTML += `
    <article class="product_list_box">
                <a href="produkt.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/${products.id}.webp" alt="Product image"></a>
                <h2>${products.productdisplayname}</h2>
                <p>${products.price}</p>
                <a href="produkt.html">
                    <h3>See more</h3>
                </a>
            </article>`;
  });
}
