// mobile portfolio menu

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

// -------------------------------------------------------------------------------

// the popup modal

const modalElemnt = document.querySelector('.modal-popup');

function creatCard([crossbtn, headercard, CANOclass, Icon1, Devclass, Icon2, Yearclass, imageProjectCard, textExplain, Lang1, Lang2, Lang3, Lang4, Lang5, Lang6, btnbefore, Icon3, btnafter, Icon4, blancklink, githublink, imageProjectCardmobile]) {
  const code = `
    <div class="popup-box">
      <span class="close-btn">${crossbtn}</span>
      <h2>${headercard}</h2>
      <div class="frame">
        <span class="CANO">${CANOclass}</span>
        <span><img src="${Icon1}" alt="circul icon" />${Devclass}</span>
        <span><img src="${Icon2}" alt="circul icon" />${Yearclass}</span>
      </div>
      <img src="${imageProjectCard}" alt="snappic1" class="img-popup">
      <img src="${imageProjectCardmobile}" alt="snappic1" class="img-popup-mobile">
      <div class="second-part">
        <p>${textExplain}</p>
        <div class="third-part">
          <ul>
            <li>${Lang1}</li>
            <li>${Lang2}</li>
            <li>${Lang3}</li>
            <li class="seconf-line">${Lang4}</li>
            <li class="seconf-line">${Lang5}</li>
            <li class="seconf-line">${Lang6}</li>
          </ul>
          <hr />
          <div class="button-class">
            <a href="${blancklink}" class="bb">${btnbefore} <img src="${Icon3}" alt=""></a>
            <a href="${githublink}" class="bb">${btnafter} <img src="${Icon4}" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  `;
  modalElemnt.innerHTML += code;

  const popupBox = modalElemnt.querySelector('.popup-box');
  const closeBtn = popupBox.querySelector('.close-btn');

  closeBtn.addEventListener('click', () => {
    popupBox.remove();
    modalElemnt.style.display = 'none';
  });
}

const cardpopup1 = ['&#10006',
  'Tonic',
  'CANOPY',
  './image2/Counter.svg',
  ' Back End Dev',
  './image2/Counter.svg',
  ' 2015',
  './imgmodal/Snapshoot Portfolio1.png',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'html',
  'css',
  'javaScript',
  'github',
  'ruby',
  'bootdtraps',
  'See live',
  './imgmodal/Icon.png',
  'See Source',
  './imgmodal/Vector.png',
  '#',
  'https://github.com/melybee-07',
  './imgmodal/Snapshoot Portfolio mobile (2).png',
];

const cardpopup2 = ['&#10006',
  'Tonic',
  'CANOPY',
  './image2/Counter.svg',
  ' Back End Dev',
  './image2/Counter.svg',
  ' 2015',
  './imgmodal/Snapshoot Portfolio2.png',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'html',
  'css',
  'javaScript',
  'github',
  'ruby',
  'bootdtraps',
  'See live',
  './imgmodal/Icon.png',
  'See Source',
  './imgmodal/Vector.png',
  '#',
  'https://github.com/melybee-07',
  './imgmodal/Snapshoot Portfolio mobile (3).png',
];

const cardpopup3 = ['&#10006',
  'Tonic',
  'CANOPY',
  './image2/Counter.svg',
  ' Back End Dev',
  './image2/Counter.svg',
  ' 2015',
  './imgmodal/Snapshoot Portfolio3.png',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'html',
  'css',
  'javaScript',
  'github',
  'ruby',
  'bootdtraps',
  'See live',
  './imgmodal/Icon.png',
  'See Source',
  './imgmodal/Vector.png',
  '#',
  'https://github.com/melybee-07',
  './imgmodal/Snapshoot Portfolio mobile.png',
];

const cardpopup4 = ['&#10006',
  'Tonic',
  'CANOPY',
  './image2/Counter.svg',
  ' Back End Dev',
  './image2/Counter.svg',
  ' 2015',
  './imgmodal/Snapshoot Portfolio4.png',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'html',
  'css',
  'javaScript',
  'github',
  'ruby',
  'bootdtraps',
  'See live',
  './imgmodal/Icon.png',
  'See Source',
  './imgmodal/Vector.png',
  '#',
  'https://github.com/melybee-07',
  './imgmodal/Snapshoot Portfolio mobile (1).png',
];

const btnClick = document.querySelector('.bbCard3');
btnClick.addEventListener('click', () => {
  modalElemnt.style.display = 'block';
  creatCard(cardpopup1);
});

const btnClick1 = document.querySelector('.bbCard4');
btnClick1.addEventListener('click', () => {
  modalElemnt.style.display = 'block';
  creatCard(cardpopup2);
});

const btnClick2 = document.querySelector('.bbCard1');
btnClick2.addEventListener('click', () => {
  modalElemnt.style.display = 'block';
  creatCard(cardpopup3);
});

const btnClick3 = document.querySelector('.bbCard2');
btnClick3.addEventListener('click', () => {
  modalElemnt.style.display = 'block';
  creatCard(cardpopup4);
});

// -------------------------------------------------------------------------------

// validation form

const formValidation = document.getElementById('myForm');
const emailValidation = document.getElementById('user-id-email');
const divValidation = document.getElementById('error-div');

formValidation.addEventListener('submit', (event) => {
  event.preventDefault();

  const EmailVal = emailValidation.value.trim().toLowerCase();

  if (EmailVal !== emailValidation.value) {
    divValidation.innerText = 'Email must be in lower case *';
    divValidation.style.display = 'block';
    return;
  }

  divValidation.innerText = '';
  divValidation.style.display = 'none';

  // submit the form
  formValidation.submit();
});