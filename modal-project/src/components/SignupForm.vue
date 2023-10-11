<template>
  <div>
    <form @submit.prevent="handleSubmit" >
    <h1>Pleas fill the form  </h1>
    <label>Email:</label>
    <input type="email" name="" id="" v-model="email">
    <label>password:</label>
    <input type="password" name="" id="" v-model="password">
    <div class="error" v-if="passwordError" >{{ passwordError }}</div>

    <label>Role:</label>

    <select name="" id="" v-model="role">
      <option value="developer">web dev</option>
      <option value="designer">web designer</option>
    </select>
    <div class="skill">
      <label for="skills">Skills</label>
      <input type="text" name="Skills" v-model="tempSkill" @keyup="addSkill">
      <div class="pill" v-for="skill  in skills" :key="skill" >
        <span @click="remove(skill)">{{ skill }}</span>
      </div>
    </div>

    <div class="terms">
      <input type="checkbox" name="terms" required v-model="terms">
      <label for="terms">Accept terms and conditions</label>
    </div>
    <div class=" submit">
      <button>Create an Account</button>
    </div>
  </form>
    <p>email : {{ email }}</p>
    <p>password : {{ password }}</p>
    <p>role : {{ role }}</p>
    <p>terms : {{ terms }}</p>
    <p>Skills are : {{ skills }}</p>


  
  </div>
</template>

<script>
import { handleError } from 'vue'

export default {
  data() {
    return {
      email: '',
      password: '',
      role: 'developer', // from here we can set the defaults 
      terms: false,
      tempSkill: '',
      skills: [],
      passwordError:'',
    }
  },
  methods: {
    addSkill(e) {
      if (e.key === ',' && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill)
        }
        this.tempSkill = ''
      }
    },
    remove(skill) {
      this.skills = this.skills.filter((item)=>{
        return skill !==item
      })
    },
    handleSubmit(){
      this.passwordError = this.password.length > 5 ? ' ' : "Password must be at list 6 chars long"
      
    }
  }
}
</script>


<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>