const logInEmail = document.querySelector(".log__email");
const logInMessage=document.querySelector(".login__message")
const logInPassword = document.querySelector(".log__password");
const logInBtn = document.querySelector(".login__btn");
const details = JSON.parse(localStorage.getItem("users"));
console.log(details);

logInBtn.addEventListener("click", () => {
  // console.log(logInEmail.value)
  details.forEach((data) => {
    // console.log(data.email)
    if (data.email === logInEmail.value) {
      if (data.password === logInPassword.value) {
        // console.log(data.password);
        
        window.location.href="index.html"
    }
    else{
        logInMessage.textContent="wrong Password***"
    }
}
else{
    logInMessage.textContent="No account with that email!!!"
}
  });
});

// // console.log("logInName")

// const logInDetails={
//    name: logInName;
//    emial: logInEmail;
// };
// localStorage.setItem("logInDetails",JSON.stringify(logInDetails))
