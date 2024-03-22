shopProducts = JSON.parse(localStorage.getItem("shopProducts"));
const productsDiv = document.querySelector(".home__products");
// shopProducts.push(singleProduct);
// localStorage.setItem("shopProducts", JSON.stringify(shopProducts));

function upadateShopItems() {
  // const singleProduct = {};
  productsDiv.innerHTML="";
  shopProducts.map((singleProduct) => {
    let shopItem = document.createElement("div");
    shopItem.classList.add(".shoped-product");
    console.log(singleProduct);

    shopItem.innerHTML = `
        <div class="display__products">
        <div class="display__image">
          <img src="${singleProduct.image}">
          </div>
          <h5>${singleProduct.name}</h5>
          <p>${singleProduct.descrption}</p>
          <p>Ksh.${singleProduct.price}</p>
          <button class="cart__btn">Add to cart</button>
          </div>
      `;

    productsDiv.append(shopItem);
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  upadateShopItems()
})


