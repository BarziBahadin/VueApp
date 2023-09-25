<template>
  <div>
    <h1>{{ title }}</h1>
    <hr>
    <p>welcome...</p>
    <teleport to=".modals" v-if="showModal">
      <Modal @close="toggleModal" :header="header" :text="text" theme=''>
        <template v-slot:links>
          <a href="#">sing up now</a>
          <a href="#">more info</a>
        </template>
      </Modal>
    </teleport>
    <teleport to=".modals" v-if="showModalTow">


      <Modal @close="toggleModalTow" theme='sale'>
        <h2>its on sale</h2>
        <template v-slot:links>

          <a href="#">you have a discount</a>
          <a href="#">more info of sale</a>
        </template>
      </Modal>
    </teleport>
    <button @click="toggleModal">open model (ALT)</button>
    <button @click="toggleModalTow">sale</button>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue"

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: "my fist VUE app :D ",
      header: "sing up for the game",
      text: "you can win 100000$ ",
      showModal: false,
      showModalTow: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTow() {
      this.showModalTow = !this.showModalTow
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
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #0000;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
