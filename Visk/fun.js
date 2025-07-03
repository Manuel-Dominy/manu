
const bgfun=document.getElementById("bg-image");
document.addEventListener("scroll",()=>{ updateimage();});
function updateimage(){
    bgfun.style.opacity=1 - (window.pageYOffset/900);
    bgfun.style.backgroundSize=150-window.pageYOffset/12 +"%";
}