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

// shit that I added because it's at the fucking bottom
const container = document.getElementById("spline");
container.appendChild(renderer.domElement);

// commented out original code
// document.body.appendChild(renderer.domElement);

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

// commented out original code
// window.addEventListener('resize', onWindowResize);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// added code because wtf
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
// added code ends here but like wtf?

function animate(time) {
  controls.update();
  renderer.render(scene, camera);
}

// added code
// `{passive: false}` ensures that the event listener can prevent the default behavior, allowing the webpage to handle scroll events normally
// renderer.domElement.addEventListener("wheel", (event) => {
//   event.preventDefault();
// }, {passive: false});