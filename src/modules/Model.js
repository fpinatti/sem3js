import * as THREE from 'three';
import { createMaterial } from '../utils/materials';
export class Model extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.mesh = null;
        this.material = createMaterial({
            type: this.getAttribute('material'),
            color: this.getAttribute('color') || 0xffffff,
            map: this.getAttribute('map'),
            gradientMap: this.getAttribute('gradientMap'),
            side: this.getAttribute('doubleside') ? THREE.DoubleSide : 0,
            matcap: this.getAttribute('matcap'),
        });
        this.createGeometry();
        this.createMesh();
        this.setProperties();
    }
    createGeometry() {
        switch (this.getAttribute('type')) {
            case 'box':
                this.geometry = new THREE.BoxGeometry(
                    this.getAttribute('width'),
                    this.getAttribute('height'),
                    this.getAttribute('depth')
                );
                break;
            case 'plane':
                this.geometry = new THREE.PlaneGeometry(
                    this.getAttribute('width'),
                    this.getAttribute('height'),
                    this.getAttribute('widthSegments'),
                    this.getAttribute('heightSegments')
                );
                break;
            case 'sphere':
                this.geometry = new THREE.SphereGeometry(
                    this.getAttribute('radius'),
                    this.getAttribute('widthSegments'),
                    this.getAttribute('heightSegments')
                );
                break;
            default:
                this.geometry = new THREE.BoxGeometry();
        }
    }
    createMesh() {
        const scene = document.querySelector('scene-3d');
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        // this.mesh.castShadow = this.getAttribute('castShadow');
        // this.mesh.receiveShadow = this.getAttribute('receiveShadow');
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

    get instance() {
        return this.mesh;
    }
}

window.customElements.define('model-3d', Model);