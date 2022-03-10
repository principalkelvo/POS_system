<template>
  <div class="mt-5">
      <h2
            class="title has-text-weight-bold has-text-white is-size-4"
          >
            Order No.
          </h2>
            <div class="columns is-multiline has-background-white box">
              <div class="column is-4">
                <div class="image main_image">
                  <img src="@/assets/logo.png" alt="" class="p-2" />
                  <!-- <i class="bx bx-pencil box"></i> -->
                </div>
              </div>
              <div class="column">
                <p> <strong>Order Id : </strong> 00233  </p>
                <p> <strong>Product Name : </strong>product A, productB,</p>
                <p> <strong>Product Id : </strong> 00233  </p>
                <p> <strong>Customer contact : </strong> 079993932  </p>
                <p> <strong>Customer Name : </strong>john Smith</p>
                <p> <strong>Delivery Location : </strong> Nai </p>
                <p> <strong>Order Status : </strong> Shipped  </p>
                <p> <strong>Order Date : </strong> 2/01/2023  </p>
                <p> <strong>Products Quantity : </strong> 2 items  </p>
              </div>

                <div class="column ">
                <p> <strong>Order Manager : </strong> Loris name  </p>
                <p> <strong>Phone Number : </strong> 07999999 </p>
                <p> <strong>Location : </strong> Nai </p>
              </div>
              
            </div>
          </div>
</template>

<script>
export default {
    name:'Order'

}
</script>

<style scoped>
.main_image {
  width: 10em;
  height: 10em;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 1em;
  background: #c4c4c4;

}

 img {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  /* object-fit: cover; */
}
/* .main_image i {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  border-radius: 4px;
  padding: 0.1em;
} */

</style>