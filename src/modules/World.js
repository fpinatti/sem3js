export class World extends HTMLElement {
    constructor() {
        super();
        // const 
        console.log('3d world constructor');
    }
    connectedCallback() {
        this.waitDOMLoad();

    }
    waitDOMLoad() {
        window.addEventListener('DOMContentLoaded', () => {
            console.log('DOM fully loaded and parsed');
        });
    }
}

window.customElements.define('world-3d', World);