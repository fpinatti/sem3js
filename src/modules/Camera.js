import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class Camera extends HTMLElement {
    constructor() {
        super();
        this.controls = null;
        this.worldCamera = null;
    }
    connectedCallback() {
        const renderer = document.querySelector('renderer-3d');
        this.worldCamera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        setTimeout(() => {
            renderer.camera = this.worldCamera;
            this.controls = new OrbitControls(this.worldCamera, renderer.renderer.domElement);
        }, 100);

        this.worldCamera.position.z = 5;
    }

    /* Camera */
    get camera() {
        return this.worldCamera;
    }

    set camera(val) {
        this.worldCamera = val;
    }
}

window.customElements.define('camera-3d', Camera);