<script setup lang="ts">
  import Modal from './components/Modal.vue';
</script>


<template>
  <h1>You did it!</h1>
  <Modal/>
</template>

<style>
  #app {
    font-family: Avenir, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  h1 {
    border-bottom: 1px solid #ddd;
    display: inline-block;
    padding-bottom: 10px;
  }
</style>