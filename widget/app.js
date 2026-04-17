const { createApp, ref, computed } = Vue;

const app = createApp({
    setup() {
        const url = ref('https://www.google.com/');
        const showBooks = ref(true);
        const title = ref('The Final Empire');
        const author = ref('Brandon Inu');
        const age = ref(45);
        const x = ref(0);
        const y = ref(0);
        
        const books = ref([
            { title: "name of the winds", author: "patrick rothus", img: 'assets/1.jpg', isFav: true },
            { title: "the way of kings", author: "brandon sanderson", img: '', isFav: false },
            { title: "the final reckoning", author: "Urie Tame", img: '', isFav: true }
        ]);

        // Methods 
        const changeTitle = () => {
            /*
                ref creates an object wrapper so you must use .value 
                to read or write the data.
            */
            title.value = 'Avatar'; 
        };

        const toggleShowBooks = () => {
            showBooks.value = !showBooks.value;
        };

        const handleEvent = (e) => {
            console.log(e, e.type);
        };

        const handleMouseMove = (e) => {
            x.value = e.offsetX;
            y.value = e.offsetY;
        };

        const toggleFav = (book) => {
            book.isFav = !book.isFav; // objects inside refs update directly
        };

    
        const filteredBooks = computed(() => {
            return books.value.filter(book => book.isFav);
        });


        return {
            url, showBooks, title, author, age, books, x, y,
            changeTitle, toggleShowBooks, handleEvent, handleMouseMove, toggleFav,
            filteredBooks
        };
    }
});

app.mount('#app');