<template>
  <div class="home">

    <!--header-->
    <section class="hero is-small">
      <div class="hero-body header">
        <p class="subtitle m-0 has-text-weight-bold has-text-white">Good afternoon, Octal inc.</p>
        <p class="has-text-white">Here is what’s happening with your business today</p>
      </div>
    </section>

    <section class="hero is-small">
      <div class="hero-body">
        <div class="columns is-multiline">

          <!-- overview -->
          <div class="column is-8 has-background-white box mr-3">
            <div class="is-flex is-justify-content-space-between">
              <h2 class="subtitle has-text-weight-bold has-text-black is-size-4">Overview</h2>
              <button class="button is-pink is-pulled-right has-text-white">
                All time
                <i class="bx bx-chevron-down"></i>
              </button>
            </div>
            <div class="has-background-pink box is-justify-content-space-between overview_customer">
              <div class="column is-6 has-background-white box mb-0">
                <div class="is-flex is-justify-content-space-between">
                  <p class="has-text-weight-light has-text-black is-size-5">Customers</p>
                  <p class="is-pulled-right customer_incr px-2 is-size-5">8%</p>
                </div>
                <h2
                  class="title is-3 has-text-weight-bold has-text-black has-text-centered pt-2"
                >856,645</h2>
              </div>
              <div class="column is-6 ml-2">
                <div class="is-flex is-justify-content-space-between">
                  <p class="has-text-weight-light has-text-black is-size-5">Income</p>
                  <p class="is-pulled-right income_incr px-2 is-size-5">20%</p>
                </div>
                <div class="income has-text-centered">
                  <h3 class="sub-title is-3 has-text-weight-bold has-text-black mb-0">Ksh</h3>
                  <h3 class="title is-3 has-text-weight-bold has-text-black ml-2">856,645</h3>
                </div>
              </div>
            </div>

            <!-- top employees -->
            <div class="column is-12">
              <h3 class="ml-2 is-size-6">Today's Top Employees</h3>
            </div>
            <div class="columns is-fullwidth mx-1 mb-2">
              <div class="column is-3 is-webkit-center">
                <div class="profile">
                  <img src="../assets/img/CRAZY_BAE.jpg" alt="" class="">
                </div>
                <div class="has-text-weight-bold">Crazy B.</div>
              </div>

              <div class="column is-3 is-webkit-center">
                <div class="profile">
                  <img src="../assets/img/CRAZY_BAE.jpg" alt="" class="">
                </div>
                <div class="has-text-weight-bold">Mwai Kibaki</div>
              </div>

              <div class="column is-3 is-webkit-center">
                <div class="profile">
                  <img src="../assets/img/CRAZY_BAE.jpg" alt="" class="">
                </div>
                <div class="has-text-weight-bold">Kelvin Njoro</div>
              </div>

              <div class="column is-3 is-webkit-center">
                <div class="profile">
                  <img src="../assets/img/CRAZY_BAE.jpg" alt="" class="">
                </div>
                <div class="has-text-weight-bold">Evans Roy</div>
              </div>
            </div>
          </div>

          <!--popular products-->
          <div class="column has-background-white box">
            <h2 class="subtitle has-text-weight-bold has-text-black is-size-4">Popular Products</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.income_incr {
  border-radius: 1em;
  background: #ffffff;
  color: #000000;
}

.customer_incr {
  border-radius: 1em;
  background: #515151;
  color: #24ff00;
}

.home {
  margin: 2em;
}

.header {
  background: linear-gradient(
    90.06deg,
    #000000 -4.66%,
    rgba(94, 94, 94, 0.630208) 66.66%,
    rgba(255, 255, 255, 0) 107.08%
  );
  border-radius: 1em;
}

@media screen and (min-width: 720px) {
  .overview_customer {
    display: flex;
  }

  .income {
    text-align: left !important;
  }
}

@media screen and (max-width: 720px) {
  .home {
    margin: 0;
  }

  .header {
    border-radius: 0;
  }
}

.profile {
  width: 6em;
  height: 6em;
  /* background: url("../assets/img/CRAZY_BAE.jpg"); */
  border: 2px #660746;
  color: #f9e2e3;
  /* border-radius: 50%; */
  background-repeat: round;
  margin: 0.5em;
  /* change to black and white  */
  /* -webkit-filter: grayscale(100%);  Safari 6.0 - 9.0*/
  /*filter: grayscale(100%); */
  transition: box-shadow 0.6s ease-in-out;
}
img{
  width: 100%;
  height: 100%;
  border-radius: 50%;

}
.profile:hover {
  box-shadow: 0 0 0 0.125em rgb(102 7 70 / 25%);
}
@media (max-width: 768px) {
  .profile {
    width: 4em;
    height: 4em;
  }
}
@media (min-width: 1025px) {
  .profile {
    width: 7em;
    height: 7em;
  }
}
</style>
<style>
.has-background-pink,
.is-pink {
  background: #dd51ed;
}
.is-webkit-center {
  text-align: -webkit-center;
}
</style>
