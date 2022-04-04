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
      <input
        type="text"
        class="input is-small is-rounded column is-6"
        placeholder="&#xebf7; Search..."
        v-model="searchTerm"
      />
      <vue-good-table
        :columns="columns"
        :rows="rows"        
        :line-numbers="true"
        max-height="500px"
        :search-options="{
          enabled: true,
          externalQuery: searchTerm,
        }"
        :pagination-options="{
          enabled: true,
          mode: 'pages',
          perPage: 5,
        }"
        styleClass="vgt-table condensed"
        compactMode
      >
        <!-- format images -->
        <template #table-row="props">
          <span v-if="props.column.field == 'get_image'">
            <div class="product-tb">
              <img :src="props.row.get_image" class="image mr-2" />
              

            </div>
          </span>

          <span v-else>
            {{ props.formattedRow[props.column.field] }}
          </span>

          <span v-if="props.column.field == 'btn'">

            
            <span class="icon mr-2 is-clickable"
              ><router-link :to="{name:'Employee', params:{id:props.row.id}}"><svg
                xmlns="http://www.w3.org/2000/svg"
                class="is-family-secondary"
                width="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path></svg
            ></router-link></span>

            
            <span class="icon is-clickable">
            <router-link :to="{name:'EditEmployee', params:{id:props.row.id}}"><i class="bx bx-pencil "></i></router-link>
              <!-- {{props.row.id}} -->
              <!-- <i class="bx bx-pencil "></i> -->
            </span>

            <!-- <span class="icon">
              <i class="bx bx-trash is-clickable" style="color: red"></i>
            </span> -->


          </span>
        </template>

        <!-- add action buttons -->
        <template #table-actions>
          <button
            class="button has-text-white has-text-weight-bold is-size-7 is-pink mx-2"
          >
            Submit
            <!-- <i class="bx bx-chevron-down"></i> -->
          </button>

          <button
            class="button has-text-white has-text-weight-bold is-size-7 is-pink mx-2"
          >
            Submit
            <!-- <i class="bx bx-chevron-down"></i> -->
          </button>
        </template>
      </vue-good-table>
    </div>
  </div>
</template>

<script>
import { VueGoodTable } from "vue-good-table-next";
import axios from "axios";
import router from "@/router";

export default {
  name: "Employees",
  data() {
    return {
      searchTerm: "",
      columns: [
        { label: "ID", field: "id", tdClass:'is-size-7' },
        { label: "Employee", field: "get_image", tdClass:'is-size-7'},
        { label: "Number", field: "reg_no", tdClass:'is-size-7' },
        { label: "Name", field: "name", tdClass:'is-size-7' },
        { label: "E-mail", field: "email", width: "20px", tdClass:'is-size-7' },
        { label: "Position", field: "position", tdClass:'is-size-7' },
        { label: "Location", field: "location", tdClass:'is-size-7' },
        { label: "status", field: "status", tdClass:'is-size-7' },
        { label: "Action", field: "btn", html: true },
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
    // dynamicRouterEdit(){
      
    //   router.push({name:'EditEmployee', params:{ id: employee.id}})
    // },
    dynamicRouterView(){
      router.push('/')
    },
    async getEmployees() {
      await axios
        .get("/api/v1/employees/")
        .then((response) => {
          this.rows = response.data;
          console.log(this.rows.id);
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
    width: 54.55px;
    object-fit: cover;
    border-radius: 10px;
    padding: 0.05em;
    background: #c4c4c4;
  }
}
</style>
