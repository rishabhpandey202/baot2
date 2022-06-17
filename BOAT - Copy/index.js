import navbar_main from "./components/navbar.js";
document.getElementById("navbar_main").innerHTML=navbar_main();

import footer_main from "./components/footer.js"
document.getElementById("footer_main").innerHTML=footer_main()

// //////////////////////////////////////////////

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
// var cartArray=JSON.parse(localStorage.getItem("wholecart"))||[];
let array=[];
var array2=[];
var array3=[];
var array4=[];
var array5=[];
var array6=[];
let data= new constructor("YOU SAVE 55%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_400x.png?v=1642405569"," boAt Rockerz 550 ", " 4.8 | 27 reviews","₹ 1,799","You Save: ₹ 3200 (64%)","₹ 3900","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28_400x.png?v=1642405569",0);
let data1= new constructor("YOU SAVE 65%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_400x.png?v=1641801688"," boAt Rockerz 450 ", " 4.8 | 127 reviews","₹ 1,399","You Save: ₹ 2591 (65%)","₹ 3490","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_a08fff6a-7c3d-4663-9499-3421df127e94_400x.png?v=1641801688",1)
let data2= new constructor("YOU SAVE 60%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_400x.png?v=1641801662"," boAt Rockerz 510 ", " 4.8 | 87 reviews","₹ 1,399","You Save: ₹ 2091 (60%)","₹ 2990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-1_400x.png?v=1641801662",2)
let data3=new constructor("YOU SAVE 50%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_400x.png?v=1650387008","boAt Rockerz 450 Pro", " 4.8 | 253 reviews","₹ 1,399","You Save: ₹ 2591 (65%)","₹ 3990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/xtend_black_400x.png?v=1650387008",3)
let data4=new constructor("YOU SAVE 57%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_0ae2597d-dee4-42fd-9a18-eb4ae0b3bc43_400x.png?v=1647765304","boAt Rockerz 400", " 4.7 | 60 reviews","₹ 1,299","You Save: ₹ 1691 (57%","₹ 2499","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_0ae2597d-dee4-42fd-9a18-eb4ae0b3bc43_400x.png?v=1647765304","4");
let data5=new constructor("YOU SAVE 60%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9da7e1ae-89f2-42c4-9714-76ac5ec83817_400x.png?v=1625045743","boAt Rockerz 370", " 4.8 | 306 reviews","₹ 999","You Save: ₹ 1500 (60%)","₹ 4999","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5752f5e4-89e0-4f84-b7fe-4d9f85771046_400x.png?v=1625157753",5);
let data6=new constructor("YOU SAVE 57%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a6549acb-b075-4c3e-8ed3-9c9fcba32d42_400x.png?v=1625046216","boAt Rockerz 650", " 4.8 | 22 reviews","₹ 1,699","You Save: ₹ 2291 (57%)","3990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1bca7fb9-5f5c-42e3-930a-8a430d8a9e60_400x.png?v=1625046217",6)
let data7=new constructor("YOU SAVE 55%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_d6503e2e-e0b1-4c4e-af28-2164903baf9f_400x.png?v=1640237576","boAt Rockerz 600", " 4.8 | 49 reviews","₹ 1,799","You Save: ₹ 2191 (55%)","3990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_d6503e2e-e0b1-4c4e-af28-2164903baf9f_400x.png?v=1640237576",7)
let data8=new constructor("YOU SAVE 67%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f7d33ad-39a9-4426-836e-c300814839b9_400x.png?v=1625046105","boAt Rockerz 235 V2", " 4.8 | 49 reviews","₹ 999","You Save: ₹ 2191 (67%)","2990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_600x.png?v=1625045114",8);
let data9=new constructor("YOU SAVE 67%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_2_500x.png?v=1627276367","boAt Rockerz 234 V2", " 4.8 | 49 reviews","₹ 999","You Save: ₹ 2191 (67%)","2990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_1_500x.png?v=1627276362",9);
let data10= new constructor("YOU SAVE 55%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_400x.png?v=1625046144"," boAt Rockerz 550 ", " 4.8 | 27 reviews","₹ 1,799","You Save: ₹ 3200 (64%)","₹ 3900","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_400x.png?v=1625046144",10);
let data11= new constructor("YOU SAVE 65%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_400x.png?v=1625045744"," boAt Rockerz 450 ", " 4.8 | 127 reviews","₹ 1,399","You Save: ₹ 2591 (65%)","₹ 3490","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7499af44-9d7a-489c-80f0-51f7799289e4_400x.png?v=1625045491",11);
let data12=new constructor("YOU SAVE 56%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/553af994-244a-4b81-9d9e-9967a1b966b3_400x.png?v=1625046259","boAt Rockerz 600", " 4.8 | 49 reviews","₹ 1,799","You Save: ₹ 2191 (55%)","3990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c3d0fbbd-9479-4351-bf04-91136da2ae91_400x.png?v=1625046259",12);
let data13=new constructor("YOU SAVE 65%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_400x.png?v=1574927262","boAt Rockerz 600", " 4.8 | 49 reviews","₹ 1,799","You Save: ₹ 2191 (55%)","3990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103blk_400x.png?v=1574927262",13);
let data14=new constructor("YOU SAVE 45%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/f87f98c3-9b52-4f7f-9ebe-dd10ee9517d9_400x.png?v=1633152280","boAt Rockerz 600", " 4.8 | 49 reviews","₹ 1,799","You Save: ₹ 2191 (55%)","3990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-102-red_400x.png?v=1633152280",14);
let data15=new constructor("YOU SAVE 57%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eab9128d-65cf-42ce-83a1-03492ec6157d_400x.png?v=1625046386","boAt Rockerz 600", " 4.8 | 49 reviews","₹ 1,799","You Save: ₹ 2191 (55%)","3990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eab9128d-65cf-42ce-83a1-03492ec6157d_400x.png?v=1625046386",15);
let data16=new constructor("YOU SAVE 65%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_400x.png?v=1641801688"," boAt Rockerz 450 ", " 4.8 | 127 reviews","₹ 1,399","You Save: ₹ 2591 (65%)","₹ 3490","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_a08fff6a-7c3d-4663-9499-3421df127e94_400x.png?v=1641801688",16);
let data17= new constructor("YOU SAVE 60%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_400x.png?v=1641801662"," boAt Rockerz 510 ", " 4.8 | 87 reviews","₹ 1,399","You Save: ₹ 2091 (60%)","₹ 2990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-1_400x.png?v=1641801662",17);
let data18=new constructor("YOU SAVE 55%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_400x.png?v=1625046144"," boAt Rockerz 550 ", " 4.8 | 27 reviews","₹ 1,799","You Save: ₹ 3200 (64%)","₹ 3900","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_400x.png?v=1625046144",18);
let data19= new constructor("YOU SAVE 65%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_400x.png?v=1625045744"," boAt Rockerz 450 ", " 4.8 | 127 reviews","₹ 1,399","You Save: ₹ 2591 (65%)","₹ 3490","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7499af44-9d7a-489c-80f0-51f7799289e4_400x.png?v=1625045491",19);
let data20=new constructor("YOU SAVE 55%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-black_400x.png?v=1612765376","boAt Rockerz 600", " 4.8 | 49 reviews","₹ 1,799","You Save: ₹ 2191 (55%)","3990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-blue_400x.png?v=1612765376",20);
let data21=new constructor("YOU SAVE 65%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/back_400x.png?v=1648723802","boAt Rockerz 600", " 4.8 | 49 reviews","₹ 1,799","You Save: ₹ 2191 (55%)","3990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/grey_400x.png?v=1648723802",21);
let data22=new constructor("YOU SAVE 65%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/734d9897-6be3-4020-b550-1597a24b082b_400x.png?v=1625045659","boAt Rockerz 600", " 4.8 | 49 reviews","₹ 1,799","You Save: ₹ 2191 (55%)","3990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/218997d1-3fe9-4a19-809c-94a8a2d05273_400x.png?v=1625045659",22);
let data23=new constructor("YOU SAVE 65%","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/402-main-img_400x.png?v=1630059242","boAt Rockerz 600", " 4.8 | 49 reviews","₹ 1,799","You Save: ₹ 2191 (55%)","3990","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7925e2ed-89e7-4247-8f27-380ef0178294_400x.png?v=1625045867",23);
array.push(data,data1,data2,data3);
array2.push(data4,data5,data6,data7);
array3.push(data8,data9,data10,data11);
array4.push(data12,data13,data14,data15);
array5.push(data16,data17,data18,data19);
array6.push(data20,data21,data22,data23);
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
        // btn.addEventListener("click",function(){
        //     cartDatawhole(el)
        // })
        img.addEventListener("mouseout",function(){
            changeImage3(el.img,el.id);
        })
        img.addEventListener("mouseenter",function(){
            changeImage3(el.img2,el.id);
        })
        row2.append(p1,star,reviews,check,hr,row3,p3,btn ,saving)
        row.append(img,row2);
        document.getElementById("container1").append(row); 
        // document.getElementById("container2").append(row);        
    });
}

