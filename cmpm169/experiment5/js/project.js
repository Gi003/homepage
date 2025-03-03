import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

console.log("HII")

//Renderer-----------------------------------------------------------------
let renderContainer = $("#canvas-container")[0];
const w = renderContainer.offsetWidth;
const h = renderContainer.offsetHeight;
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(w,h);
renderContainer.appendChild(renderer.domElement);

//Camera-------------------------------------------------------------------
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

//Scene--------------------------------------------------------------------
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

//====================================================
function loadTexture(url) {
    return new Promise((resolve, reject) => {
        const textureloader = new THREE.TextureLoader();
        textureloader.load(
            url,
            (texture) => {
                texture.magFilter = THREE.NearestFilter;
                texture.colorSpace = THREE.SRGBColorSpace; // Corrects colors
                resolve(texture)    // ✅ Resolve when texture loads
            },
            undefined,
            (error) => reject(error)         // ❌ Reject on error
        );
    });
}
//Objects-----Geo + Material = Mesh------------------------------------------------
const geo = new THREE.IcosahedronGeometry(0.5, 1);

const wireMat = new THREE.MeshStandardMaterial({
    color: 0x000ff,
    wireframe: true,
})
const wireMesh = new THREE.Mesh(geo, wireMat)
wireMesh.scale.setScalar(2)
scene.add(wireMesh);

const texture = await loadTexture('./img/moma.jpg');
const imageWidth = texture.image.width;
const imageHeight = texture.image.height;
const aspectRatio = imageWidth / imageHeight;

const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
const sprite = new THREE.Sprite(spriteMaterial);
sprite.scale.set(1 * aspectRatio, 1,1);
scene.add(sprite);

//Lighting Objects----------------------------------------------------------
const sunlight = new THREE.PointLight(0xfffff, 10, 0);
sunlight.position.set(3,0,1);
scene.add(sunlight);

const amblight = new THREE.AmbientLight(0x404040);
scene.add(amblight);

//Controls------------------------------------------------------------------
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

//Animate and Render+++++++++++++++++++++++++++++++++++++++
function animate(t=0) {
    requestAnimationFrame(animate);
    wireMesh.rotation.y += 0.005;
    wireMesh.updateMatrixWorld(true);

    const positionAttribute = wireMesh.geometry.attributes.position;
    const vertices = [];
    for (let i = 0; i < positionAttribute.count; i++) {
        const vertex = new THREE.Vector3();
        vertex.fromBufferAttribute(positionAttribute, i);
        vertices.push(vertex);
    }

    console.log(vertices.length)
    sprite.position.copy(vertices[0]);

    renderer.render(scene, camera);
    controls.update();
}

animate();