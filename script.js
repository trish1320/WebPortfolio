Can't create, edit, or upload … Not enough storage. Get 100 GB of storage for ₱119.00 ₱29.00 for 1 month.
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
     menu.classList.remove('bx-x');
     navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['3rd Year College', 'BSIT Student', '22 Years Old'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });

  