<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/Jobs">Jobs</router-link>
    </div>

    <router-view /> <button @click="redirect"> Redirect </button>
    <button @click="back">Go Back</button>
    <button @click="forward">Go Forward</button>
  </div>
</template>
<script>
export default {
  methods: {
    redirect() { this.$router.push({ name: 'Home' }) },
    back() { this.$router.go(-1) },
    forward() { this.$router.go(1) }
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
  max-width: 960px;
  margin: 0 auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: rgb(57, 220, 20);
}

button {
  margin: 0 10px;
  padding-inline: 10px;
  border: none;
  border-radius: 2em;
  height: 3em;

}
</style>