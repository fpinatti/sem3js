import * as THREE from 'three';

export class Renderer extends HTMLElement {
    static get observedAttributes() { 
        return ['scene', 'camera']; 
    }

    constructor() {
        super();
        this.renderer = null;
        this.camera = null;
        this.scene = null;
        console.log('3d renderer constructor');
    }
    connectedCallback() {
        // console.log('connected', document.querySelectorAll('scene-3d'))
    }
    setRenderer() {
        console.log('set renderer called');
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        const world = document.querySelector('world-3d');
        world.appendChild( this.renderer.domElement );
        // this.tick();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Custom square element attributes changed.');
        console.log('attributes changed');
    }
    
    // tick() {
    //     requestAnimationFrame( tick );
    //     renderer.render( scene, camera );
    // };

}

window.customElements.define('renderer-3d', Renderer);