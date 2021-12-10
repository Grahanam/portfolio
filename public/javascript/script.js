window.addEventListener('load',()=>{
    const preload=document.querySelector('.preload');
    preload.classList.add('preload-finish');
})

//toggle Menu
const hamburger=document.querySelector(".hamburger");
const navmenu= document.querySelector(".nav-menu");

hamburger.addEventListener("click",menu)

function menu(){
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active")
}

const navlink=document.querySelectorAll(".nav-link");

navlink.forEach(n=> n.addEventListener("click",closeMenu));

function closeMenu(){
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}