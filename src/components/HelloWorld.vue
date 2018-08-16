<template>
    <div class="helloworld">
      <h1>{{ msg }}</h1>
    </div>
  </template>
   
  <script>
  export default {
    name: 'helloworld',
    data () {
      return {
        msg: "I'm Helloworld"
      }
    }
  }
  </script>