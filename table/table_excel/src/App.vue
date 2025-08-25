<script setup lang="ts">

import { ref } from 'vue';

const grid  = null;

let   name= 'app';
let   jsondata = [
  {user: 'hc', name: 'Harry Cole',    phone: '1-415-2345678', gender: 'M', age: 25, birth: '1997-07-01'},
  {user: 'sm', name: 'Simon Minolta', phone: '1-123-7675682', gender: 'M', age: 20, birth: '1999-11-12'},
  {user: 'ra', name: 'Raymond Atom',  phone: '1-456-9981212', gender: 'M', age: 19, birth: '2000-06-11'},
  {user: 'ag', name: 'Mary George',   phone: '1-556-1245684', gender: 'F', age: 22, birth: '2002-08-01'},
  {user: 'kl', name: 'Kenny Linus',   phone: '1-891-2345685', gender: 'M', age: 29, birth: '1990-09-01'}
 ];
    
function   newRecord () {
        const rec = {
            user: 'nm',
            name: 'Norman Morris',
            phone: '1-222-3333333',
            gender: 'M',
            age: 28,
            birth: '1993-05-16'
        }
        // Call this to new record
        this.grid.newRecord(rec)
    };
/*
function   insertRecord () {
        const rec = {
            user: 'AA',
            name: 'Norman Morris',
            phone: '1-222-3333333',
            gender: 'M',
            age: 28,
            birth: '1993-05-16'
        }
        // Call this to new record
        this.grid.insertRecord(rec,2)
    };
*/
function  delSelectedRecords() {
	console.log(this.grid.selected);
	/*
	let c = 0;
	for (let key in this.grid.selected) {
             this.grid.deleteRecord(parseInt(key)-c) 
	     c += 1;
        }
        */
	this.grid.deleteSelectedRecords();

    }

function  delRecord(N) {
       this.grid.deleteRecord(parseInt(N)) 
}

</script>

<template>
    <vue-excel-editor ref="grid" v-model="jsondata">
        <vue-excel-column field="user"   label="User ID"       type="string" width="80px" />
        <vue-excel-column field="name"   label="Name"          type="string" width="150px" />
        <vue-excel-column field="phone"  label="Contact"       type="string" width="130px" />
        <vue-excel-column field="gender" label="Gender"        type="select" width="50px" :options="['F','M','U']" />
        <vue-excel-column field="age"    label="Age"           type="number" width="70px" />
        <vue-excel-column field="birth"  label="Date Of Birth" type="date"   width="80px" />
    </vue-excel-editor>
    <button @click="newRecord()">append Row</button>
    <button @click="insertRecord()">insert Row</button>
    <button @click="delSelectedRecords()">del Select Row</button>
    <button @click="delRecord(3)">del 3 Row</button>
</template>



<style scoped>

</style>
