<template>
  <div class="mt-5">
      <h2
            class="title has-text-weight-bold has-text-white is-size-4"
          >
            Transfer
          </h2>
            <div class="columns is-multiline has-background-white box">
              <div class="column is-5 mx-4 mt-4">
                 <div class="field">
                      <label class="label is-uppercase is-size-7"
                        >From *</label
                      >
                      <div class="control">
                        <div class="select is-fullwidth is-small">
                          <select v-model="enquiry">
                            <option>WareHouse</option>
                            <option>Branch</option>
                            <option>Conference</option>
                            <option>enquiry</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="field">
                      <label class="label is-uppercase is-size-7"
                        >To *</label
                      >
                      <div class="control">
                        <div class="select is-fullwidth is-small">
                          <select v-model="enquiry">
                            <option>WareHouse</option>
                            <option>Branch</option>
                            <option>Conference</option>
                            <option>enquiry</option>
                          </select>
                        </div>
                      </div>
                    </div>
                
              </div>

              <div class="column is-5 mx-4 mt-4">
                <div class="field is-horizontal">
                  <!-- Name -->
                  <div class="field-body">

                    <div class="field">
                      <label class="label is-uppercase is-size-7"
                        >Transfer Type *</label
                      >
                      <div class="control">
                        <div class="select is-fullwidth is-small">
                          <select v-model="enquiry">
                            <option>General</option>
                            <option>enquiry</option>
                            <option>Conference</option>
                            <option>enquiry</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                

                <label class="label is-uppercase mt-5 is-size-7"
                  >Quantity *</label
                >
                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input
                          class="input is-small"
                          type="number"
                          v-model="quantity"
                          placeholder="Quantity"
                        />
                      </p>
                    </div>
                  </div>
                </div>
               
              </div>


              <div class="column is-10 mx-4 mb-4">
               <!-- Category tags -->
                <label class="label is-uppercase is-size-7"
                  >Note *</label
                >
                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input
                          class="input is-medium"
                          type="text"
                          v-model="location"
                          placeholder="Note"
                        />
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  class="button has-text-white has-text-weight-bold is-size-6 is-pink"
                >
                  Submit
                  <!-- <i class="bx bx-chevron-down"></i> -->
                </button>
                </div>
            </div>
          </div>
</template>

<script>
export default {
    name:'StockTransfer'

}
</script>

<style scoped>
.main_image {
  width: 15em;
  height: 17em;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
}

 img {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  background: #c4c4c4;
}
.main_image i {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  /* border: 1px solid black; */
  border-radius: 4px;
  padding: 0.1em;
}

</style>