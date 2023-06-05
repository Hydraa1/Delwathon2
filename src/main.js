import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'flowbite'
import 'sweetalert2/dist/sweetalert2.min.css';
// import 'tailwindcss/tailwind.css';



// Vuetify

// import  Multiselect from 'vue-multiselect'
const app = createApp(App)
app.use(router)

app.mount('#app')
