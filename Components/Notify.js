const Notify = {

    show: (name, age) => {
        const main = document.querySelector("main");
        const container = document.querySelector(".notify-container");

        const notification = document.createElement("div");
        notification.classList.add('notify');

        const icon = document.createElement("p");
        icon.className = 'notify-icon';
        icon.innerText = '🐱';
        
        const nameTxt = document.createElement("p");
        nameTxt.innerText = name;

        const ageTxt = document.createElement("p");
        ageTxt.innerText = age;

        notification.appendChild(icon);
        notification.appendChild(nameTxt);
        notification.appendChild(ageTxt);

        container.appendChild(notification);

        main.appendChild(container);
    }
}

export { Notify }