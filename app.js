let body = document.querySelector("body");


let bar = document.createElement("button");
bar.innerHTML = "&#9776";
bar.classList.add("bar");

let links = document.querySelector(".links");
links.append(bar);

let barDiv = document.createElement("div");
let homeA = document.createElement("a");
let eventA = document.createElement("a");
let contactA = document.createElement("a");

barDiv.append(homeA);
barDiv.append(eventA);
barDiv.append(contactA);

homeA.innerText = "Home";
eventA.innerText = "Event";
contactA.innerText = "Contact";
homeA.setAttribute("href","#home");
eventA.setAttribute("href","event.html");
contactA.setAttribute("href","contact.html");

bar.addEventListener("click",function(event){
   event.stopPropagation();
   barDiv.classList.toggle("barDiv");
   barDiv.classList.remove("displayNone");
   if(barDiv.getAttribute("class") =="barDiv"){
     document.querySelector(".header").insertAdjacentElement("afterend",barDiv);
   }else{
     barDiv.remove();
   }

})

body.addEventListener("click",function(){
     barDiv.classList.remove("barDiv");
     barDiv.classList.add("displayNone");
})


