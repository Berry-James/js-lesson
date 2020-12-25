// IMPORTS
import { Render } from './Components/Render.js';
import { Modal } from './Components/Modal.js';
import Scroll from './Components/Scroll.js';
import anime from './node_modules/animejs/lib/anime.es.js';

// DOM NAVIGATION
document.querySelector("li").style.color = 'red';
document.querySelector(".list-item").style.color = 'blue';
document.querySelector("#list-item").style.color = 'green';
document.querySelector(".wrapper-div").querySelector("li").style.color = 'brown';

// INIT SCROLL CHECKER
let scrollCheck = new Scroll();
scrollCheck.init();

// ABOUT MODAL
const aboutBtn = document.querySelector("#about-btn");
aboutBtn.addEventListener("click", () => {
    Modal.show('About', '🐈', 'This is a cool site about the lasagna cat OKAY.', 'Dialog');
});

// FORM EXAMPLE
const form = document.querySelector("#my-form");
const input = document.querySelector("#text-enter");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    Modal.show('You just submitted...', '😎', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus velit eros, aliquet ac pharetra non, accumsan nec sapien. Donec in tortor sodales est sagittis pharetra. Ut vehicula risus eu fringilla viverra. Phasellus varius sodales tellus. Aliquam a posuere diam. Aliquam euismod eros magna, consectetur commodo sem commodo non. Nam vulputate interdum tempor. Duis vitae mauris vitae magna rhoncus malesuada hendrerit eget erat. In nulla nulla, ullamcorper eu nibh id, dapibus finibus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Dialog');
});

// RENDER EXAMPLE
// get container
const charContainer = document.querySelector("#my-data");
fetch('./assets/garfield.json')
.then(res => res.json())
.then(data => data.forEach(character => {
    let charObj = Render.character(character);
    charContainer.appendChild(charObj);
}));

// MODAL EXAMPLE
// Modal Button
const modalBtn = document.querySelector("#modal-open-btn");
modalBtn.addEventListener("click", () => {
    Modal.show('hello', 'icon', 'brohr');
});