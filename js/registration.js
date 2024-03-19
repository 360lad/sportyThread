// const name=document.querySelector(".reg__name").value;
// const email=document.querySelector(".reg__email").value;
// const pnone=document.querySelector(".reg__number").value;
// const adress=document.querySelector(".reg__adress").value;
// const password=document.querySelector(".reg__password").value;
// const confirmPassword=document.querySelector(".reg__passwordconfirmation").value;

const regInputs = document.querySelectorAll("input");
const submitButton = document.querySelector(".reg__btn");
const message = document.querySelector(".notification");
const properties=[]
console.log(message);
// alert("hello")
submitButton.addEventListener("click", () => {
  let users = [];
  const user = {};

  regInputs.forEach((input) => {
    if (input.value === "" || input.value === null){
      //   console.log("fill all fields");

      message.textContent = "The empty fields must be filled";
      input.style.border = "1px solid red";
      return;
    } else if (
      document.querySelector("input[name=password]").value !==
      document.querySelector("input[name=confirm]").value
    ) {
      document.querySelector("input[name=password]").style.border =
        "1px solid red";
      document.querySelector("input[name=confirm]").style.border =
        "1px solid red";

      message.textContent = "The passwords do not match";
    } else {
      if (input.name !== "confirm") {
        properties.push(input.name)
        user[`${input.name}`] = input.value;
        input.style.border = "1px solid gray";
      }


     
      
     

    //   else if((input.value !== "" || input.value !== null)){

    
    //   }
    }
  });

  //   Save user to Local Storage
  if (localStorage.getItem("users") === null) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    users = JSON.parse(localStorage.getItem("users"));
    users.push(user);
  }
  localStorage.setItem("users", JSON.stringify(users));
  console.log(users);


  window.location.href="login.html"
  


 
});




