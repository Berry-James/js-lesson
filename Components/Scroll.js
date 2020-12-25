export default class Scroll {

    // construct
    constructor() {
        // get navbar
        this.nav = document.querySelector(".nav");
    };

    // SCROLL METHOD
    init() {
        // if nav already has background class active, return
        if(this.nav.classList.contains('has-background')) {
            return;
        } else if(!this.nav.classList.contains('has-background')){
            // add scroll listener to window
            window.addEventListener("scroll", () => {
                // if scroll Y pos is greater or equal to 1, add bg class : else remove background class

                if (window.scrollY >= 1) {
                    this.nav.classList.add('has-background');
                    return;
                } else {
                    this.nav.classList.remove('has-background');
                    return;
                }
                window.scrollY >= 1 ? this.nav.classList.add("has-background") : this.nav.classList.remove("has-background");
                console.log(window.scrollY);
                return;
            });
        };
    };

}

