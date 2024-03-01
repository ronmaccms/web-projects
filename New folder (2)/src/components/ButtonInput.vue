<template>
  <div id="app">
    <button v-on:click="onButtonClick">{{ titlec }}</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emits = defineEmits(["toggleCompute"]);

const props = defineProps(["tittle"]);
const titlec = ref(props.tittle);

async function onButtonClick() {
  emits("toggleCompute", 10);
}
</script>
