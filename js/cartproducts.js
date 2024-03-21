const cartIcon = document.querySelector(".shop-cart");
const cartSection = document.querySelector(".cart-section");
const cartContainer = document.querySelector(".cart-container");
let btn=document.querySelectorAll(".cart__btn");
let count =document.querySelector(".count");
const productPrice = document.querySelector(".product__price");
const cartTotal = document.querySelector(".cart-total");
let cartItems=[];



cartIcon.addEventListener("click", function () {
    cartContainer.classList.toggle("show-cart");
  });

  if(cartItems.length===0){
    cartSection.innerHTML=`
    <h3> No products added to cart</h3>`
  }

  function updateCartItems() {
    cartSection.innerHTML = "";

    cartItems.map((singleProduct) => {
      let cartProduct = document.createElement("div");
      cartProduct.classList.add("shoped-product");
      cartProduct.innerHTML = `
          <img src=${singleProduct.image} width="100px">
          <h3>${singleProduct.name}</h3>
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
    if(cartItems.length===0){
      cartSection.innerHTML= `
      <h3>Nothing added to cart</h3>
      `
      cartTotal.style.display="none"
    }
  updatePrices()
  }



  for (let p = 0; p < btn.length; p++) {
    btn[p].addEventListener("click", function (e) {
     
     
  
      if (e.target.textContent.toLowerCase() === "add to cart") {
        let singleProduct={
          image:singleProduct.image,
          name:singleProduct.name,
          descrption:singleProduct.descrption,
         price: singleProduct.price,
        }
       
        
        // console.log(singleProduct);
        // console.log(e);
        e.target.style.background = "red";
        e.target.textContent = "Remove from cart";
        cartItems.push(singleProduct);
        count.textContent = cartItems.length;
  
        // updateCartItems();
      } else {
        const indexToRemove = cartItems.findIndex(
          (singleProduct) => singleProduct.name === productName.value
        );
        console.log(indexToRemove);
        cartItems.splice(indexToRemove, 1);
        count.textContent = cartItems.length;
        e.target.style.background = "black";
        e.target.textContent = "Add to cart";
        updateCartItems();
      }
    });
  }

  cartSection.addEventListener("click", function (e) {
    // console.log(e)
    if (e.target.classList.contains("increament")) {
      const currentQuantityElement = e.target.previousElementSibling;
      currentQuantityElement.textContent++;
      // console.log("adding items")
    } else if (e.target.classList.contains("decreament")) {
      const nextQuantityElement = e.target.nextElementSibling;
      if (nextQuantityElement.textContent > 1) {
        nextQuantityElement.textContent--;
      }
      // // console.log("deleting items")
    }
  
    updatePrices();
  
  });


  function updatePrices() {
    let totalPrice=0;
    // console.log(ggg)
    const cartItemProducts = document.querySelectorAll(".shoped-product");
     console.log(cartItemProducts)
    for (let p = 0; p < cartItemProducts.length; p++) {
      let itemElement = cartItemProducts[p];
    //   console.log(itemElement)
      const itemName = itemElement.querySelector("h3").textContent;
    //   console.log(itemName);
     let item= cartItems.find(element=>element.name===itemName)
  
     if(item){
      let quantity=parseInt(itemElement.querySelector(".quantity").textContent)
      console.log(quantity)
      console.log(typeof(quantity))
      let price=parseInt(itemElement.querySelector(".single-price").textContent)
      console.log(price)
      let addedPrice=quantity*price
      itemElement.querySelector(".newPrice").textContent=addedPrice
      totalPrice+=addedPrice
      
     }
    }
    cartTotal.textContent=`Total Price: Ksh. ${totalPrice}`
  }
  