let i = 1;
const app = Vue.createApp({
  // data and fuctions from a templayes

  // template: '<h2>I am a template</h2>'

  data() {
    // to output dynamic data to the file in the html
    return {
      showBooks: true,
      url: "https://www.google.com",
      books: [
        { title: "name of the wind", author: "patrick roth's" ,img:'assets/1.jpg', isFave:true},
        { title: "the way of kings", author: "brandon sanders ", img:'assets/2.jpg',isFave:false},
        { title: "the final empire", author: "brandon   sanders ",img:'assets/3.jpg',isFave:true },
      ],
    };
  },
  methods: {
    addFave(book){
   book.isFave = !book.isFave
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e) {
      i++;
      console.log("event " + i);
      console.log(e.type);
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
  computed:{
    filteredBooks(){
        return this.books.filter((book) => book.isFave)

    }
  }
});

app.mount("#app");
