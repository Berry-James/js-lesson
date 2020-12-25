import { App } from './App.js';
import Mustache from '../node_modules/mustache/mustache.mjs';
import anime from '../node_modules/animejs/lib/anime.es.js';

const Modal = {

    // SHOW MODAL FUNCTION
    show: (title, icon, body, type) => {

        // set data from parsed params
        const data = {
            "title": title,
            "icon": icon,
            "body": body
        };

        // pull template inner
        const template = document.querySelector("#modal-template").innerHTML;

        // create modal container
        const modal = document.createElement("div");
        modal.classList.add("modal-full");

        // create modal background
        const bg = document.createElement("div");
        bg.classList.add('modal-bg');

        // render content from template using mustache and apply to modal div
        const modalContent = Mustache.render(template, data);
        modal.innerHTML = modalContent;

        // append modal div to root
        App.rootEL.appendChild(modal);

        // animate in modal main content
        anime({
            targets: modal,
            keyframes: [
                { opacity: 0.5, top: '-15px' },
                { opacity: 1, top: 0 }
            ],
            easing: 'linear',
            duration: 350,
            complete:() => {
                // append modal background on completion of anim
                modal.appendChild(bg);
            }
        });

        // animate in modal background
        anime({
            targets: bg,
            opacity: 1,
            easing: 'linear',
            duration: 700
        });

        // add listener to close cross
        const modalCloseBtn = document.querySelector(".modal-close-btn");
        modalCloseBtn.addEventListener("click", () => {
            Modal.remove();
        });

        // add remove() listener to backdrop
        const modalBg = document.querySelector(".modal-bg");
        modalBg.addEventListener("click", () => {
            Modal.remove();
        });

        // set buttons according to type
        const btnContainer = document.querySelector(".modal-controls");
        // set button types
        const buttons = [
            { "name": "close", "text": "Close", "class": ["button", "close-btn", "is-danger"] },
            { "name": "confirm", "text": "Confirm", "class": ["button", "confirm-btn", "is-success"] },
        ];

        // loop through buttons and create based on data
        buttons.forEach(button => {
            const btn = document.createElement('button');
            btn.innerText = button.text;
            button.class.forEach(className => {
                btn.classList.add(className);
            });
            btnContainer.appendChild(btn);
            btn.addEventListener("click", () => {
                Modal.remove();
            })
        });

        // adjust button state depending on parsed modal type
        if (type == 'profile') {
            
        } else if (type == 'Dialog') {
            btnContainer.removeChild(document.querySelector(".confirm-btn"));
        }
    },

    // REMOVE MODAL FUNCTION
    remove: () => {
        // get modal and remove from root
        const modal = document.querySelector(".modal-full");
        App.rootEL.removeChild(modal);
    }
}

export { Modal }