// Your code goes here
const nav = document.querySelector('nav');

nav.addEventListener('mouseenter',(event)=>{
    nav.style.transition="1s";
    nav.style.backgroundColor = "pink";
});
 
nav.addEventListener('mouseleave',(event)=>{
    nav.style.transition="1s";
    nav.style.backgroundColor = "white";
});

