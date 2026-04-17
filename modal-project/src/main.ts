// Importing component from Vue library
import { createApp } from 'vue'
import App from './App.vue'

/* 
    Mounting the App (root) component to the div element in index.html:

    Vue takes the app component and renders it to the DOM inside the div
    element with the id of app.
*/
createApp(App).mount('#app')
