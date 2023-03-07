//Solutions


//Apple Website
const row = document.querySelectorAll(".row");
const names = row[1].innerText
newArr.push(names)
console.log(newArr)



//Youtube website
const acc = document.querySelector(".acc-homepage");
 const clonedElem = acc.children[0].cloneNode(true);
clonedElem.firstChild.innerHTML = " new lI"
acc.appendChild(clonedElem);



//One Plus website
const phoneNum= document.querySelector(".customer-support")
phoneNum.children[0].innerText="9910886898"



// samsung Website
const change = document.querySelector(".diwali-deals-product-sale-pro");
change.children[1].innerText="Check Out"



// adidas website
const search= document.querySelector(".searchinput___19uW0")
const changeColor = ()=>{
   search.style.backgroundColor="Red";
}
search.addEventListener("mouseover", changeColor)


// 7th MDN
// Doubttttttttt


//Google website
const remove = document.querySelector("#SIvCob")
for(let i=0; i<=5;i++){
    remove.removeChild(remove.lastElementChild)}




//Code wars website
const changes = document.querySelector(".display-heading-1")
changes.style.color="red";
changes.style.fontFamily="monospace";



//freeCodeCamp website
const getStart= document.querySelectorAll(".login-btn-text")
const changeColor= () =>{
    getStart[1].style.backgroundColor="red"
}
getStart[1].addEventListener("mouseover",changeColor);



//realme website
const iconChange= document.querySelector(".icon-logo");
iconChange.style.backgroundImage='url("https://ineuron.ai/images/ineuron-logo.png")';


//Github Website
const changeColor = document.getElementsByClassName("btn-primary")
changeColor[1].style.backgroundColor="blue";



//HackerRank Website
const changeHeading = document.querySelector(".fl-heading-text")
changeHeading.innerText="JS BOOTCAMP";



// Asus Website
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize="80px";

//dell Website
const changeAlignment= document.querySelectorAll(".ps-title");
changeAlignment[4].style.textAlign="right";


// Vercel Website
document.querySelector(".section-title_title__VEDfK").innerText="Start from Scratch";



//Sony Website 
var date= new Date();
document.querySelector(".btn-container").innerText= date;




// Philips Website
document.querySelector(".p-f03-footer-container ").style.background="Orange";



// oppo website
document.querySelector(".desc").style.color="orange";






