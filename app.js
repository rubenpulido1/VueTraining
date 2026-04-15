const app = Vue.createApp({
    // Defining a method inside an object literal
    data() {
        return {
            url: 'https://www.google.com/',
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Inu',
            age: 45,
            books: [
                {   title: "name of the winds",
                    author: "patrick rothus",
                    img: 'assets/1.jpg', 
                    isFav: true
                },
                {   title: "the way of kings",
                    author: "brandon sanderson",
                    img: '',
                    isFav: false
                },
                {   title: "the final reckoning",
                    author: "Urie Tame",
                    img: '',
                    isFav: true
                },
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        // Updating Data Properties via Methods
        changeTitle() {
            this.title = 'Avatar';
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e) {
            console.log(e, e.type);
        },
        // Updating properties
        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },

        /* Video 2 Challenge
            Passing the current book object (by reference) from the books 
            array into the toggleFave method.

            Vue will react to the changes on the object and update the UI.
         */
        toggleFav(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter(book => book.isFav);
        }
    }
});

app.mount('#app');