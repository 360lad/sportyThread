
shopProducts = JSON.parse(localStorage.getItem("shopProducts"));
const productsDiv=document.querySelector(".home__products");
// shopProducts.push(singleProduct);
// localStorage.setItem("shopProducts", JSON.stringify(shopProducts));
// let btn=document.querySelectorAll(".cart__btn");

function upadateShopItems() {
  // const singleProduct = {};
    // productsDiv.innerHTML="";
    shopProducts.map((singleProduct) => {
      let shopItem = document.createElement("div");
      shopItem.classList.add(".shoped-product");
      console.log(singleProduct)

      shopItem.innerHTML = `
        
          <img src="${singleProduct.image}">
          <h5>${singleProduct.name}</h5>
          <p>${singleProduct.descrption}</p>
          <p>Ksh.${singleProduct.price}</p>
          <button class="add__btn">Add to cart</button>
      `;

    productsDiv.append(shopItem)
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    upadateShopItems();
  });