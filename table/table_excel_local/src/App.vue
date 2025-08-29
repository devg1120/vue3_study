<script setup lang="ts">

import { ref } from 'vue';
import  Table1  from './components/Table1.vue';

import  Rte_bubble from './Rte_bubble.vue';
import  Rte_snow from './Rte_snow.vue';

import  Tiptap from './Tiptap.vue';
import  Tiptap2 from './Tiptap2.vue';

const grid  = null;

let textarea_data = `

<textarea id="story" name="story" rows="5" cols="33" style="border:0; resize: none;width: 100%;height:94%; " >
It was a dark and stormy night...
関西
日本
</textarea>

`;

let table_data = `
<table  border="1" style="border-collapse: collapse; background-color: lightblue;">
  <caption>
    Front-end web developer course 2021
  </caption>
  <thead>
    <tr>
      <th scope="col">Person</th>
      <th scope="col">Most interest in</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chris</th>
      <td>HTML tables</td>
      <td>22</td>
    </tr>
    <tr>
      <th scope="row">Dennis</th>
      <td>Web accessibility</td>
      <td>45</td>
    </tr>
    <tr>
      <th scope="row">Sarah</th>
      <td>JavaScript frameworks</td>
      <td>29</td>
    </tr>
    <tr>
      <th scope="row">Karen</th>
      <td>Web performance</td>
      <td>36</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Average age</th>
      <td>33</td>
    </tr>
  </tfoot>
</table>
`;

