import { Notify } from './Notify.js';
 
const Render = {

    character: (data) => {
        const character = document.createElement("div");
        character.className = "character-container";
        character.name = document.createElement("h2");
        character.name.className = 'character-name';
        character.name.innerText = 'Name: ' + data.name;

        character.age = document.createElement("h4");
        character.age.className = 'character-age';
        character.age.innerText = 'Age: ' + data.age;

        character.image = document.createElement("img");
        character.image.className = 'character-image';
        character.image.setAttribute("src", data.image);

        const btn = document.createElement('button');
        btn.classList.add("character-button", "button");
        btn.innerText = "Notify";
        btn.addEventListener("click", () => {
            Notify.show(data.name, data.age);
        })

        character.appendChild(character.name);
        character.appendChild(character.age);
        character.appendChild(character.image);
        character.appendChild(btn);

        return(character);
    }

}

export { Render }