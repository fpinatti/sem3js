export class Mesh extends HTMLElement {
    constructor() {
        super();
        // const 
        console.log('3d mesh constructor');
    }
    connectedCallback() {
        // console.log('connected', document.querySelectorAll('scene-3d'))
    }
    createBox() {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        // scene.add( cube );
    }
}

window.customElements.define('mesh-3d', Mesh);