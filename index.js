// IMPORTS
import { Render } from './Components/Render.js';

const input = document.querySelector("#my-input");
const form = document.querySelector("#my-form");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(`you just submitted some cool stuff`)
})

// Render characters

// get container
const charContainer = document.querySelector("#my-data");
fetch('./assets/garfield.json')
.then(res => res.json())
.then(data => data.forEach(character => {
    let charObj = Render.character(character);
    charContainer.appendChild(charObj)
}))
