<script setup>
    import {defineProps} from "vue"

    const {quiz} = defineProps(['quiz'])

    console.log(quiz)
</script>

<template>
    <div class="card">
        <img :src="quiz.img" alt="">
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  margin-bottom: 35;
  margin-right: 20;
  cursor: pointer;
}

.card img {
  width: 100%;
  margin: 0;
  height: 190px;
}

.card .card-text {
  padding: 0 5px;
}

.card .card-text h2 {
  font-weight: bold;
}
</style>