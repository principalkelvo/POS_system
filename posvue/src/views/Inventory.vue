<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="columns is-fullwidth has-background-white box">
          <div class="column m-2 box has-background-faded-pink">
            <h2 class="is-size-6  has-text-weight-bold has-text-black is-size-4">
              Items Ordered
            </h2>
            <h3 class="is-size-5 has-text-centered has-text-weight-bold items_ordered">2,465</h3>

            <img
              class="is-pulled-right"
              src="../assets/arrows/arrows.svg"
              alt=""
            />
          </div>
          <div class="column m-2 box has-background-faded-pink">
              <h2 class="is-size-6 has-text-weight-bold has-text-black is-size-4 ">
              Items Received
            </h2>
            <h3 class="is-size-5 has-text-centered has-text-weight-bold items_received">2,465</h3>
            <img
              class="is-pulled-right"
              src="../assets/arrows/arrows2.svg"
              alt=""
            />
          </div>
          <div class="column m-2 box has-background-faded-pink">
              <h2 class="is-size-6 has-text-weight-bold has-text-black is-size-4">
              Items Out of stock
            </h2>
            <h3 class="is-size-5 has-text-centered has-text-weight-bold items_out_stk">2,465</h3>

            <img
              class="is-pulled-right"
              src="../assets/arrows/arrows3.svg"
              alt=""
            />
          </div>
          <div class="column m-2 box has-background-faded-pink">
              <h2 class="is-size-6 has-text-weight-bold has-text-black is-size-4">
              Items Sold
            </h2>
            <h3 class="is-size-5 has-text-centered has-text-weight-bold items_sold">2,465</h3>

            <img
              class="is-pulled-right"
              src="../assets/arrows/arrows4.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Inventory",
};
</script>

<style scoped>
.items_ordered{
    color:#958F00
}
.items_received{
    color:#169A00
}
.items_out_stk{
    color:#FF0000
}
.items_sold{
    color:#8A33DE
}
</style>
