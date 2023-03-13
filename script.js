const Humberger = document.querySelector('.humberger-bottun');
const Navbar = document.querySelector('.navigation-bar');

// script to activate the humberger button once clicked.

function humbergerfunction() {
  Humberger.classList.toggle('active');
  Navbar.classList.toggle('active');
}

Humberger.addEventListener('click', humbergerfunction);

// Script to activate the nav bar once clicked

function navbarfunction() {
  Humberger.classList.remove('active');
  Navbar.classList.remove('active');
}

Navbar.addEventListener('click', navbarfunction);
