const humberger = document.querySelector('.humberger-bottun');
const navbar = document.querySelector('.navigation-bar');

humberger.onclick = function () {
  humberger.classList.toggle('active');
  navbar.classList.toggle('active');
};
navbar.onclick = function () {
  humberger.classList.remove('active');
  navbar.classList.remove('active');
};

// humberger.addEventListener("click", () => {
//     humberger.classList.toggle("active");
//     navbar.classList.toggle("active");
// })
// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//     humberger.classList.remove("active");
//     navbar.classList.remove("active");
// }))
