console.log("HEJ FRA PRODUCTLIST");

const category = new URLSearchParams(window.location.search).get("category");
const url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;

getData(url);

const productContainer = document.querySelector(".product_list_container");
// getData("https://kea-alt-del.dk/t7/api/products");
function getData(url) {
  fetch(url).then((res) => res.json().then((data) => showProducts(data)));
}

function showProducts(products) {
  console.log("products", products);
  products.forEach((product) => {
    console.log("productdisplayname", product.productdisplayname);

    productContainer.innerHTML += `
    <article class="product_list_box ${product.soldout === 1 ? "soldout" : ""}  ${product.discount ? "discount" : ""}">

            <div class="imageContainer">
                <a href="produkt.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Product image"></a>
                <p class="soldout">SOLD OUT</p>
            </div>

                <h2>${product.productdisplayname}</h2>
                <p>${product.price}</p>
                <p class="onSale">${product.discount}%</p>
                <a href="produkt.html">
                    <h3>See more</h3>
                </a>
            </article>`;
  });
}
