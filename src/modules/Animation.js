import gsap from "gsap";
// import * as THREE from 'three';

export class Animation extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const target = this.getAttribute('target');
        const targetObject = document.querySelector(`*[id=${target}]`);

        switch (this.getAttribute('type')) {
            case 'rotationY':
                gsap.to(targetObject.instance.rotation, {
                    duration: this.getAttribute('duration'),
                    y: Math.PI * 2,
                    repeat: -1,
                    ease: 'linear',
                });
                break;
        }

    }

    // get camera() {
    //     return this.worldCamera;
    // }

    // set camera(val) {
    //     this.worldCamera = val;
    // }
}

window.customElements.define('animation-util', Animation);