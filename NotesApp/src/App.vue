<script setup>
  import {ref} from "vue";

  const showModal = ref(false)
  const newNote = ref("")
  const notes = ref([])

  function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

  const addNote = () => {
    notes.value.push({
      id: Math.floor(Math.random() * 1000000),
      text: newNote.value,
      date: new Date(),
      backgroundcolor: getRandomColor()
    })
    showModal.value = false
    newNote.value = ""
  }
</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <button @click="addNote">Add Note</button>
        <button class="close">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>        
      </header>
      <div class="cards-container">
        <div class="card">
          <p class="main-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit aliquid nobis voluptas a? Omnis, excepturi animi totam hic nesciunt dignissimos cumque quam, unde voluptas ipsum pariatur beatae deleniti. Eum, dolores.</p>
          <p class="date">04/27/6853</p>
        </div>
        <div class="card">
          <p class="main-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse inventore quod mollitia ad ipsa aliquam dolorem blanditiis tenetur eligendi at. Rerum architecto rem vel cumque molestias cupiditate consectetur delectus exercitationem!</p>
          <p class="date">04/27/6853</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    height: 100vh;
    width: 100vw;;
  }

  .container {
    max-width: 100px;
    padding: 20px;
    margin: 0 auto;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-weight: bold;
    margin-bottom: 17px;
    font-size: 65px;
    /* padding: 20px; */
    color: rgb(21, 20, 20);
  }

  header button {
    border: none;
    padding: 18px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(55, 55, 55);
    border-radius: 30%;
    color: white;
    font-size: 15px;
  }

  .card {
    width: 225px;
    height: 225px;
    background-color: rgb(237,182,44);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
    flex-shrink: 0;
  }

  .date {
    font-size: 12.5px;
  }

  .main-text {
    font-size: 12px;
    font-weight: bold;
  }

  .cards-container {
    display: flex;
    /* flex-wrap: wrap; */
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0,0.77);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blueviolet;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;
  }
  
  .modal .close {
    background-color: rgb(193,15,15);
    margin-top: 7px;
  }
</style>