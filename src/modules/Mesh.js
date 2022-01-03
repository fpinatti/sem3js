import * as THREE from 'three';
export class Mesh extends HTMLElement {
    constructor() {
        super();
        // const 
        // console.log('3d mesh constructor');
    }
    connectedCallback() {
        // console.log('connected', document.querySelectorAll('scene-3d'))
        this.createBox();
    }
    createBox() {
        const scene = document.querySelector('scene-3d');
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        cube.rotation.x = this.getAttribute('rotationX');
        cube.rotation.y = this.getAttribute('rotationY');
        cube.rotation.z = this.getAttribute('rotationZ');
        scene.scene.add(cube);
    }
}

window.customElements.define('mesh-3d', Mesh);