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
        const type = this.getAttribute('type');
        switch (type) {
            case 'directional':
                this.addDirectionalLight();
                break;
            case 'point':
                this.addPointLight();
                break;
            default:
                this.addAmbientLight();
        }
    }
    addAmbientLight() {
        const light = new THREE.AmbientLight( 0x404040 ); // soft white light
        light.intensity = 1;
        this.scene.scene.add(light);
    }
    addDirectionalLight() {
        const directionalLight = new THREE.DirectionalLight( 0xffffff);
        this.setCommonAttributes(directionalLight);
        this.scene.scene.add(directionalLight);
        // const helper = new THREE.CameraHelper(directionalLight.shadow.camera);
        // this.scene.scene.add(helper);
    }
    addPointLight() {
        const pointLight = new THREE.PointLight( 0xffffff);
        this.setCommonAttributes(pointLight);
        this.scene.scene.add(pointLight);
    }
    setCommonAttributes(light) {
        light.castShadow = this.getAttribute('castShadow');
        light.intensity = this.getAttribute('intensity');
        light.position.x = this.getAttribute('positionX');
        light.position.y = this.getAttribute('positionY');
        light.position.z = this.getAttribute('positionZ');
    }
}

window.customElements.define('light-3d', Light);