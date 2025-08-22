<script >
let TITLE = "Test01: Options API";
let DESC  = "Options API";

export default {
  data: () => ({
     count : 0,
     TITLE : TITLE,
     DESC : DESC,
     CODE : CODE
     }),
  methods: {
    increment(){
      this.count++;
      },
    decrement() {
      this.count--;
      }
  }
}
let CODE = `
_script_
  export default {
    data: () => ({
       count : 0,
       }),
    methods: {
      increment(){
        this.count++;
        },
      decrement() {
        this.count--;
        }
    }
  }
_script_
`;
</script>
 
<template>
  <p class="title">{{TITLE}}</p>
  <p >{{DESC}}</p>
  <hr>
  <pre><code>{{CODE}}</code></pre>  
  <hr>
  <p> {{count}}</p>
   <button @click="increment()" style="cursor: pointer">+</button>
   <button @click="decrement()" style="cursor: pointer">-</button>
</template>

<style scoped>
  p.title {
   font-weight: bold;
   background: #cce5ff ;
   padding-left: 5px;
  }
</style>