let   name= 'app';
let   jsondata = [
  {user: 'hc', name: 'Harry Cole',    phone: '1-415-2345678', gender: 'M', age: 25, birth: '1997-07-01', html: '<button>OK</button>'},
  {user: 'sm', name: 'Simon Minolta', phone: '1-123-7675682', gender: 'M', age: 20, birth: '1999-11-12', html: '<p>TEST</p>'},
  {user: 'ra', name: 'Raymond Atom',  phone: '1-456-9981212', gender: 'M', age: 19, birth: '2000-06-11', html: ` ${table_data}`},
  {user: 'a',  name: 'Mary George',   phone: '1-556-1245684', gender: 'F', age: 22, birth: '2002-08-01', html: ` ${textarea_data}`},
  {user: 'b',  name: 'Mary George',   phone: '1-556-1245684', gender: 'F', age: 22, birth: '2002-08-01'},
  //{user: 'c',  name: 'Mary George',   phone: '1-556-1245684', gender: 'F', age: 22, birth: '2002-08-01', html: '<QuillEditor toolbar="full" />'},
  {user: 'c',  name: 'Mary George',   phone: '1-556-1245684', gender: 'F', age: 22, birth: '2002-08-01', html: '<Rte/>'},
  {user: 'd',  name: 'Mary George',   phone: '1-556-1245684', gender: 'F', age: 22, birth: '2002-08-01'},
  {user: 'fg', name: 'Mary George',   phone: '1-556-1245684', gender: 'F', age: 22, birth: '2002-08-01'},
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

function   insertRecord () {
         console.log("insertRecord");
        const rec = {
            user: 'AA',
            name: 'Norman Morris',
            phone: '1-222-3333333',
            gender: 'M',
            age: 28,
            birth: '1993-05-16'
        }
	let N = 0;
	for (let key in this.grid.selected) {
             N = parseInt(key)
	     break;
        }
        // Call this to new record
        this.grid.insertRecord(rec,N)
    };


function  moveUpSelectedRecord() {
      let N = -1;
      for (let key in this.grid.selected) {
             N = parseInt(key)
	     break;
      }
      if (  N == -1)  return;
      if (  N == 0 )  return;
      console.log(N);
      let recs = this.grid.getSelectedRecords();
      console.log("moveUpSelectedRecord", recs);
      for ( let i = 0; i< recs.length ; i++) {
        this.grid.insertRecord(recs[i],N-1+i)
        this.delRecord(N+1+i);
      }

}

function  moveDownSelectedRecord() {
      let N = -1;
      for (let key in this.grid.selected) {
             N = parseInt(key)
	     break;
      }
      if (  N == -1)  return;
      if (  N ==  this.grid.table.length -1)  return;

      let recs = this.grid.getSelectedRecords();

      if (  N+recs.length-1  ==  this.grid.table.length -1)  return;

      //console.log("moveDownSelectedRecord", recs);
      //console.log("N", N);
      //console.log("table.length", this.grid.table.length);
      for ( let i = 0; i< recs.length ; i++) {
        this.grid.insertRecord(recs[i],N+2+recs.length-1 )
        this.delRecord(N);
	/*
	if (i + 1 == recs.length) {
             this.grid.deleteRecord(parseInt(N)) 
	} else {
             this.grid.deleteRecordNotRefresh(parseInt(N)) 
	}
	*/
      }
}

function  moveUpSelectedRecord_() {
      let N = -1;
      for (let key in this.grid.selected) {
             N = parseInt(key)
	     break;
      }
      if (  N == -1)  return;
      let recs = this.grid.getSelectedRecords();
      console.log("moveUpSelectedRecord", recs);
      this.grid.insertRecord(recs[0],N-1)
      this.delRecord(N+1);

}

function  moveDownSelectedRecord_() {
      let N = -1;
      for (let key in this.grid.selected) {
             N = parseInt(key)
	     break;
      }
      if (  N == -1)  return;
      let recs = this.grid.getSelectedRecords();
      console.log("moveDownSelectedRecord", recs);
      this.grid.insertRecord(recs[0],N+2)
      this.delRecord(N);
}
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

function setStyle() {
/*
      for (let i = 0; i < this.grid.table.length; i++){
         console.log(this.grid.table[i]);
         console.log(this.grid.table[i].$id);
      }
*/
/*
    #id-80782324-0000002-user {
        color: #96001c;
        background-color: #ffcfd8;
    }
*/

     let selector = "#id-" + this.grid.table[3].$id + "-user";
      console.log(selector);
     let element = document.querySelector(selector);
     element.style.backgroundColor = "#ffcfd8";
     element.style.color = "red";


}

 function cellStyle(record, item) {
    //console.log("record",record);
    //console.log("item", item);
    let result = {}
    if ( record.user == "fg" && item.name == "age") {
        result.color = "green";
        result.backgroundColor  = "yellow";
    }
    if ( record.user == "ra" && item.name == "user") {
        result.color = "red";
        result.backgroundColor  = "lightgreen";
    }
    if ( record.user == "fg" && item.name == "name") {
        result.color = "white";
        result.backgroundColor  = "orange";
        result.border = "solid 4px black"; 
    }
    if ( record.user == "b" && item.name == "phone") {
        result.color         = "red";
	result.textAlign     = "right";
	result.verticalAlign = "top";
        result.borderTop     = "solid 4px black"; 
        result.borderBottom  = "solid 4px orange"; 
        result.borderLeft    = "solid 4px green"; 
        result.borderRight   = "solid 4px blue"; 
    }
    return result
 }
</script>

<template>
	<!--
   <RteToolbar />
	-->
    <vue-excel-editor ref="grid" v-model="jsondata" :cellStyle="cellStyle">
        <vue-excel-column field="user"   label="User ID"       type="string" width="80px"  />
        <vue-excel-column field="name"   label="Name"          type="string" width="150px" />
        <vue-excel-column field="phone"  label="Contact"       type="string" width="130px" />
        <vue-excel-column field="gender" label="Gender"        type="select" width="50px" :options="['F','M','U']" />
        <vue-excel-column field="age"    label="Age"           type="number" width="70px" />
        <vue-excel-column field="birth"  label="Date Of Birth" type="date"   width="80px" />
        <vue-excel-column field="html"   label="html"          type="html"   width="300px"   />
		
        <vue-excel-column field="rte"    label="rte"           type="rte"    width="400px"   />
	
    </vue-excel-editor>
    <button @click="newRecord()">append Row</button>
    <button @click="insertRecord()">insert Row</button>
    <button @click="delSelectedRecords()">del Select Row</button>
    <button @click="delRecord(3)">del 3 Row</button>
    <button @click="moveUpSelectedRecord()">move Up</button>
    <button @click="moveDownSelectedRecord()">move Down</button>
    <button @click="setStyle()">set style</button>

    <hr>
    <p>Table1</p>
    <Table1 />

    <hr>
    <p>Rte snow</p>
    <Rte_snow /> 
    <p>Rte bubble</p>
    <Rte_bubble /> 
    <!--<Rte /> -->
    <!--<Tiptap />-->
</template>


<!--
<style >
  table >  tbody >  tr:nth-child(3) td:nth-child(2) {
    color: #96001c;
    background-color: #ffcfd8;
  }
  table > tbody > tr:nth-child(7) td {
    color: red;
  }
</style>

#id-80782324-0000002-user {
    color: #96001c;
    background-color: #ffcfd8;


}


.vue-excel-editor  >>>  tr:nth-child(3) td:nth-child(2) {
    color: #96001c;
    background-color: #ffcfd8;
  }
.vue-excel-editor  >>>   tr:nth-child(7) td {
    color: red;
  }

.vue-excel-editor  > .component-content > .table-content > .systable > tbody >  tr:nth-child(3) td:nth-child(2) {
-->
<style scoped>

/*
.vue-excel-editor  >>>   tr:nth-child(3) td:nth-child(2) {
    color: #96001c;
    background-color: #ffcfd8;
  }
.vue-excel-editor  >>>   tr:nth-child(2) td {
    color: red;
  }

*/
#my-toolbar {
  z-index: 10000;
}

.ql-picker-options {
  z-index: 10000;
}

.ql-picker-item{
  z-index: 10000;
}

</style>
