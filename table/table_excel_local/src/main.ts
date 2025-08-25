import { createApp } from 'vue'
import App from './App.vue'

import VueExcelEditor from '../vue3-excel-editor'


const app = createApp(App);
app.use(VueExcelEditor)


app.mount('#app')
