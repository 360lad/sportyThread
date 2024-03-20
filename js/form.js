const productName = document.querySelector(".product__name");
const productDescription = document.querySelector(".product__image");
const productprice= document.querySelector(".product__price");

const productImage = document.querySelector(".product__image");
const imageList = document.querySelector(".image-list");
let imageUrl;
let shopProducts=[];

productImage.addEventListener("change", (e) => {
  // console.log(e);
  const imageFile = productImage.files[0];
  console.log(imageFile);
  const imageReader = new FileReader();
  console.log(imageReader);
  imageReader.readAsDataURL(imageFile);

  imageReader.addEventListener("load", (e) => {
    console.log(e)
    imageUrl=e.target.result
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


document.querySelector(".form__btn").addEventListener("click", (e)=>{
    e.preventDefault()

    // console.log(imageUrl)
    // document.querySelector(".images").innerHTML=`
    // <img src="${imageUrl}" alt="an image">
    // `
})

let singleProduct={
    image:productImage.value
    name:productName.value
}

function upadateShopItems(){

}
  

