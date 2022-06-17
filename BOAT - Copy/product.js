import navbar_main from "./components/navbar.js";
document.getElementById("navbar_main").innerHTML=navbar_main();

import footer_main from "../components/footer.js"
document.getElementById("footer_main").innerHTML=footer_main()


let data= JSON.parse(localStorage.getItem("products"))
// console.log('data:', data);
let a=1;
var cartArray=JSON.parse(localStorage.getItem("wholecart"))||[];
let array=[]
function constructor(img,color,id){
    this.img=img;
   this.color=color;
   this.id=id;
}
 let d1=new constructor (  "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5d5377dc-d3dd-48ba-8ec9-2a1630146d8d_72x.png?v=1625045983","orange",0);
 let d2=new constructor (    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/709d5346-3135-495f-ba7b-80fae784af83_72x.png?v=1625045493" ,"blue",1);
 let d3=new constructor (   "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0893f345-8dbf-4b30-a3fd-8f717bb34d93_72x.png?v=1625045856" ,"green",2);
 let d4=new constructor (    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8d42bd81-b833-4fc7-9d54-90c603b5e9d0_72x.png?v=1625044984" ,"red",3);
array.push(d1,d2,d3,d4);

rightDiv(data)
 threeInArowImg(array);
 lastDiv(data);

let singleImage=(data)=>{

        let row2=document.createElement("div");
         let img=document.createElement("img");
        img.src=data.img;
        row2.append(img);
        document.getElementById("singleImg").append(row2)
   
}

singleImage(data)
const fourImg=(array)=>{
    array.forEach(el => {
        // console.log('el:', el)
        let row2=document.createElement("div");
         let img=document.createElement("img");
        img.src=el.img;
        // img.style="border:solid 1px red"
         img.addEventListener("mouseenter",function(){
                changeImage(el);
            })
        
        row2.append(img);

        document.getElementById("fourImg").append(row2)
    });
  
}
fourImg(array);

function  changeImage(el){
     
    document.getElementById("singleImg").innerHTML=null;
    let row2=document.createElement("div");
    let img=document.createElement("img");
   img.src=el.img;
//    img.style="border:solid 1px red";
    row2.append(img);
    document.getElementById("singleImg") .append(row2);  
 }

 function rightDiv(data){
//  console.log('dataNew:', data)
 let row2=document.createElement("div");
 let h1=document.createElement("h1"); 
 h1.innerText=data.reviews;
 let h2=document.createElement("h2"); 
 h2.innerText="BLUETOOTH HEADPHONES";
 let star=document.createElement("span");
 star.setAttribute("class","fa fa-star checked ");
 let star2=document.createElement("span");
 star2.setAttribute("class","fa fa-star checked","fa fa-star checked");
 let star3=document.createElement("span");
 star3.setAttribute("class","fa fa-star checked","fa fa-star checked");
 let star4=document.createElement("span");
 star4.setAttribute("class","fa fa-star checked","fa fa-star checked");
 let star5=document.createElement("span");
 star5.setAttribute("class","fa fa-star checked","fa fa-star checked");
 let span=document.createElement("span"); 
 span.innerText=data.intro;
 let check= document.createElement("span");
 check.setAttribute("class","fa fa-check")
 let hr=document.createElement("hr");
//  let row=document.createElement("div");
//  row.setAttribute("id","threeInArowImg");

 row2.append(h1,h2,star,star2,star3,star4,star5,span,check,hr);
 document.getElementById("rightSide").append(row2);
 }

 function threeInArowImg(data){
//  console.log('data:', data);
 data.forEach(el => {
 let row2=document.createElement("div");

 let color=document.createElement("h4");
 color.innerHTML=`color:${el.color}`
 let row=document.createElement("div");
 row.setAttribute("class","threeImg")
 let img=document.createElement("img");
 img.src=el.img; 
//  img.style="border:solid 1px red";
 
 row.append(img);
 row2.append(color,row);
 document.getElementById("rightSide").append(row2);
});
 }

function lastDiv(data){
    // console.log('data:', data)
    let row=document.createElement("div");
    row.setAttribute("class","main")
    let s1=document.createElement("span");
    s1.innerText=data.price;
    s1.setAttribute("class","red");
     let s2=document.createElement("span");
    s2.innerText=data.save;
    s2.setAttribute("class","strikedOff")
    let br= document.createElement("br");
    let row2=document.createElement("div");
    row2.setAttribute("class","flex");
    let s3=document.createElement("p");
    s3.innerText=data.mrp;
    s3.setAttribute("class","green");
    let s4=document.createElement("p");
    s4.innerText="Inclusive of all taxes";
    s4.setAttribute("class","grey");
    row2.append(s3,s4);
    let br2= document.createElement("br");
    let s5=document.createElement("span");
    s5.innerText="IN STOCK";
    s5.setAttribute("class","green2");
    let s6=document.createElement("span");
    s6.innerText="Currently in 242 carts";
    s6.style="font-weight: 500;font-size: 14px;line-height: 17px;color: rgb(255, 3, 13);visibility: visible;";
    let br3= document.createElement("br");
    let row4=document.createElement("div");
    row4.append(s5,s6);
    row4.setAttribute("class","flex");
    let last=document.createElement("div");
    last.setAttribute("class","last")
    let count=document.createElement("span");
    count.innerHTML=a;
    count.setAttribute("class",'count');
    let btn=document.createElement("button");
    btn.setAttribute("class",'fa fa-minus');
    btn.addEventListener("click",function(){
        if(a<0){
            document.querySelector(".count").innerHTML=0;
        }
        else;
        a--;
        minus(a);
    })
   
    let btn2=document.createElement("button");
    btn2.setAttribute("class",'fa fa-plus');
    btn2.addEventListener("click",function(){
        if(a>=7){
            document.querySelector(".alert").innerHTML="max limit";
            a=7;
            document.querySelector(".count").innerText=a;
           
        }
        else;
        a++;
        add(a);
    })
    
    let span=document.createElement("span");
    span.innerText="Quantity";
    last.append(btn,count,btn2,span);
    let br4= document.createElement("br");
    let alert=document.createElement("span");
    alert.setAttribute("class","alert")
    alert.innerHTML=null;
    let btn5=document.createElement("button");
    btn5.innerText="ADD TO CART";
    btn5.addEventListener("click",function(){
        cartDatawhole(data)
    })
    btn5.setAttribute("class",'addToCart');
       row.append(s1,s2,br,row2,br2,row4,br3,last,br4,alert,btn5);
    document.getElementById("last").append(row)

}

function minus(a){
    document.querySelector(".count").innerHTML= a;
    console.log('a:', a)

}
function add(a){
   
    // document.querySelector(".count").innerHTML=null;
    document.querySelector(".count").innerHTML= a;
    console.log('a:', a)
}

function cartDatawhole(el){
    cartArray.push(el);
    localStorage.setItem("wholecart",JSON.stringify(cartArray));
    // console.log('cartArray:', cartArray)
 }
var wholecart=JSON.parse(localStorage.getItem("wholecart"))||[]
// console.log('wholecart:', wholecart)
function onCartClick(data){
    console.log('daat:', data)
    console.log('onCartClick:')
   data.forEach(el => {    
 
    let row =document.createElement("div");//flex  column
    row.setAttribute("class","cartPanel");
    let red= document.createElement("h1");
    red.innerText=`Your Cart(${wholecart.length} item)`
    red.style=" background-color:red;color white;"
    let head=document.createElement("p");
    head.innerText="Free Shipping sitewide | Cash On Delivery available for order value upto ₹3000"
    
    let row2 =document.createElement("div"); //flex row
    let img=document.createElement("img");
    img.src=el.img;
    img.style="height:120px;width:120px"

    let row3 =document.createElement("div");//flex coum
    let disc=document.createElement("p");
    disc.innerText=el.reviews;
    let price=document.createElement("p");
    price.innerText=el.price;
    row3.append(disc,price)
    row2.append(img,row3)
    row.append(red,head,row2);
    document.body.appendChild(row);
    console.log('document:', document.body)
   
});
}
function cartData(cartArray){


    document.getElementById("cartSvg").addEventListener("click",function(){
        onCartClick(cartArray);
    });
    }
    cartData(cartArray);







// function onCartClick(){
//     console.log('onCartClick:')
//     let row =document.createElement("div");
//     row.setAttribute("class","cartPanel");
//     document.body.appendChild(row);
//     console.log('document:', document.body)

// }
// function cartData(){


//     document.getElementById("cartSvg").addEventListener("click",function(){
//         onCartClick();
//     });
//     }
//     cartData();





// document.getElementById("login").addEventListener("click",function(){
//     var logArr = JSON.parse(localStorage.getItem("allUsers")) || []
//     var userEmail=document.querySelector("#email").value;
//     var userPassword=document.querySelector("#password").value;
//     for(let i=0;i<logArr.length;i++){
//         var email=logArr[i].email
//         var password=logArr[i].password
//         if(email==userEmail&&password==userPassword){
//             window.location.href="index.html"
//             return;
//         }

//     }

//     alert("Not regesterd yet");

    
// })

