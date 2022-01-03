import * as THREE from 'three';
export class Light extends HTMLElement {
    constructor() {
        super();
        this.scene = null;
        // const 
        // console.log('3d light constructor');
    }
    connectedCallback() {
        this.scene = document.querySelector('scene-3d');
        this.addAmbientLight();
        this.addDirectionalLight();
        // console.log('connected', document.querySelectorAll('scene-3d'))
    }
    addAmbientLight() {
        const light = new THREE.AmbientLight( 0x404040 ); // soft white light
        this.scene.scene.add(light);
    }
    addDirectionalLight() {
        const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        directionalLight.position.x = this.getAttribute('positionX');
        directionalLight.position.y = this.getAttribute('positionY');
        directionalLight.position.z = this.getAttribute('positionZ');
        this.scene.scene.add(directionalLight);
    }
}

window.customElements.define('light-3d', Light);