const logInName=document.querySelector((".log__name").value);
const logInEmail=document.querySelector((".log__email").value);
// console.log("logInName")

const logInDetails={
//    name: logInName;
//    emial: logInEmail;
};
localStorage.setItem("logInDetails",JSON.stringify(logInDetails))




