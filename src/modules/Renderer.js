import * as THREE from 'three';

export class Renderer extends HTMLElement {
    // static get observedAttributes() { 
    //     return ['scene', 'camera']; 
    // }

    constructor() {
        super();
        this.worldRenderer = null;
        this.worldCamera = null;
        this.worldScene = null;
        console.log('3d renderer constructor');
    }
    connectedCallback() {
        // console.log('connected', document.querySelectorAll('scene-3d'))
    }
    async setRenderer() {
        console.log('set renderer called');
        this.worldRenderer = new THREE.WebGLRenderer();
        this.worldRenderer.setSize( window.innerWidth, window.innerHeight );
        const world = document.querySelector('world-3d');
        await world.appendChild( this.worldRenderer.domElement );
        this.tick();
    }

    // attributeChangedCallback(attribute, oldValue, newValue) {
    //     this[attribute] = JSON.parse(newValue);
    //     this.checkRequiredAttributes();
    // }
    
    /* Scene */
    get scene() {
        return this.worldScene;
    }

    set scene(val) {
        this.worldScene = val;
        this.checkRequiredAttributes();
    }

    /* Camera */
    get camera() {
        return this.worldCamera;
    }

    set camera(val) {
        this.worldCamera = val;
        this.checkRequiredAttributes();
    }

    /* Renderer */
    get renderer() {
        return this.worldRenderer;
    }

    set renderer(val) {
        this.worldRenderer = val;
    }

    checkRequiredAttributes() {
        if (this.worldScene && this.worldCamera) {
            this.setRenderer();
        }
    }
    
    tick() {
        requestAnimationFrame(() => {
            this.tick();
        });
        // console.log(JSON.stringify(this.camera));
        this.renderer.render(this.worldScene, this.worldCamera);
    };

}

window.customElements.define('renderer-3d', Renderer);