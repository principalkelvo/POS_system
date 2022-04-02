<template>
  <div class="mt-5">
    <h2 class="title has-text-weight-bold has-text-black is-size-4">
      Employees
    </h2>
    <div class="column is-12 is-fullwidth box">
      <!-- <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>ID (reg no.)</th>
            <th>Name</th>
            <th>Contacts</th>
            <th>Position</th>
            <th>Branch</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" v-bind:key="row.id">
            <td>{{ row.id }}</td>

            <td class="product-tb has-text-left">
              <div class="image mr-2">
                <img :src="row.get_image" class="" />
              </div>
            </td>
            <td>{{ row.reg_no }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.email }}</td>
            <td>{{ row.position }}</td>
            <td>{{ row.branch }}</td>
            <td>{{ row.status }}</td>
            <td>{{ row.created_by }}</td>
          </tr>
        </tbody>
      </table> -->
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
      styleClass="vgt-table condensed"
    >
      <template #table-row="props">
        <span v-if="props.column.field == 'get_image'">
          <div class="product-tb">
                <img :src="props.row.get_image" class="image mr-2" />
              </div>
        </span>
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>

      <template slot="table-column" slot-scope="props">
        <span v-if="props.column.label == 'Name'">
          <i class="bx bx-book-alt"></i> {{ props.column.label }}
        </span>
        <span v-else>
          {{ props.column.label }}
        </span>
      </template>
    </vue-good-table>
    </div>

    
  </div>
</template>

<script>
import { VueGoodTable } from "vue-good-table-next";
import axios from "axios";

export default {
  name: "Employees",
  data() {
    return {
      columns: [
        { label: "ID", field: "id" },
        { label: "Employee", field: "get_image" },
        { label: "Registration Number", field: "reg_no" },
        { label: "Name", field: "name" },
        { label: "E-mail", field: "email" },
        { label: "Position", field: "position" },
        { label: "Location", field: "location" },
        { label: "status", field: "status" },
      ],
      rows: [],
    };
  },
  components: {
    VueGoodTable,
  },
  mounted() {
    this.getEmployees();
  },
  methods: {
    // rowStyleClass(row){
    //   if(row.image){
    //   const image= new Image;
    //   image.src= row.image
    //   row.image=== image
    //   return row.image
    //   }
    //   else{console.log("Imaaage")}
    // },
    async getEmployees() {
      await axios
        .get("/api/v1/employees/")
        .then((response) => {
          this.rows = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
}
</style>
