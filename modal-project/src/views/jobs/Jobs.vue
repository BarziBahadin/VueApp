<template>
    <div>
        <h1>Jobs list </h1>
        <div v-for="job in jobs" :key="job.id" class="job">
            <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
                <h2>{{ job.title }}</h2>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                { title: "ninja UX sesigner ", id: 1, details: "mee we dooo" },
                { title: "Barzi UX dev ", id: 2, details: "this tis iss it  " },
                { title: "sam UX eng ", id: 3, details: "mee we dooo" }
            ]
        }
    }
}
</script>

<style>
  .job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .job h2:hover {
    background: #ded;
  }
  .job a{
    text-decoration: none;
  }</style>