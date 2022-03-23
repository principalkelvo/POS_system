<template>
  <div class="mt-5">
          <h2
            class="title has-text-weight-bold has-text-black is-size-4"
          >
            Employees
          </h2>
          <!-- <div class="column has-background-white box"></div> -->

          <table class="table is-fullwidth box">
            <thead>
              <tr>
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
              <tr v-for="employee in employees" v-bind:key="employee.id">
                <td>{{employee.get_thumbnail}}</td>
                <td>{{employee.reg_no}}</td>
                <td>{{employee.name}}</td>
                <td>{{employee.email}}</td>
                <td>{{employee.position}}</td>
                <td>{{employee.branch}}</td>
                <td>{{employee.status}}</td>
                <td></td>
                </tr>
            </tbody>
          </table>
          
        </div>
</template>

<script>
import axios from "axios";
export default {
    name:'Employees',
    data(){
      return{
        employees: []
      }
    },
    mounted(){
      this.getEmployees()
    },
    methods: {
      async getEmployees(){
        await axios
          .get('api/v1/employees/')
          .then(response =>{
            this.employees = response.data
          })
          .catch(error=>{
            console.log(error)
          })
      }
    }

};
</script>

<style></style>
