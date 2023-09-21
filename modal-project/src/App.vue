<template>
  <h1>{{ title }}</h1>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>

export default {
  name: 'App',
  data(){
   return{
     title: "my fist VUE app :D "

   }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #0000;
display: inline-block;
padding-bottom: 10px;

}
</style>
