import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class Camera extends HTMLElement {
    constructor() {
        super();
        this.controls = null;
        // const 
        // console.log('3d camera constructor');
    }
    connectedCallback() {
        const renderer = document.querySelector('renderer-3d');
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        setTimeout(() => {
            renderer.camera = camera;
            this.controls = new OrbitControls( camera, renderer.renderer.domElement );
        }, 100);

        camera.position.z = 5;
    }
}

window.customElements.define('camera-3d', Camera);