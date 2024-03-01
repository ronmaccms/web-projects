<script setup>
import { ref } from "vue"

// Define props
defineProps(['title'])

</script>

<template>
  <div id="top-bar">
    <div id="title-container">
      <img class="logo-image" alt="Iaac logo" src="../assets/donut.png" />
      <h2>{{  title }}</h2>
    </div>
  </div>
</template>

<style scoped>
#top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(240, 183, 245);
}

#title-container {
  display: flex;
  align-items: center;
  color: white;
  margin-right: 1.5rem;
}
</style>