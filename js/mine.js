const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrolly > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-s');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-s');
    navlist.classList.remove('open');
}