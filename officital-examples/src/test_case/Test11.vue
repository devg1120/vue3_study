<script setup>
let TITLE = "Test11: ";
let DESC  = "Modal with Transitions";
let CODE  = `
<script>
<template>
`;

/********************************/
import Modal from './11/Modal.vue'
import { ref } from 'vue'

const showModal = ref(false)

/********************************/
</script>
 
<template>
  <p class="title">{{TITLE}}</p>
  <p >{{DESC}}</p>
  <hr><pre><code>{{CODE}}</code></pre></hr>

<!-------------------------------->
  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>Custom Header</h3>
      </template>
    </modal>
  </Teleport>
<!-------------------------------->

</template>


<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>