rock(array)

const smartwatch=(array2)=>{
    console.log('data:', array2);
    array2.forEach(el => {
        let saving=document.createElement("p");
        saving.innerHTML=el.relavtivePosition;
        saving.setAttribute("class","saving")
        let row=document.createElement("div");
        row.setAttribute("class","row");
        // row.addEventListener("click",function(){
        //     productData(el);
        // })
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
        // btn.addEventListener("click",function(){
        //     cartDatawhole(el)
        // })
        img.addEventListener("mouseout",function(){
            changeImage3(el.img,el.id);
        })
        img.addEventListener("mouseenter",function(){
            changeImage3(el.img2,el.id);
        })
        row2.append(p1,star,reviews,check,hr,row3,p3,btn ,saving)
        row.append(img,row2);
        // document.getElementById("container1").append(row); 
        document.getElementById("container2").append(row);        
    });
}

smartwatch(array2)


const wireless=(array3)=>{
    console.log('data:', array3);
    array3.forEach(el => {
        let saving=document.createElement("p");
        saving.innerHTML=el.relavtivePosition;
        saving.setAttribute("class","saving")
        let row=document.createElement("div");
        row.setAttribute("class","row");
        // row.addEventListener("click",function(){
        //     productData(el);
        // })
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
        // btn.addEventListener("click",function(){
        //     cartDatawhole(el)
        // })
        img.addEventListener("mouseout",function(){
            changeImage3(el.img,el.id);
        })
        img.addEventListener("mouseenter",function(){
            changeImage3(el.img2,el.id);
        })
        row2.append(p1,star,reviews,check,hr,row3,p3,btn ,saving)
        row.append(img,row2);
        // document.getElementById("container1").append(row); 
        document.getElementById("array3").append(row);        
    });
}

