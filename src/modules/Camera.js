import * as THREE from 'three';

export class Camera extends HTMLElement {
    constructor() {
        super();
        // const 
        console.log('3d camera constructor');
    }
    connectedCallback() {
        // console.log('connected', document.querySelectorAll('scene-3d'))
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        camera.position.z = 5;
    }
}

window.customElements.define('camera-3d', Camera);