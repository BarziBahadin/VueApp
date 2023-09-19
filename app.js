const app = Vue.createApp({
    // data and fuctions from a templayes

   // template: '<h2>I am a template</h2>'

   data(){ // to output dynamic data to the file in the html 
    return {
        showBooks : true,
        title: "deep work ",
        author : "call newport",
        type: "self help",    
        age : 45
    }
   },
   methods: {
    toggleShowBooks(){
        this.showBooks = !this.showBooks
    }
   }
})
app.mount("#app")

