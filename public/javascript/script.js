window.addEventListener('load',()=>{
    const preload=document.querySelector('.preload');
    preload.classList.add('preload-finish');
})

//toggle Menu
var navlist=document.getElementById("navlist")
function showMenu(){
    navlist.style.right="0";
}
function closeMenu(){
    navlist.style.right="-200px";
}