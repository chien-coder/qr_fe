import './assets/main.css'

import { createApp } from 'vue'
import { createDynamicForms } from '@asigloo/vue-dynamic-forms';
import App from './App.vue'
import router from './router'

const VueDynamicForms = createDynamicForms({
    // Global Options go here
});

const app = createApp(App)

app.use(router)
app.use(VueDynamicForms)

app.mount('#app')
