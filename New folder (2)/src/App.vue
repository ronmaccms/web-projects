<script setup>
import { ref, onBeforeMount, computed } from "vue";
import { loadRhino } from "@/scripts/compute.js";
// Import other Vue components in order to add them to a template.
import Header from "./components/Header.vue"
import GeometryView from "./components/GeometryView.vue"
import SliderInput from "./components/SliderInput.vue"
import SliderInput2 from "./components/SliderInput2.vue"
import SliderInput3 from "./components/SliderInput3.vue"
import SliderInput4 from "./components/SliderInput4.vue"
import def from './assets/webSp.gh' //import Grasshopper definition for assets

let firstSliderName = ref("RingN") //must match the Input name in your GH definition!
let firstSliderValue = ref(10) //default slider value

let secondSliderName = ref("Scale") //must match the Input name in your GH definition!
let secondSliderValue = ref(3) //default slider value

let thirdSliderName = ref("Thickness") //must match the Input name in your GH definition!
let thirdSliderValue = ref(0.20) //default slider third

let fourthSliderName = ref("Attractor") //must match the Input name in your GH definition!
let fourthSliderValue = ref(0.80) //default slider fourth

///.............................................
let path = def //path to the Grasshopper definition
let data = ref({})
let metadata = ref([])

function updateValue(newValue, parameterName) {
  console.log(parameterName)
  if (parameterName === firstSliderName.value) {
    firstSliderValue.value = newValue
  }   
  else if (parameterName === secondSliderName.value) {
    secondSliderValue.value = newValue
  }  
  else if (parameterName === thirdSliderName.value) {
    thirdSliderValue.value = newValue
  }
  else if (parameterName === fourthSliderName.value) {
    fourthSliderValue.value = newValue
  }
}
// a computed ref. Vue will keep track of this and update it
const computeData = computed(() => {
  data = {
    [firstSliderName.value]: Number(firstSliderValue.value),
    [secondSliderName.value]: Number(secondSliderValue.value),
    [thirdSliderName.value]: Number(thirdSliderValue.value),
    [fourthSliderName.value]: Number(fourthSliderValue.value)
  };
  return data
})
onBeforeMount( () => {
})
</script>

<template>
  <Header title="Digital Tools for Cloud-based Data Management - Andres Assignment 04 - Compute"></Header>
  <div id="content">
    <div id="sidebar" class="container">        
      <SliderInput :title="firstSliderName" @update="updateValue"/> 
      <SliderInput2 :title="secondSliderName" @update="updateValue"/> 
      <SliderInput3 :title="thirdSliderName" @update="updateValue"/> 
      <SliderInput4 :title="fourthSliderName" @update="updateValue"/> 
    </div>      
    <div id="viewer" class="container">
      <GeometryView
      v-bind:data="computeData"
      v-bind:path="path"
      v-on:updateMetadata="receiveMetedata"
      />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;      
  background-color: rgb(59, 59, 59); 
  color: white;
}

.logo-image {
  height: 3.25rem;
  padding: 0.5rem;
}

h2 {
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0.01em;
}

#content{    
    display: flex;
    height: calc(100vh - 68px);
}

#sidebar{    
    width:310px;
    padding: 10px;
}

#viewer{
    width: calc(100% - 310px);
}

.container{
    border-style: dotted;
    border-width: 1px;
}

.modern-range {
  -webkit-appearance: none;
  width: 100%;
  background: linear-gradient(90deg, #ffffff, #ff0080);
  height: 17px;
  border-radius: 15px;
  margin: 10px 0px;
}

.modern-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 15px;
  background-color: black;
  cursor: pointer;
}
</style>

