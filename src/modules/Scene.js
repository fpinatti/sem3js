import { Scene } from 'three';

export class SceneClass extends HTMLElement {
    constructor() {
        super();
        // const 
        console.log('3d scene constructor');
    }
    connectedCallback() {
        let scene = new Scene();
        // console.log('connected', document.querySelectorAll('scene-3d'))
    }
}

window.customElements.define('scene-3d', SceneClass);