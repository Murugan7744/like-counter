var a=0;

var images=document.getElementById("view");
var para=document.getElementById("paragraph");




images.addEventListener("click",function(){
    a++;
         para.innerHTML=a+"Likes"; 
        para.classList.add("click");
        view.style.color="red";
        para.classList.remove("text");
    
})


