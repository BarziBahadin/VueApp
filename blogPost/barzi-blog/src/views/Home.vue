<template>
  <div class="home">
    this is home <br>

    and this is my name {{ name }} and i am {{ age }} years
    <button @click="handelClick">cledk me</button>
    <p ref="p">this is can me be </p>
</div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    
    const p = ref(null)


    console.log("this is from setup")
    const name = ref('Barzi')
    const age = ref(30)

    const handelClick =() =>{
      name.value = " danai "
      age.value = 34
    }
    
    return { name, age , handelClick,p}
  },
}

</script>