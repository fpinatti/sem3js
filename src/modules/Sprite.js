import * as THREE from 'three';
import { createMaterial } from '../utils/materials';

export class SpriteClass extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.sprite = null;
        this.material = createMaterial({
            type: 'sprite',
            color: this.getAttribute('color') || 0xffffff,
            map: this.getAttribute('map'),
            gradientMap: this.getAttribute('gradientMap'),
            side: this.getAttribute('doubleside') ? THREE.DoubleSide : 0,
            matcap: this.getAttribute('matcap'),
        });
        // this.createGeometry();
        
        const scene = document.querySelector('scene-3d');
        console.log(this.material);
        this.sprite = new THREE.Sprite( this.material );
        scene.scene.add(this.sprite);

        this.setProperties();
    }

    setProperties() {
        this.sprite.rotation.x = this.getAttribute('rotationX');
        this.sprite.rotation.y = this.getAttribute('rotationY');
        this.sprite.rotation.z = this.getAttribute('rotationZ');
        this.sprite.position.x = this.getAttribute('positionX');
        this.sprite.position.y = this.getAttribute('positionY');
        this.sprite.position.z = this.getAttribute('positionZ');
        this.sprite.scale.x = this.getAttribute('scaleX');
        this.sprite.scale.y = this.getAttribute('scaleY');
        this.sprite.scale.z = this.getAttribute('scaleZ');
    }

}

window.customElements.define('sprite-3d', SpriteClass);