import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

console.log("HII")

//Renderer
let renderContainer = $("#canvas-container")[0];
const w = renderContainer.offsetWidth;
const h = renderContainer.offsetHeight;
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(w,h);
renderContainer.appendChild(renderer.domElement);

//Camera
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

//Scene
const scene = new THREE.Scene();

//====================================================

//Object
const geo = new THREE.IcosahedronGeometry(.01, 2);
const mat = new THREE.MeshStandardMaterial({
    color: 0x99ff,
    flatShading: true
});
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const wireMat = new THREE.MeshStandardMaterial({
    color: 0x000ff,
    wireframe: true,
})
const wireMesh = new THREE.Mesh(geo, wireMat)
wireMesh.scale.setScalar(1.1)
//mesh.add(wireMesh);

//Lighting 
const sunlight = new THREE.PointLight(0xfffff, 10, 0);
sunlight.position.set(3,0,1);
scene.add(sunlight);

const amblight = new THREE.AmbientLight(0x404040);
scene.add(amblight);

//Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

//Experiement IMPORTING LOADING
const loader = new GLTFLoader();

loader.load( './room.glb', function ( gltf ) {
    console.log(gltf)
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

//Animate and Render
function animate(t=0) {
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.005;
    renderer.render(scene, camera);
    controls.update();
}

animate();