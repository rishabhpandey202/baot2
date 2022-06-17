import navbar_main from "./components/navbar.js";
document.getElementById("navbar_main").innerHTML=navbar_main();

import footer_main from "../components/footer.js"
document.getElementById("footer_main").innerHTML=footer_main()

var usersArray=JSON.parse(localStorage.getItem("allUsers")) || []
// var obj={};
// var firstName=document.getElementById("firstName").value;
// var lastName=document.getElementById("lastname").value;
// var email=document.getElementById("email").value;
// var password=document.getElementById("password").value;



document.getElementById("submit").addEventListener("click",function(){
    Credentials()
})
function Credentials(){
console.log('Credentials:')
var userEmail=document.querySelector("#email").value;
for(let i=0;i<usersArray.length;i++){
    var email=usersArray[i].email
    if(email==userEmail){
        alert("user already exist please change email")
       
        return;
    }

}

var userObj = {
    firstname: document.querySelector("#firstName").value,
    lastname: document.querySelector("#lastname").value,
    email: document.querySelector("#email").value,
    password :document.querySelector("#password").value,
    // confirmpassword :document.querySelector("#").value,
    // mobile :document.querySelector("#mobile").value,
    };
    usersArray.push(userObj);
    localStorage.setItem("allUsers",JSON.stringify(usersArray));
    window.location.href="index.html"
}
function onCartClick(){
    console.log('onCartClick:')
    let row =document.createElement("div");
    row.setAttribute("class","cartPanel");
    document.body.appendChild(row);
    console.log('document:', document.body)

}
function cartData(){


    document.getElementById("cartSvg").addEventListener("click",function(){
        onCartClick();
    });
    }
    cartData();