import navbar_main from "./components/navbar.js";
document.getElementById("navbar_main").innerHTML=navbar_main();

import footer_main from "./components/footer.js"
document.getElementById("footer_main").innerHTML=footer_main()



function constructor(relavtivePosition,img,reviews,intro,price,mrp,save,img2,id){
    this.relavtivePosition=relavtivePosition;
    this.img=img;
    this.reviews=reviews;
    this.intro=intro;
    this.price=price;
    this.mrp=mrp;
    this.save=save;
    this.img2=img2;
    this.id=id
}
var cartArray=JSON.parse(localStorage.getItem("wholecart"))||[];
let array=[];
let data= new constructor("YOU SAVE 55%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_400x.png?v=1625046144"," boAt Rockerz 550 ", " 4.8 | 27 reviews","₹ 1,799","You Save: ₹ 3200 (64%)","₹ 3900","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_400x.png?v=1625046144",0);
let data1= new constructor("YOU SAVE 65%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_400x.png?v=1625045744"," boAt Rockerz 450 ", " 4.8 | 127 reviews","₹ 1,399","You Save: ₹ 2591 (65%)","₹ 3490","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7499af44-9d7a-489c-80f0-51f7799289e4_400x.png?v=1625045491",1)
let data2= new constructor("YOU SAVE 60%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5d5377dc-d3dd-48ba-8ec9-2a1630146d8d_400x.png?v=1625045983"," boAt Rockerz 510 ", " 4.8 | 87 reviews","₹ 1,399","You Save: ₹ 2091 (60%)","₹ 2990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/709d5346-3135-495f-ba7b-80fae784af83_400x.png?v=1625045493",2)
let data3=new constructor("YOU SAVE 50%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img3_400x.png?v=1616562632","boAt Rockerz 450 Pro", " 4.8 | 253 reviews","₹ 1,399","You Save: ₹ 2591 (65%)","₹ 3990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img3_400x.png?v=1616562632",3)
let data4=new constructor("YOU SAVE 57%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e0374ba2-e1a9-4c94-b634-2f7af588581d_400x.png?v=1625046471","boAt Rockerz 400", " 4.7 | 60 reviews","₹ 1,299","You Save: ₹ 1691 (57%","₹ 2499","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5648dd3e-e147-420b-8585-f31f30ab7774_400x.png?v=1625045738","4");
let data5=new constructor("YOU SAVE 60%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e5881832-36f8-4c1c-a767-10f2c2a55a02_400x.png?v=1625046573","boAt Rockerz 370", " 4.8 | 306 reviews","₹ 999","You Save: ₹ 1500 (60%)","₹ 4999","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4d6c575d-bb23-4ba3-a144-eeabb6ae0a9a_400x.png?v=1625045497",5);
let data6=new constructor("YOU SAVE 57%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e5881832-36f8-4c1c-a767-10f2c2a55a02_400x.png?v=1625046573","boAt Rockerz 650", " 4.8 | 22 reviews","₹ 1,699","You Save: ₹ 2291 (57%)","3990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-650-black_400x.png?v=1624968476",6)
let data7=new constructor("YOU SAVE 55%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fd0e55b0-ca9e-4aa8-b94f-5cca99189951_400x.png?v=1625045647","boAt Rockerz 600", " 4.8 | 49 reviews","₹ 1,799","You Save: ₹ 2191 (55%)","3990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/d6eddcd1-2d1b-47a6-9103-77e629241a09_400x.png?v=1625045647",7)
let data8=new constructor("YOU SAVE 57%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_b66dce6b-710d-49cb-9d1c-2bc8c9c0ab15_400x.png?v=1645698328","boAt Rockerz 425", " 4.8 | 11 reviews","₹ 1,299","You Save: ₹ 1691 (57%)","2990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_f1b5ec66-9373-4ca7-b824-0edd129ab085_400x.png?v=1645698329",8)
// let data9=new constructor("","","","","",9)
array.push(data,data1,data2,data3,data4,data5,data6,data7,data8);
// console.log('array:', array); 

