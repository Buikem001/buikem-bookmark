const nav2 = document.querySelector('.nav1');
const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburgerClose');


function openNav(){
    nav2.style = 'top: 30%';
    hamburger.style = 'display: none';
    hamburgerClose.style = 'display: block';
}

function closeNav(){
    nav2.style = 'top: -30%';
    hamburger.style = 'display: block';
    hamburgerClose.style = 'display: none';
}