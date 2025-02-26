let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");
div.addEventListener("click",(event)=>{
    event.stopPropagation();//to stop the event bubbling
    console.log("div was clicked");
});
ul.addEventListener("click",(event)=>{
    event.stopPropagation();
    console.log("ul was clicked");
})
for(li of lis){
    li.addEventListener("click",(event)=>{
        event.stopPropagation();
        console.log("li was clicked");
    }); 
}