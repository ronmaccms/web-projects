<template>
    <div id="viewport">
        <!-- To this element we will append our 3d scene. -->
        <div id="threejs-container-rhino"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { Rhino3dmLoader} from 'three/examples/jsm/loaders/3DMLoader'
import model from '../assets/Rhino_Logo.3dm'


// declare variables to store scene, camera, and renderer
let scene, camera, renderer


// function to setup the scene, camera, renderer, and load 3d model
function init () {

    // Rhino models are z-up, so set this as the default
    THREE.Object3D.DEFAULT_UP.set( 0, 0, 1 );

    // create a scene and a camera
    scene = new THREE.Scene()
    scene.background = new THREE.Color(1,1,1)
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 )
    camera.position.y = - 30

    // create the renderer and add it to the html
    renderer = new THREE.WebGLRenderer( { antialias: true } )
    renderer.setSize( window.innerWidth, window.innerHeight )

    // We are taking element defined in <template> and appending our render to it. 
    document.getElementById("threejs-container-rhino").appendChild(renderer.domElement);

    // add some controls to orbit the camera
    const controls = new OrbitControls( camera, renderer.domElement )

    // add a directional light
    const directionalLight = new THREE.DirectionalLight( 0xffffff )
    directionalLight.intensity = 2
    scene.add( directionalLight )

    const loader = new Rhino3dmLoader()

    // path to where the rhino3dm js library is located.
    loader.setLibraryPath('https://cdn.jsdelivr.net/npm/rhino3dm@8.0.0-beta2/')

    // Load 3dm file
    loader.load(
        // link to 3dm file
        model, 
        // a function that is called when the model is loaded
        function (object) {
            // load returned object which now we add to the scene
            scene.add(object)
            console.log(object)
        }
    )

}

// function to continuously render the scene
function animate() {

requestAnimationFrame( animate )
renderer.render( scene, camera )

}

// This will be run whenever this component is instantiated
onMounted(() => {
  init()
  animate()
})

</script>