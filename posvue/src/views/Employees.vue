<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="">
          <h2 class="title has-text-weight-bold has-text-black is-size-4">
            Staff
          </h2>
          <div class="columns is-fullwidth has-background-white box">
            <div class="column m-2 box has-background-faded-pink">
              <h2
                class="is-size-6 has-text-weight-bold has-text-black is-size-4 has-text-centered"
              >
                Add Staff
              </h2>
            </div>
            <div class="column m-2 box has-background-faded-pink">
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
          <AllEmployees/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AddEmployee from "../components/AddEdit/AddEmployee.vue";
import AllEmployees from "../components/tables/AllEmployees.vue";
import Employee from "../components/ViewEach/Employee.vue";
import TableBase from "../components/tables/TableBase.vue";

export default {
  name: "Employees",
  components: {
    AddEmployee,
    AllEmployees,
    Employee,
    TableBase
  },
};
</script>

<style scoped></style>
