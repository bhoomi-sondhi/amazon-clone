let slideBtnLeft= document.getElementById("slide-btn-left");
let slideBtnRight= document.getElementById("slide-btn-right");
let imageitem=document.querySelectorAll(".image-item");
let startslider=0;
let endslider=(imageitem.length-1)* 100;
slideBtnLeft.addEventListener("click",()=>{if(startslider <0){
    startslider +=100;
}
imageitem.forEach(element =>{
element.style.transform=`translateX(${startslider}%)`;
})
});




slideBtnRight.addEventListener("click",()=>{
   
if(startslider >= -endslider+100){
    startslider -=100;
}
imageitem.forEach(element=>{
element.style.transform=`translateX(${startslider}%)`;
})    

});






/*sidebar vnavigation*/
const sidebarnavigation=document.getElementById("sidebar-show");
const sidebaropennavigation=document.getElementById("open-nav-slider");
sidebaropennavigation.addEventListener("click",()=>{
    sidebarnavigation.classList.toggle("sidebar-show");
})
const sidebar=document.getElementById("sidebar-nav-close");
sidebar.addEventListener("click",()=>{

sidebarnavigation.classList.toggle("sidebar-show");



})
function showCard(title,price,img){
    document.getElementById("cardtitle").textContent=title;
     document.getElementById("cardprice").textContent="Price "+price;
     document.getElementById("cardImage").src=img;
       document.getElementById("priceCard").style.display="block";
}
   function hideCard(){
     document.getElementById("priceCard").style.display="none";
   }

const cards=document.querySelectorAll(".card-product");
const content=document.querySelectorAll(".content");

cards.forEach((card,index)=>{
card.addEventListener("click",()=>{
content.forEach(c=>{
    c.style.display=none;
content[index].style.display=block;



})











})
})














