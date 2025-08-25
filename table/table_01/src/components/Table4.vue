<template>
  <EasyDataTable
    buttons-pagination
    alternating
    border-cell

    :headers="headers"
    :items="items"
    :rows-per-page=4

    table-class-name="customize-table"

  />
</template>

<style scoped>

.customize-table {
  --easy-table-border: 1px solid #445269;
  --easy-table-row-border: 1px solid #445269;

  --easy-table-header-font-size: 14px;
  /*--easy-table-header-height: 50px;*/
  --easy-table-header-height: 30px;
  --easy-table-header-font-color: #c1cad4;
  --easy-table-header-background-color: #2d3a4f;

  /*--easy-table-header-item-padding: 10px 15px;}*/
  --easy-table-header-item-padding: 0px 15px;

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: #4c5d7a;

  --easy-table-body-row-font-color: #c0c7d2;
  --easy-table-body-row-background-color: #2d3a4f;
  --easy-table-body-row-height: 30px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #eee;

  /* --easy-table-body-item-padding: 10px 15px; */
  --easy-table-body-item-padding: 0px 15px;

  --easy-table-footer-background-color: #2d3a4f;
  --easy-table-footer-font-color: #c0c7d2;
  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;


  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}


</style>

<script setup lang="ts">
import type { Header, Item } from "vue3-easy-data-table";

    const headers: Header[] = [
      { text: "Name", value: "name" },
      { text: "Height (cm)", value: "height", sortable: true },
      { text: "Weight (kg)", value: "weight", sortable: true },
      { text: "Age", value: "age", sortable: true }
    ];

    const items: Item[] = [
      { "name": "ACurry", "height": 178, "weight": 77, "age": 20 },
      { "name": "James", "height": 180, "weight": 75, "age": 21 },
      { "name": "James", "height": 180, "weight": 75, "age": 22 },
      { "name": "James", "height": 180, "weight": 75, "age": 23 },
      { "name": "James", "height": 180, "weight": 75, "age": 24 },
      { "name": "James", "height": 180, "weight": 75, "age": 24 },
      { "name": "James", "height": 180, "weight": 75, "age": 25 },
      { "name": "James", "height": 180, "weight": 75, "age": 24 },
      { "name": "James", "height": 180, "weight": 75, "age": 25 },
      { "name": "James", "height": 180, "weight": 75, "age": 24 },
      { "name": "James", "height": 180, "weight": 75, "age": 25 },
      { "name": "James", "height": 180, "weight": 75, "age": 24 },
      { "name": "James", "height": 180, "weight": 75, "age": 25 },
      { "name": "James", "height": 180, "weight": 75, "age": 24 },
      { "name": "James", "height": 180, "weight": 75, "age": 25 },
      { "name": "James", "height": 180, "weight": 75, "age": 24 },
      { "name": "James", "height": 180, "weight": 75, "age": 25 },
      { "name": "James", "height": 180, "weight": 75, "age": 24 },
      { "name": "James", "height": 180, "weight": 75, "age": 25 },
      { "name": "James", "height": 180, "weight": 75, "age": 24 },
      { "name": "James", "height": 180, "weight": 75, "age": 25 },
      { "name": "James", "height": 180, "weight": 75, "age": 24 },
      { "name": "James", "height": 180, "weight": 75, "age": 25 },
      { "name": "James", "height": 180, "weight": 75, "age": 24 },
      { "name": "James", "height": 180, "weight": 75, "age": 25 },
      { "name": "James", "height": 180, "weight": 75, "age": 24 },
      { "name": "James", "height": 180, "weight": 75, "age": 25 },
      { "name": "James", "height": 180, "weight": 75, "age": 24 },
      { "name": "James", "height": 180, "weight": 75, "age": 25 },
      { "name": "James", "height": 180, "weight": 75, "age": 24 },
      { "name": "James", "height": 180, "weight": 75, "age": 25 },
      { "name": "James", "height": 180, "weight": 75, "age": 24 },
      { "name": "James", "height": 180, "weight": 75, "age": 25 },
      { "name": "James", "height": 180, "weight": 75, "age": 24 },
      { "name": "James", "height": 180, "weight": 75, "age": 25 },
      { "name": "James", "height": 180, "weight": 75, "age": 26 },
      { "name": "James", "height": 180, "weight": 75, "age": 27 },
      { "name": "James", "height": 180, "weight": 75, "age": 28 },
      { "name": "James", "height": 180, "weight": 75, "age": 29 },
      { "name": "James", "height": 180, "weight": 75, "age": 30 },
      { "name": "James", "height": 180, "weight": 75, "age": 31 },
      { "name": "James", "height": 180, "weight": 75, "age": 26 },
      { "name": "James", "height": 180, "weight": 75, "age": 27 },
      { "name": "James", "height": 180, "weight": 75, "age": 28 },
      { "name": "James", "height": 180, "weight": 75, "age": 29 },
      { "name": "James", "height": 180, "weight": 75, "age": 30 },
      { "name": "James", "height": 180, "weight": 75, "age": 31 },
      { "name": "James", "height": 180, "weight": 75, "age": 26 },
      { "name": "James", "height": 180, "weight": 75, "age": 27 },
      { "name": "James", "height": 180, "weight": 75, "age": 28 },
      { "name": "James", "height": 180, "weight": 75, "age": 29 },
      { "name": "James", "height": 180, "weight": 75, "age": 30 },
      { "name": "James", "height": 180, "weight": 75, "age": 31 },
      { "name": "James", "height": 180, "weight": 75, "age": 26 },
      { "name": "James", "height": 180, "weight": 75, "age": 27 },
      { "name": "James", "height": 180, "weight": 75, "age": 28 },
      { "name": "James", "height": 180, "weight": 75, "age": 29 },
      { "name": "James", "height": 180, "weight": 75, "age": 30 },
      { "name": "James", "height": 180, "weight": 75, "age": 31 },
      { "name": "James", "height": 180, "weight": 75, "age": 26 },
      { "name": "James", "height": 180, "weight": 75, "age": 27 },
      { "name": "James", "height": 180, "weight": 75, "age": 28 },
      { "name": "James", "height": 180, "weight": 75, "age": 29 },
      { "name": "James", "height": 180, "weight": 75, "age": 30 },
      { "name": "James", "height": 180, "weight": 75, "age": 31 },
      { "name": "James", "height": 180, "weight": 75, "age": 26 },
      { "name": "James", "height": 180, "weight": 75, "age": 27 },
      { "name": "James", "height": 180, "weight": 75, "age": 28 },
      { "name": "James", "height": 180, "weight": 75, "age": 29 },
      { "name": "James", "height": 180, "weight": 75, "age": 30 },
      { "name": "James", "height": 180, "weight": 75, "age": 31 },
      { "name": "James", "height": 180, "weight": 75, "age": 26 },
      { "name": "James", "height": 180, "weight": 75, "age": 27 },
      { "name": "James", "height": 180, "weight": 75, "age": 28 },
      { "name": "James", "height": 180, "weight": 75, "age": 29 },
      { "name": "James", "height": 180, "weight": 75, "age": 30 },
      { "name": "James", "height": 180, "weight": 75, "age": 31 },
      { "name": "James", "height": 180, "weight": 75, "age": 26 },
      { "name": "James", "height": 180, "weight": 75, "age": 27 },
      { "name": "James", "height": 180, "weight": 75, "age": 28 },
      { "name": "James", "height": 180, "weight": 75, "age": 29 },
      { "name": "James", "height": 180, "weight": 75, "age": 30 },
      { "name": "James", "height": 180, "weight": 75, "age": 31 },
      { "name": "James", "height": 180, "weight": 75, "age": 26 },
      { "name": "James", "height": 180, "weight": 75, "age": 27 },
      { "name": "James", "height": 180, "weight": 75, "age": 28 },
      { "name": "James", "height": 180, "weight": 75, "age": 29 },
      { "name": "James", "height": 180, "weight": 75, "age": 30 },
      { "name": "James", "height": 180, "weight": 75, "age": 31 },
      { "name": "James", "height": 180, "weight": 75, "age": 26 },
      { "name": "James", "height": 180, "weight": 75, "age": 27 },
      { "name": "James", "height": 180, "weight": 75, "age": 28 },
      { "name": "James", "height": 180, "weight": 75, "age": 29 },
      { "name": "James", "height": 180, "weight": 75, "age": 30 },
      { "name": "James", "height": 180, "weight": 75, "age": 31 },
      { "name": "James", "height": 180, "weight": 75, "age": 26 },
      { "name": "James", "height": 180, "weight": 75, "age": 27 },
      { "name": "James", "height": 180, "weight": 75, "age": 28 },
      { "name": "James", "height": 180, "weight": 75, "age": 29 },
      { "name": "James", "height": 180, "weight": 75, "age": 30 },
      { "name": "James", "height": 180, "weight": 75, "age": 31 },
      { "name": "James", "height": 180, "weight": 75, "age": 26 },
      { "name": "James", "height": 180, "weight": 75, "age": 27 },
      { "name": "James", "height": 180, "weight": 75, "age": 28 },
      { "name": "James", "height": 180, "weight": 75, "age": 29 },
      { "name": "James", "height": 180, "weight": 75, "age": 30 },
      { "name": "James", "height": 180, "weight": 75, "age": 31 },
      { "name": "James", "height": 180, "weight": 75, "age": 26 },
      { "name": "James", "height": 180, "weight": 75, "age": 27 },
      { "name": "James", "height": 180, "weight": 75, "age": 28 },
      { "name": "James", "height": 180, "weight": 75, "age": 29 },
      { "name": "James", "height": 180, "weight": 75, "age": 30 },
      { "name": "James", "height": 180, "weight": 75, "age": 31 },
      { "name": "James", "height": 180, "weight": 75, "age": 26 },
      { "name": "James", "height": 180, "weight": 75, "age": 27 },
      { "name": "James", "height": 180, "weight": 75, "age": 28 },
      { "name": "James", "height": 180, "weight": 75, "age": 29 },
      { "name": "James", "height": 180, "weight": 75, "age": 30 },
      { "name": "James", "height": 180, "weight": 75, "age": 31 },
      { "name": "James", "height": 180, "weight": 75, "age": 26 },
      { "name": "James", "height": 180, "weight": 75, "age": 27 },
      { "name": "James", "height": 180, "weight": 75, "age": 28 },
      { "name": "James", "height": 180, "weight": 75, "age": 29 },
      { "name": "James", "height": 180, "weight": 75, "age": 30 },
      { "name": "James", "height": 180, "weight": 75, "age": 31 },
      { "name": "James", "height": 180, "weight": 75, "age": 25 },
      { "name": "James", "height": 180, "weight": 75, "age": 26 },
      { "name": "James", "height": 180, "weight": 75, "age": 27 },
      { "name": "James", "height": 180, "weight": 75, "age": 28 },
      { "name": "James", "height": 180, "weight": 75, "age": 29 },
      { "name": "James", "height": 180, "weight": 75, "age": 30 },
      { "name": "James", "height": 180, "weight": 75, "age": 31 },
      { "name": "Jordan", "height": 181, "weight": 73, "age": 32 }
    ];

</script>

