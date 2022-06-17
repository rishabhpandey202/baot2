import navbar_main from "./components/navbar.js";
document.getElementById("navbar_main").innerHTML=navbar_main();

import footer_main from "../components/footer.js"
document.getElementById("footer_main").innerHTML=footer_main();

document.getElementById("login").addEventListener("click",function(){
    var logArr = JSON.parse(localStorage.getItem("allUsers")) || []
    var userEmail=document.querySelector("#email").value;
    var userPassword=document.querySelector("#password").value;
    for(let i=0;i<logArr.length;i++){
        var email=logArr[i].email
        var password=logArr[i].password
        if(email==userEmail&&password==userPassword){
            window.location.href="index.html"
            return;
        }

    }

    alert("Not regesterd yet");

    
})
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