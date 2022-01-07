import * as THREE from 'three';

const loader = new THREE.TextureLoader();
let currentCamera = null;

const loadTexture = (url) => {
    return new Promise(function(resolve, reject) {
        loader.load(
            url,
            (texture) => {
                resolve(texture);
            }
        )
    });
}

// get camera = () => {
//     return currentCamera;
// }

// set camera = (camera) => {
//     currentCamera = camera;
// }

export {
    loadTexture
}