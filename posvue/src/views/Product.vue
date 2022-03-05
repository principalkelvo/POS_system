<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="">
          <h2 class="title has-text-weight-bold has-text-black is-size-4">
            Products
          </h2>
          <div class="columns is-fullwidth has-background-white box">
            <div class="column m-2 box has-background-faded-pink">
              <h2
                class="is-size-6 has-text-weight-bold has-text-black is-size-4"
              >
                Add Product
              </h2>

              <img
                class="is-pulled-right image"
                src="../assets/arrows/arrows.svg"
                alt=""
              />
            </div>
            <div class="column m-2 box has-background-faded-pink">
              <h2
                class="is-size-6 has-text-weight-bold has-text-black is-size-4"
              >
                Transferred Products
              </h2>
              <img
                class="is-pulled-right image"
                src="../assets/arrows/arrows2.svg"
                alt=""
              />
            </div>
            <div class="column m-2 box has-background-faded-pink">
              <h2
                class="is-size-6 has-text-weight-bold has-text-black is-size-4"
              >
                Returned Products
              </h2>

              <img
                class="is-pulled-right image"
                src="../assets/arrows/arrows3.svg"
                alt=""
              />
            </div>
            <div class="column m-2 box has-background-faded-pink">
              <h2
                class="is-size-6 has-text-weight-bold has-text-black is-size-4"
              >
                Sold Products
              </h2>

              <img
                class="is-pulled-right image"
                src="../assets/arrows/arrows4.svg"
                alt=""
              />
            </div>
          </div>
          <ReturnedProducts/>

           
        </div>

       

      </div>
    </section>
  </div>
</template>
<script>
import ReturnedProducts from "../components/tables/ReturnedProducts.vue";
export default {
  name: "Product",
  components: {
    ReturnedProducts,
  },
};
</script>

<style scoped></style>
