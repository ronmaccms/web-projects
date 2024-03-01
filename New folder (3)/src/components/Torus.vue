<template>
    <div id="viewport">
        <!-- To this element we will append our 3d scene. -->
        <div id="threejs-container-torus"></div>
    </div>
</template>


<script setup>
// Imports;
import { onMounted } from 'vue'
import * as THREE from "three"
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// Three js objects
let renderer, camera, scene, controls, torus

let width = 600
let height = 1000


function init() {
    // https://threejs.org/docs/#api/en/renderers/WebGLRenderer
    // This object will render our scene
    renderer = new THREE.WebGLRenderer()

    // Rendered needs to know what's the size of the scene. 
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)

    // We are taking element defined in <template> and appending our render to it. 
    document.getElementById("threejs-container-torus").appendChild(renderer.domElement)

    // https://threejs.org/docs/#api/en/cameras/PerspectiveCamera
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.set(0, 0, 40)

    // https://threejs.org/docs/?q=scene#api/en/scenes/Scene
    scene = new THREE.Scene()
    scene.background = new THREE.Color("#f5f6fa")

    // orbit controls
    controls = new OrbitControls(camera, renderer.domElement)

    // add fun shape
    // 1. Create the geometry:
    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16)

    // 2. Create the material:
    const material = new THREE.MeshNormalMaterial()

    // 3. Create the object
    torus = new THREE.Mesh(geometry, material)

    // 4. Add it to the scene
    scene.add(torus)
    animate()
}


// Render
function animate() {
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    // native Javascript function that tells your browser you are animating!
    requestAnimationFrame(animate)

    // rotate torus a little bit each frame
    torus.rotation.x += 0.01
    torus.rotation.y += 0.01

    renderer.render(scene, camera)
}

// This will be run whenever this component is instantiated
onMounted(() => {
    init()
    animate()
})
</script>
