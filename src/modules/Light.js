export class Light extends HTMLElement {
    constructor() {
        super();
        // const 
        console.log('3d light constructor');
    }
    connectedCallback() {
        // console.log('connected', document.querySelectorAll('scene-3d'))
    }
}

window.customElements.define('light-3d', Light);