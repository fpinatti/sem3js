import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { createMaterial } from '../utils/materials';
export class ModelFile extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const loader = new GLTFLoader();
        const scene = document.querySelector('scene-3d');

        loader.load(this.getAttribute('url'), (model) => {
            model.scene.scale.set(
                this.getAttribute('scaleX'),
                this.getAttribute('scaleY'),
                this.getAttribute('scaleZ'),
            );
            model.scene.position.set(
                this.getAttribute('positionX'),
                this.getAttribute('positionY'),
                this.getAttribute('positionZ'),
            );
            scene.scene.add(model.scene);
        });
    }
    // createGeometry() {
    //     switch (this.getAttribute('type')) {
    //         case 'box':
    //             this.geometry = new THREE.BoxGeometry(
    //                 this.getAttribute('width'),
    //                 this.getAttribute('height'),
    //                 this.getAttribute('depth')
    //             );
    //             break;
    //         case 'plane':
    //             this.geometry = new THREE.PlaneGeometry(
    //                 this.getAttribute('width'),
    //                 this.getAttribute('height'),
    //                 this.getAttribute('widthSegments'),
    //                 this.getAttribute('heightSegments')
    //             );
    //             break;
    //         case 'sphere':
    //             this.geometry = new THREE.SphereGeometry(
    //                 this.getAttribute('radius'),
    //                 this.getAttribute('widthSegments'),
    //                 this.getAttribute('heightSegments')
    //             );
    //             break;
    //         default:
    //             this.geometry = new THREE.BoxGeometry();
    //     }
    // }
    // createMesh() {
    //     const scene = document.querySelector('scene-3d');
    //     this.mesh = new THREE.Mesh( this.geometry, this.material );
    //     this.mesh.castShadow = true;
    //     this.mesh.receiveShadow = true;
    //     // this.mesh.castShadow = this.getAttribute('castShadow');
    //     // this.mesh.receiveShadow = this.getAttribute('receiveShadow');
    //     scene.scene.add(this.mesh);
    // }
    // setProperties() {
    //     this.mesh.rotation.x = this.getAttribute('rotationX');
    //     this.mesh.rotation.y = this.getAttribute('rotationY');
    //     this.mesh.rotation.z = this.getAttribute('rotationZ');
    //     this.mesh.position.x = this.getAttribute('positionX');
    //     this.mesh.position.y = this.getAttribute('positionY');
    //     this.mesh.position.z = this.getAttribute('positionZ');
    // }

    // get instance() {
    //     return this.mesh;
    // }
}

window.customElements.define('model-file', ModelFile);