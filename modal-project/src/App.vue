<template>
  <div>
    <h1>Barzi's Reaction Timer</h1><br>
    <button @click="start" :disabled="isPlaying">play</button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame" />
    <!-- <p v-if="showResults">you reaction time is {{ score }}ms</p> -->
    <Results v-if="showResults" :score="score" />
  </div>
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      console.log(this.delay)
      this.showResults = false
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  }

}
</script>

<style>
#app,
.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #0000;
  display: inline-block;
  padding-bottom: 10px;
}

button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}

button [disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
