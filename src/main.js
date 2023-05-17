import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'flowbite'
// import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'   
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import 'tailwindcss/tailwind.css';

// date
import 'flowbite/css/flowbite.css';

// import 'flowbite-datepicker';
// import Datepicker from 'flowbite-datepicker/Datepicker';

// Vuetify

// import  Multiselect from 'vue-multiselect'
const app = createApp(App)
app.use(router)
app.use(initFlowbite())
app.use(VueSweetalert2)
// app.use(Multiselect)
app.mount('#app')
