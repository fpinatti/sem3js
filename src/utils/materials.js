import * as THREE from 'three';
import { loadTexture } from '../utils/utils';

const createMaterial = (config) => {
    let mat = null;
    switch (config.type) {
        case 'basic':
            mat = new THREE.MeshBasicMaterial();
            setMapCapTexture(mat, config);
            break;
        case 'toon':
            mat = new THREE.MeshToonMaterial();
            setGradientTexture(mat, config);
            break;
        case 'matcap':
            mat = new THREE.MeshMatcapMaterial();
            setMapCapTexture(mat, config);
            break;
        default:
            mat = new THREE.MeshStandardMaterial();
            setMapTexture(mat, config);
        }
    mat.color = new THREE.Color(config.color);
    mat.side = config.side;
    return mat;
}

const setMapTexture = (material, config) => {
    const map = config.map;
    if (map) {
        loadTexture(map)
            .then((texture) => {
                material.map = texture;
                material.needsUpdate = true;
            });
    }
}

const setMapCapTexture = (material, config) => {
    const matcap = config.matcap;
    if (matcap) {
        loadTexture(matcap)
            .then((texture) => {
                material.matcap = texture;
                material.magFilter = THREE.NearestFilter;
                material.needsUpdate = true;
            });
    }
}

const setGradientTexture = (material, config) => {
    const gradientMap = config.gradientMap;
    if (gradientMap) {
        loadTexture(gradientMap)
            .then((texture) => {
                material.gradientMap = texture;
                material.magFilter = THREE.NearestFilter;
                material.needsUpdate = true;
            });
    }
}

export {
    createMaterial
}