<script setup>
import { ref } from "vue";
// Define properties that you will be able to access from parent component. 
// Those properties will be binded from parent to child. 
// Available JavaScript types: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
const props = defineProps(['title'])
const titlec = ref(props.title)
// Define events that will be accessible from parent component
const emits = defineEmits(['update'])
var sliderValue = ref(3)
function sendValueUpdate()
{
  emits("update", sliderValue.value, titlec.value)
}
</script>

<template>
<div>
	<form class="definition-input">
			<label class="input-title" for="range-slider2">{{ title }}: {{ sliderValue }}</label>
			<input type="range" class="modern-range"
			min="1" 
      max="10" 
      step="1"
      val = "3"
			v-model="sliderValue" 
      @mouseup="sendValueUpdate"
			/>      
	</form>
</div>
</template>

<style scoped>
.modern-range {
  -webkit-appearance: none;
  width: 100%;
  background: linear-gradient(90deg, hsl(0, 0%, 100%), #eb487c);
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