wireless(array3)


const wireless2=(array4)=>{
    console.log('data:', array4);
    array4.forEach(el => {
        let saving=document.createElement("p");
        saving.innerHTML=el.relavtivePosition;
        saving.setAttribute("class","saving")
        let row=document.createElement("div");
        row.setAttribute("class","row");
        // row.addEventListener("click",function(){
        //     productData(el);
        // })
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
        // btn.addEventListener("click",function(){
        //     cartDatawhole(el)
        // })
        img.addEventListener("mouseout",function(){
            changeImage3(el.img,el.id);
        })
        img.addEventListener("mouseenter",function(){
            changeImage3(el.img2,el.id);
        })
        row2.append(p1,star,reviews,check,hr,row3,p3,btn ,saving)
        row.append(img,row2);
        // document.getElementById("container1").append(row); 
        document.getElementById("container3").append(row);        
    });
}

wireless2(array4)

const gaming=(array5)=>{
    console.log('data:', array5);
    array5.forEach(el => {
        let saving=document.createElement("p");
        saving.innerHTML=el.relavtivePosition;
        saving.setAttribute("class","saving")
        let row=document.createElement("div");
        row.setAttribute("class","row");
        // row.addEventListener("click",function(){
        //     productData(el);
        // })
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
        // btn.addEventListener("click",function(){
        //     cartDatawhole(el)
        // })
        img.addEventListener("mouseout",function(){
            changeImage3(el.img,el.id);
        })
        img.addEventListener("mouseenter",function(){
            changeImage3(el.img2,el.id);
        })
        row2.append(p1,star,reviews,check,hr,row3,p3,btn ,saving)
        row.append(img,row2);
        // document.getElementById("container1").append(row); 
        document.getElementById("container4").append(row);        
    });
}

gaming(array5)

function  changeImage3(img,id){
    // console.log('img:', img)
    // document.getElementById(`img1-${id}`).src=img;
    document.querySelector(`.imgChange${id}`).src=img;
 }


 document.getElementById("Wireless").addEventListener("click",function(){
        document.getElementById("array3").innerHTML=null;
        wireless(array2);
     })
     document.getElementById("Earbuds").addEventListener("click",function(){
        document.getElementById("array3").innerHTML=null;
        wireless(array6);
     })
     document.getElementById("ANC").addEventListener("click",function(){
        document.getElementById("container3").innerHTML=null;
        wireless2(array6);
     })
     document.getElementById("Wired2").addEventListener("click",function(){
        document.getElementById("container3").innerHTML=null;
        wireless2(array6);
     })
     document.getElementById("Wireless2").addEventListener("click",function(){
        console.log('Wireless2:', Wireless2)
        document.getElementById("container3").innerHTML=null;
        wireless2(array2);
     })


   
   
    //  function cartDatawhole(el){
    //     cartArray.push(el);
    //     localStorage.setItem("wholecart",JSON.stringify(cartArray));
    //     console.log('cartArray:', cartArray)
    //  }
    
///////////////////////////////////////////////////////




///carouse///////////////////////////////////////////////// 


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
window.plusSlides=plusSlides;
window.currentSlide=currentSlide;

////////////////////////////////////////////


document.getElementById("nextPage").addEventListener("click",function(){
    nextPage();
})
function nextPage(){
    window.location.href="./rock.html"
}

document.getElementById("loginCustomer").addEventListener("click",function(){
    loginCustomer();
})
function loginCustomer(){
    console.log('loginCustomer:')
    window.location.href="./login.html"
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