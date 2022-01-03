import { Scene } from 'three';

export class SceneClass extends HTMLElement {
    constructor() {
        super();
        // const 
        console.log('3d scene constructor');
    }
    connectedCallback() {
        this.worldScene = new Scene();
        const renderer = document.querySelector('renderer-3d');
        setTimeout(() => {
            renderer.scene = this.worldScene;
        }, 100);
    }

    /* Scene */
    get scene() {
        return this.worldScene;
    }

    set scene(val) {
        this.worldScene = val;
    }

}

window.customElements.define('scene-3d', SceneClass);