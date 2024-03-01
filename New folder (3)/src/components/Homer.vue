<template>
    <div id="viewport">
      <!-- To this element we will append our 3d scene. -->
      <div id="threejs-container-rhino"></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import * as THREE from 'three'
  import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
  import { Rhino3dmLoader } from 'three/examples/jsm/loaders/3DMLoader'
  import model from '../assets/HomerStands.3dm'
  
  let scene, camera, renderer

  // Initialize scene, camera, and renderer
  function init() {
    // Rhino models are z-up, so set this as the default
    THREE.Object3D.DEFAULT_UP.set(0, 0, 1);
  
    // Create a scene and a camera
    scene = new THREE.Scene()
    scene.background = new THREE.Color(1, 1, 1)
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(6, -7, 6)
  
    // Create the renderer and add it to the HTML
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.shadowMap.enabled = true
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
  
    document.getElementById("threejs-container-rhino").appendChild(renderer.domElement);


  
    // Add controls to orbit the camera
    const controls = new OrbitControls(camera, renderer.domElement)

    document.addEventListener("keydown", keyDown)

    function keyDown(event){
      console.log(event)
      if (!homer) return
      else {
        if (event.code == 'KeyW'){
          homer.position.y += 0.1
        }
        else if (event.code == 'KeyD'){
          homer.position.x += 0.1
        }
        else if (event.code == 'KeyA'){
          homer.position.x -= 0.1
        } 
        else if (event.code == 'KeyS'){
          homer.position.y -= 0.1
        } 
        else if (keyboard[32] && jump_can==1) {// space
          jump_can = 0;
          velocity_y = 16;
        }
        }
        let homer1BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3())
        homer1BB.setFromObject(homer)
        console.log(homer1BB)
        animate()
      }    


    // Ground plane for game
    // const ground = new THREE.Mesh(
    //   new THREE.BoxGeometry(15, 10000, 0.1), 
    //   new THREE.MeshStandardMaterial({ color: 0x99FFFF })
    // )
    // ground.position.z = -0.3
    // ground.receiveShadow = true
    // // ground.castShadow = true
    // scene.add(ground)

    // Add a torus mesh
    const geometry = new THREE.TorusGeometry(0.4, 0.24, 100, 100)
    const material = new THREE.MeshLambertMaterial({ color: 0xCC00CC })
    const torus = new THREE.Mesh(geometry, material)
    torus.position.set(0, 20, 4)
    torus.castShadow = true
    torus.receiveShadow = true
    scene.add(torus);

    let torus1BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3())
    torus1BB.setFromObject(torus)
    console.log(torus1BB)
  
    // Add directional lights
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(10, -12, 10)
    light.castShadow = true
    light.shadow.bias = 0.1
    scene.add(light)
  
    const light2 = new THREE.AmbientLight(0xffffff, 1)
    scene.add(light2)

    const enemy = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1), 
      new THREE.MeshStandardMaterial({ color: 0xf01c0c })
    )
    enemy.position.set(2, 18, 3)
    enemy.receiveShadow = true
    scene.add(enemy)

    let enemy1BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3())
    enemy1BB.setFromObject(enemy)
    console.log(enemy1BB)



    // const enemies = [enemy]

        // Animate the torus
    function animate() {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
      torus.position.y -= 0.042
      torus.rotation.x += 0.01
      torus.rotation.y += 0.01
      enemy.position.y -= 0.02
      enemy.rotation.x -= 0.01
      enemy.rotation.y += 0.01
      
    }
  
    animate()

    var homer = new THREE.Object3D()
    
    // Load 3D model
    const loader = new Rhino3dmLoader()
    loader.setLibraryPath('https://cdn.jsdelivr.net/npm/rhino3dm@8.0.0-beta2/')
    loader.load(
      model,
      function (object) {
        object.traverse(function(child){
          if(child.isMesh){
            scene.add(child)
            homer = child
          }
        })
      }
    )
  }
  
  // Run initialization on component mount
  onMounted(() => {
    init()
  })
  
  </script>
  