const rock=(array)=>{
    console.log('data:', array);
    array.forEach(el => {
        let saving=document.createElement("p");
        saving.innerHTML=el.relavtivePosition;
        saving.setAttribute("class","saving")
        let row=document.createElement("div");
        row.setAttribute("class","row");
        row.addEventListener("click",function(){
            productData(el);
        })
        let row2=document.createElement("div");
        row2.setAttribute("class","row2");
        let img=document.createElement("img");
        img.src=el.img;
        img.setAttribute("class",`imgChange${el.id}`)
        let star=document.createElement("span");
        star.setAttribute("class","fa fa-star checked")
        let p1=document.createElement("p");        
        p1.innerText=el.reviews;
        p1.setAttribute("class","intro")
        let check= document.createElement("span");
        check.setAttribute("class","fa fa-check")
        let hr= document.createElement("hr");
        let p2=document.createElement("p");
        p2.innerText=el.price;
        p2.setAttribute("class","redColor")
        let p3=document.createElement("p");
        p3.innerText=el.mrp;
        p3.setAttribute("class","yousave")
        let p4=document.createElement("p");
        p4.innerText=el.save;  
        p4.setAttribute("class","strikedOff")
        let row3=document.createElement("div");
        row3.setAttribute("class","row3");  
        row3.append(p2,p4)   
        let reviews=document.createElement("span");
        reviews.innerHTML=el.intro;
       
        let btn=document.createElement("button");
        btn.innerText="ADD TO CART";
        btn.addEventListener("click",function(){
            cartDatawhole(el)
        })
        img.addEventListener("mouseout",function(){
            changeImage3(el.img,el.id);
        })
        img.addEventListener("mouseenter",function(){
            changeImage3(el.img2,el.id);
        })
        row2.append(p1,star,reviews,check,hr,row3,p3,btn ,saving)
        row.append(img,row2);
        document.getElementById("containers").append(row);        
    });
}

rock(array);

function  changeImage3(img,id){
    // console.log('img:', img)
    // document.getElementById(`img1-${id}`).src=img;
    document.querySelector(`.imgChange${id}`).src=img;
 }

 
 let activities = document.getElementById("activitySelector");
 activities.addEventListener("change",function(){
    if(activities.value == "atoz")
    {
        addActivityItem();
    }

    if(activities.value == "ztoa")
    {
        addActivityItem2();
    }

    if(activities.value == "highToLow")
    {
        addActivityItem3();
    }

    if(activities.value == "lowtohigh")
    {
        addActivityItem4();
    }

 })

 function addActivityItem(){
    console.log("inside")
    document.getElementById("containers").innerHTML=null;


    let lowToHigh =array;
    
    
    lowToHigh.sort(function (a, b) {
        // console.log('b:', b)
        // console.log('a:', a)
        let x = a.intro.toUpperCase(),
            y = b.intro.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
    
    });

    console.log('lowToHigh:', lowToHigh);
    rock(lowToHigh);

 }

 function addActivityItem2(){
    console.log("inside")
    document.getElementById("containers").innerHTML=null;


 
 let HightoLow =array;
    
    
 HightoLow.sort(function (a, b) {
     // console.log('b:', b)
     // console.log('a:', a)
     let x = a.intro.toUpperCase(),
         y = b.intro.toUpperCase();
     return x == y ? 0 : x > y ? -1 : 1;
 
 });
 rock(HightoLow);
}

function addActivityItem3(){
    // console.log("inside")
    document.getElementById("containers").innerHTML=null;


 
 let HightoLow =array;
    
    
 
HightoLow.sort((a,b) => {
    if(a.price > b.price) return 1;
    if(a.price < b.price) return -1;
    return 0;
});

console.log(HightoLow);
 rock(HightoLow);
}

function addActivityItem4(){
    // console.log("inside")
    document.getElementById("containers").innerHTML=null;


 
 let lowtohigh =array;
    
    
 
lowtohigh.sort((a,b) => {
    if(a.price > b.price) return -1;
    if(a.price < b.price) return 1;
    return 0;
});

console.log(lowtohigh);
 rock(lowtohigh);
}


function cartDatawhole(el){
    cartArray.push(el);
    localStorage.setItem("wholecart",JSON.stringify(cartArray));
    console.log('cartArray:', cartArray)
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
function cartData(wholecart){


    document.getElementById("cartSvg").addEventListener("click",function(){
        onCartClick(wholecart);
    });
    }
    cartData(wholecart);


    

    function productData(el){
        console.log('el:', el)
        localStorage.setItem("products",JSON.stringify(el));
        window.location.href="./products.html"
    }