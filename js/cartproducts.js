shopProducts = JSON.parse(localStorage.getItem("shopProducts"));

const cartIcon = document.querySelector(".shop-cart");
const cartSection = document.querySelector(".cart-section");
const cartContainer = document.querySelector(".cart-container");
let count = document.querySelector(".count");
const productPrice = document.querySelector(".product__price");
const cartTotal = document.querySelector(".cart-total");
let cartItems = [];

cartIcon.addEventListener("click", function () {
  // console.log()
  cartContainer.classList.toggle("show-cart");
});

if (cartItems.length === 0) {
  cartSection.innerHTML = `
  <h3> No products added to cart</h3>`;
}

function updateCartItems() {
  cartSection.innerHTML = "";

  cartItems.map((singleProduct) => {
    let cartProduct = document.createElement("div");
    cartProduct.classList.add("shoped-product");
    cartProduct.innerHTML = `
          <img src=${singleProduct.image}">
          <h5>${singleProduct.name}</h5>
          <p>${singleProduct.description}</p>
          <p >Ksh. <span class="single-price">${singleProduct.price}</span></p>
          
          <div class="cart-tally">
          <button class="decreament">-</button>
          <p class="quantity">1</p>
          <button class=" increament">+</button>
          </div>
          <p class="newPrice">${singleProduct.price}</p>
          `;

    cartSection.append(cartProduct);
  });
  //
  updatePrices();
}

document.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelectorAll(".cart__btn");

  for (let p = 0; p < btn.length; p++) {
    btn[p].addEventListener("click", function (e) {
      let singleProductImage =
        e.target.parentElement.children[0].getAttribute("src");
      let singleProductName = e.target.parentElement.children[1].textContent;
      let singleProductDescrption =
        e.target.parentElement.children[2].textContent;
      let singleProductPrice = e.target.parentElement.children[3].textContent;
      console.log(btn)
      if (e.target.textContent.toLowerCase() === "add to cart") {
        const singleProduct = {
          image: singleProductImage,
          name: singleProductName,
          description: singleProductDescrption,
          price: singleProductPrice,
        };

        console.log(singleProduct);
        // console.log(e);
        e.target.style.background = "red";
        e.target.textContent = "Remove from cart";
        cartItems.push(singleProduct);
        count.textContent = cartItems.length;

        updateCartItems();
      } else {
        const indexToRemove = cartItems.findIndex(
          (singleProduct) => singleProduct.name === singleProductName.value
        );
        // console.log(indexToRemove);
        cartItems.splice(indexToRemove, 1);
        count.textContent = cartItems.length;
        e.target.style.background = "gray";
        e.target.textContent = "Add to cart";
        updateCartItems();
      }
    });
  }
});

cartSection.addEventListener("click", function (e) {
  if (e.target.classList.contains("increament")) {
    const currentQuantityElement = e.target.previousElementSibling;
    currentQuantityElement.textContent++;
    const price = currentQuantityElement.previousElementSibling.parentElement.previousElementSibling.textContent.replace("Ksh. Ksh.", "");
    const total = currentQuantityElement.nextElementSibling.parentElement.nextElementSibling

    total.textContent = `Ksh. ${parseInt(currentQuantityElement.textContent) * parseInt(price)}`
    console.log(total)
  } else if (e.target.classList.contains("decreament")) {
    const nextQuantityElement = e.target.nextElementSibling;
    if (nextQuantityElement.textContent > 1) {
    //   nextQuantityElement.textContent--;

    // const price = currentQuantityElement.previousElementSibling.parentElement.previousElementSibling.textContent.replace("Ksh. Ksh.", "");
    // const total = currentQuantityElement.nextElementSibling.parentElement.nextElementSibling
    }
  }

  updatePrices();
});

function updatePrices() {
  let totalPrice = 0;

  const cartItemProducts = document.querySelectorAll(".shoped-product");
  //  console.log(cartItemProducts)
  for (let p = 0; p < cartItemProducts.length; p++) {
    let itemElement = cartItemProducts[p];
    //   console.log(itemElement)
    const itemName = itemElement.querySelector("p").textContent;
    //   console.log(itemName);
    let item = cartItems.find((element) => element.name === itemName);

    if (item) {
      let quantity = parseInt(
        itemElement.querySelector(".quantity").textContent
      );
      console.log(quantity);
      console.log(typeof quantity);
      let price = parseInt(
        itemElement.querySelector(".single-price").textContent
      );
      console.log(price)
      let addedPrice = quantity * price;
      itemElement.querySelector(".newPrice").textContent = addedPrice
      totalPrice += addedPrice;
    }
  }
  cartTotal.textContent = `Total Price: Ksh. ${totalPrice}`;
  // console.log(cartTotal.textContent)
}
