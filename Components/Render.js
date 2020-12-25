import { Notify } from './Notify.js';
 
const Render = {

    // RENDER CHARACTER PROFILE FUNCTION
    character: (data) => {

        // create character div container
        const character = document.createElement("div");
        character.className = "character-container";

        // create character name and set innerText to .name
        character.name = document.createElement("h2");
        character.name.className = 'character-name';
        // capitalise first letter of name
        const capitalise = (word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        };
        character.name.innerText = 'Name: ' + capitalise(data.name);

        // create character age and set innerText to .age
        character.age = document.createElement("h4");
        character.age.className = 'character-age';
        character.age.innerText = 'Age: ' + data.age;

        // create character image and set src to .image
        character.image = document.createElement("img");
        character.image.className = 'character-image';
        character.image.setAttribute("src", data.image);

        // create button and set innerText to .name
        const btn = document.createElement('button');
        btn.classList.add("character-button", "button");
        btn.innerText = `About ${data.name}`;

        // create link button to profile
        const linkBtn = document.createElement('a');
        linkBtn.classList.add("is-primary", "button");
        linkBtn.innerText = 'View Profile';
        linkBtn.setAttribute("href", data.link);

        // assign notify trigger to btn
        btn.addEventListener("click", () => {
            Notify.show(data.name, data.age);
        });

        // append all
        character.appendChild(character.name);
        character.appendChild(character.age);
/*         character.appendChild(character.image);
 */        character.appendChild(btn);
        character.appendChild(linkBtn);

        // ret
        return(character);
    }

}

export { Render }