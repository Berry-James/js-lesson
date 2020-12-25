import anime from '../node_modules/animejs/lib/anime.es.js';

const Notify = {

    // SHOW NOTIFICATION FUNCTION
    show: (name, age) => {
        // get main container and notification container
        const main = document.querySelector("main");
        const container = document.querySelector(".notify-container");

        // create notification item and assign class
        const notification = document.createElement("div");
        notification.classList.add('notify');

        // create icon and assign class
        const icon = document.createElement("p");
        icon.className = 'notify-icon';
        icon.innerText = '🐱';
        
        // create name tag, append name data
        const nameTxt = document.createElement("p");
        nameTxt.innerText = name;

        // create age tag, append age data
        const ageTxt = document.createElement("p");
        ageTxt.innerText = age;

        // append all
        notification.appendChild(icon);
        notification.appendChild(nameTxt);
        notification.appendChild(ageTxt);

        // append notification to container
        container.appendChild(notification);

        // append container to main div
        main.appendChild(container);

        // animate
        anime({
            targets: notification,
            keyframes: [
                { translateX: '-50px', opacity: 0 },
                { translateX: 0, opacity: 1, duration: 3000 },
                { translateX: '-100px', opacity: 0 }
            ],
            complete: () => {
                Notify.remove();
            }
        });
    },
    
    // REMOVE NOTIFICATION FUNCTION
    remove: () => {
        const notification = document.querySelector(".notify");
        const container = document.querySelector(".notify-container");

        container.removeChild(notification);
    }
}

export { Notify }