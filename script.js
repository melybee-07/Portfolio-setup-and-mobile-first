const humberger = document.querySelector('.humberger-bottun');
const navbar = document.querySelector('.navigation-bar');

// script to activate the humberger button once clicked.
humberger.onclick = function () {
  humberger.classList.toggle('active');
  navbar.classList.toggle('active');
};

// Script to activate the nav bar once clicked
navbar.onclick = function () {
  humberger.classList.remove('active');
  navbar.classList.remove('active');
};
