<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :search-options="{
        enabled: true,
      }"
      :pagination-options="{
        enabled: true,
        perPage: 5,
      }"
      styleClass="vgt-table condensed"/>
  </div>
</template>

<script>
import { VueGoodTable } from "vue-good-table-next"
export default {
  name: 'TableBase',
  components:{
      VueGoodTable,
  },
  data(){
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
          filterOptions: {
            enabled: true,
          },
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-mm-dd',
          dateOutputFormat: 'mm d yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, createdAt: '2011-10-31',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
        { id:8, name:"Susan", age: 16, createdAt: '2013-10-31', score: 0.03343 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.product-tb {
  // display: flex;
  /* align-items: center;
        justify-content: center; */

  img {
    height: 42px;
    min-width: 54.55px;
    object-fit: cover;
    border-radius: 10px;
    padding: 0.05em;
    background: #c4c4c4;
  }
}</style>
