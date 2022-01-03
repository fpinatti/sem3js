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
        window.addEventListener('DOMContentLoaded', (event) => {
            console.log('DOM fully loaded and parsed');
            this.waitRequiredElements();
        });
    }
    waitRequiredElements() {
        const scene = document.querySelector('scene-3d')
        const renderer = document.querySelector('renderer-3d')

        console.log('connected1', renderer)

        const promises = [scene, renderer].map(socialButton => {
            return customElements.whenDefined(socialButton.localName);
        });

        Promise.all(promises).then(() => {
            // All social-button children are ready.
            console.log('AAAAAAA');
            renderer.setAttribute('scene', scene);
            // renderer.setRenderer();
        });
    }
}

window.customElements.define('world-3d', World);