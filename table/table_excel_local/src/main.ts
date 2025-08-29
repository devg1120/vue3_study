import { createApp } from 'vue'
import App from './App.vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
//import  Rte  from './Rte.vue'
import  Rte_bubble  from './Rte_bubble.vue'
import  Rte_snow  from './Rte_snow.vue'

//import  RteEditor  from './RteEditor.vue'
//import  RteToolbar  from './RteToolbar.vue'
import  Tiptap  from './Tiptap.vue'
import  Tiptap2  from './Tiptap2.vue'

import VueExcelEditor from '../vue3-excel-editor'



const app = createApp(App);
app.use(VueExcelEditor)
//app.use(QuillEditor)

app.component('QuillEditor', QuillEditor)
//app.component('Rte', Rte)
app.component('Rte_bubble', Rte_bubble)
app.component('Rte_snow', Rte_snow)

//app.component('RteEditor', RteEditor)
app.component('Tiptap', Tiptap)
app.component('Tiptap2', Tiptap2)

app.config.globalProperties.$greet = () => console.log('Hello World!')
app.config.globalProperties.$myFunc = function() {

  console.log('This is a global function.')

}

app.mount('#app')
