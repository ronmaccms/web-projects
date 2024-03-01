<template>
  <div id="viewport">
    <!-- To this element we will append our 3d scene. -->
    <div id="threejs-container"></div>
  </div>
</template>

<script setup>
// Imports;
import { onMounted, onUpdated, computed } from 'vue'
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// Props are inputs to the component, the values we want to control from outside of components
// You can think of it as similar inputs that we define to hops definition -> 
// We want to access them from outside of the component
const props = defineProps(['size'])

// Three js objects
let renderer, camera, scene,  controls, geometry;

let width = 600;
let height = 700;

function init() {
  // https://threejs.org/docs/#api/en/renderers/WebGLRenderer
  // This object will render our scene
  renderer = new THREE.WebGLRenderer();

  // Rendered needs to know what's the size of the scene. 
  renderer.setSize(width, height);

  // We are taking element defined in <template> and appending our render to it. 
  document.getElementById("threejs-container").appendChild(renderer.domElement);

  // https://threejs.org/docs/#api/en/cameras/PerspectiveCamera
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.set(0, 0, 40);

  // https://threejs.org/docs/?q=scene#api/en/scenes/Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color("#f5f6fa");

  // orbit controls
  controls = new OrbitControls(camera, renderer.domElement);

  // add fun shape
  createBox(25,25,25)
  animate();
}

// for controls update
function animate() {
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  // native Javascript function that tells your browser you are animating!
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

// This function is responsible for creating a box, adding material to it and adding it to the scene
function createBox(length, width, height){
    // Instantiate new box and assign it to a variable 'geometry'
    geometry = new THREE.BoxGeometry(length, width, height );

    // Now create a material and assi
    const material = new THREE.MeshNormalMaterial()

    // Create a mesh from geometry and material
    const meshBox = new THREE.Mesh( geometry, material );

    // Add it to a scene
    scene.add( meshBox );
}


// This will be run whenever this component is instantiated
onMounted(() => {
  init()
  animate()
})

//onUpdated is called when an input prop is changed
onUpdated(() => {
  onInputChange()
})

// This funciton will create box again
function onInputChange() {
  scene.clear()
  createBox(props.size, props.size,props.size);
}

</script>

<style scoped>
#viewport {
  border-style: dashed;
  border-color: #d2dfe8;
  border-width: 4px;
  border-radius: 10px;
  margin: 12px;
  height: 100%;
  width: 100%;
  min-width: 200px;
  position:inherit;
}
</style>