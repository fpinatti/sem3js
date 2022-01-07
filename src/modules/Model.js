import * as THREE from 'three';
import { loadTexture } from '../utils/utils';
export class Model extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.mesh = null;
        this.createMaterial();
        this.createGeometry();
        this.createMesh();
        this.setProperties();
    }
    createMaterial() {
        const color = this.getAttribute('color') || 0xffffff;
        this.material = new THREE.MeshStandardMaterial( { 
            color, 
        } );

        const map = this.getAttribute('map');
        if (map) {
            loadTexture(map)
                .then((texture) => {
                    this.material.map = texture;
                    this.material.needsUpdate = true;
                });
        }
    }
    createGeometry() {
        switch (this.getAttribute('type')) {
            case 'box':
                const width = Number(this.getAttribute('width'));
                const height = Number(this.getAttribute('height'));
                const depth = Number(this.getAttribute('depth'));
                this.geometry = new THREE.BoxGeometry(width, height, depth);
                break;
            case 'sphere':
                const radius = Number(this.getAttribute('radius'));
                const heightSegments = this.getAttribute('heightSegments');
                const widthSegments = this.getAttribute('widthSegments');
                this.geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
                break;
            default:
                this.geometry = new THREE.BoxGeometry();
        }
    }
    createMesh() {
        const scene = document.querySelector('scene-3d');
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        scene.scene.add(this.mesh);
    }
    setProperties() {
        this.mesh.rotation.x = this.getAttribute('rotationX');
        this.mesh.rotation.y = this.getAttribute('rotationY');
        this.mesh.rotation.z = this.getAttribute('rotationZ');
        this.mesh.position.x = this.getAttribute('positionX');
        this.mesh.position.y = this.getAttribute('positionY');
        this.mesh.position.z = this.getAttribute('positionZ');
    }
}

window.customElements.define('model-3d', Model);