<template>
  <div>
    <h1>hello and welcome </h1>
    <label>Email:</label>
    <input type="email" name="" id="" v-model="email">
    <label>password:</label>
    <input type="password" name="" id="" v-model="password">

    <label>Role:</label>

    <select name="" id="" v-model="role">
      <option value="developer">web dev</option>
      <option value="designer">web designer</option>
    </select>
    <div class="skill">
      <label for="skills">Skills</label>
      <input type="text" name="Skills" v-model="tempSkill" @keyup="addSkill">
      <div v-for="skill  in skills" :key="skill" class="pill">
        <p>your skill is : {{ skill }}</p>
      </div>
    </div>

    <div class="terms">
      <input type="checkbox" name="terms" required v-model="terms">
      <label for="terms">Accept terms and conditions</label>
    </div>



    <p>email : {{ email }}</p>
    <p>password : {{ password }}</p>
    <p>role : {{ role }}</p>
    <p>terms : {{ terms }}</p>
    <p>Skills are : {{ skills }}</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: 'developer', // from here we can set the defaults 
      terms: false,
      tempSkill: '',
      skills: []
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
    }
  }
}
</script>

<style>
body {
  margin: 30%;
}

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

input,
select {
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
</style>