import * as THREE from 'three';
export class Model extends HTMLElement {
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
        const color = this.getAttribute('color') || 0xffffff;
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial( { color } );
        const cube = new THREE.Mesh( geometry, material );
        cube.rotation.x = this.getAttribute('rotationX');
        cube.rotation.y = this.getAttribute('rotationY');
        cube.rotation.z = this.getAttribute('rotationZ');
        cube.position.x = this.getAttribute('positionX');
        cube.position.y = this.getAttribute('positionY');
        cube.position.z = this.getAttribute('positionZ');
        scene.scene.add(cube);
    }
}

window.customElements.define('model-3d', Model);