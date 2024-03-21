
shopProducts = JSON.parse(localStorage.getItem("shopProducts"));

// shopProducts.push(singleProduct);
// localStorage.setItem("shopProducts", JSON.stringify(shopProducts));

function upadateShopItems() {
  // const singleProduct = {};
    // productsDiv.innerHTML="";
    shopProducts.map((singleProduct) => {
      let shopItem = document.createElement("div");
      shopItem.classList.add(".display__products");
      shopItem.innerHTML = `
        
          <img src=${singleProduct.imageUrl}">
          <h5>${singleProduct.productName}</h5>
          <p>${singleProduct.productDescription}</p>
          <p>Ksh.${singleProduct.productPrice}</p>
          <button class="add__btn">Add to cart</button>
      `;

    productsDiv.append(shopItem)
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    upadateShopItems();
  });