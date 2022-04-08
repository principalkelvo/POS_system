<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="">
          <h2 class="title has-text-weight-bold has-text-black is-size-4">
            Staff
          </h2>
          <div class="columns is-fullwidth has-background-white box">
            <div class="column m-2 box has-background-faded-pink is-clickable" @click="addEmployee = !addEmployee; handleClicksAdd()">
              <h2
                class="is-size-6 has-text-weight-bold has-text-black is-size-4 has-text-centered"
              >
                Add Employees
              </h2>
            </div>
            <div class="column m-2 box has-background-faded-pink is-clickable" @click="allEmployees= !allEmployees;handleClicksAll()">
              <h2
                class="is-size-6 has-text-weight-bold has-text-black is-size-4 has-text-centered"
              >
                Staff Members
              </h2>
            </div>
            <div class="column m-2 box has-background-faded-pink">
              <h2
                class="is-size-6 has-text-weight-bold has-text-black is-size-4 has-text-centered"
              >
                Recent Employees
              </h2>
            </div>
            <div class="column m-2 box has-background-faded-pink">
              <h2
                class="is-size-6 has-text-weight-bold has-text-black is-size-4 has-text-centered"
              >
                WatchList Employees
              </h2>
            </div>
          </div>
          <AddEmployee v-if="addEmployee===true"/>
          <AllEmployees v-if="allEmployees===true"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AddEmployee from "@/components/AddEdit/AddEmployee.vue";
import AllEmployees from "@/components/tables/AllEmployees.vue";

export default {
  name: "Employees",
  data() {
    return{
      addEmployee: false,
      allEmployees: false,
    }
  },
  components: {
    AddEmployee,
    AllEmployees,
  },
  methods: {
    handleClicksAdd(){
      if(this.addEmployee===true){
        this.allEmployees = false;
        console.log(this.allEmployees)
      }
    },
    handleClicksAll(){      
      if(this.allEmployees===true){
        this.addEmployee=false
        console.log(this.addEmployee)
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.is-clickable:hover {
  background-color: #8a33de;
  border: 2px solid black;  
  transition: all 0.5s ease-out;
  h2{
    color: white !important;
  }
}
</style>
