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

const anchors = document.querySelectorAll('a');
 
anchors.forEach(function(item,index,array){
    item.addEventListener("click", (event)=>{
        // console.log('clicked', index);
        event.preventDefault();
    });
});

const logo = document.querySelector('.logo-heading');
 
logo.addEventListener('mouseover', (event)=>{
    logo.style.transition="1s";
    logo.style.fontSize = "7rem";
});
 
logo.addEventListener('mouseout', (event)=>{
    logo.style.transition="1s";
    logo.style.fontSize = "4rem";
});


