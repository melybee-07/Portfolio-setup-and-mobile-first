let Humberger = document.querySelector('.humberger-bottun');
let Navbar = document.querySelector('.navigation-bar');

// script to activate the humberger button once clicked.

function humbergerfunction(){
  Humberger.classList.toggle('active');
  Navbar.classList.toggle('active');
}

Humberger.addEventListener('click', humbergerfunction);



// Script to activate the nav bar once clicked





