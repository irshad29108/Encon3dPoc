import * as THREE from "three";
export function getScene() {
  const scene = new THREE.Scene();
  scene.matrixAutoUpdate = false;
  return scene;
}
