import "./style.css";
import * as THREE from "three";

const scene = new THREE.Scene();
// console.log(scene);

// red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// the above color is a three.js color class (0x replaces #)
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// camera
const sizes = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 2;
camera.position.y = 1;
scene.add(camera);

// renderer
const canvas = document.querySelector("canvas.webgl");
console.log(canvas);
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
