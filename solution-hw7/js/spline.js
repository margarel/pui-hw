import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';

// camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 70, 100000);
camera.position.set(361.88, 450, 700); //(361.88, 297.08, 398)
camera.quaternion.setFromEuler(new THREE.Euler(-0.49, 0.68, 0.32));

// scene
const scene = new THREE.Scene();

// spline scene
const loader = new SplineLoader();
loader.load(
  'https://prod.spline.design/DojS3xMNsV4aGkWh/scene.splinecode',
  (splineScene) => {
    scene.add(splineScene);
  }
);

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);

// spline on top of the page
const container = document.getElementById("spline");
container.appendChild(renderer.domElement);

// scene settings
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

scene.background = new THREE.Color('#141419');
renderer.setClearAlpha(1);

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.125;

// added code to disable zoom
controls.enableZoom = false;

window.addEventListener("resize", onWindowResize);

function onWindowResize() {
  const aspectRatio = window.innerWidth/window.innerHeight;
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  // Update renderer size
  renderer.setSize(newWidth, newHeight);

  // Update camera aspect ratio
  camera.aspect = aspectRatio;
  camera.updateProjectionMatrix();
}

function animate(time) {
  controls.update();
  renderer.render(scene, camera);
}