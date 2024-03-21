const productInput = document.querySelectorAll("input");
const productsDiv=document.querySelector(".home__products");
const productName = document.querySelector(".product__name");
const message = document.querySelector(".notification");
const sucessMessage = document.querySelector(".succes__message");
const productDescription = document.querySelector(".product__description");
const productPrice = document.querySelector(".product__price");

const productImage = document.querySelector(".product__image");
const imageList = document.querySelector(".image-list");
let imageUrl;
let shopProducts = [];

productImage.addEventListener("change",(e) => {
  // console.log(e);
  const imageFile = productImage.files[0];
  console.log(imageFile);
  const imageReader = new FileReader();
  console.log(imageReader);
  imageReader.readAsDataURL(imageFile);

  imageReader.addEventListener("load", (e) => {
    console.log(e);
    imageUrl = e.target.result;
    // const div = document.createElement("div");
    // div.classList.add("image");
    imageList.innerHTML = `
                <img src="${e.target.result}" alt="image">
               
            `;
    // imageList.appendChild(div);
  });

  // console.log(imageReader.readAsDataURL(imageFile))
  // // imageReader.readAsDataURL(imageFile);
});

//   Save individual products to Local Storage

document.querySelector(".form__btn").addEventListener("click", (e) => {
  const singleProduct = {};
  e.preventDefault();
  productInput.forEach((input) => {
    if (input.value === "" || input.value === null) {
      message.textContent = "The empty fields must be filled";
      input.style.border = "1px solid red";
    } else {
      singleProduct.image = imageUrl;
      singleProduct.name = productName.value;
      singleProduct.descrption = productDescription.value;
      singleProduct.price = productPrice.value;

      // console.log(singleProduct);
    }
  });

  if (localStorage.getItem("shopProducts") === null) {
    shopProducts.push(singleProduct);
    localStorage.setItem("shopProducts", JSON.stringify(shopProducts));
  } else {
    shopProducts = JSON.parse(localStorage.getItem("shopProducts"));
    shopProducts.push(singleProduct);
    localStorage.setItem("shopProducts", JSON.stringify(shopProducts));
  }
  sucessMessage.textContent = "Form submitted succesfully";

  productInput.forEach((input) => {
    input.value = "";
    imageList.textContent = "";
  });

  // e.preventDefault()


  // console.log(imageUrl)
  // document.querySelector(".images").innerHTML=`
  // <img src="${imageUrl}" alt="an image">
  // `
});

// upadateShopItems()
