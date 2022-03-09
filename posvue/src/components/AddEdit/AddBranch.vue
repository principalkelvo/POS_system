<template>
  <div class="mt-5">
      <h2
            class="title has-text-weight-bold has-text-white is-size-4"
          >
            Add Branch
          </h2>
            <div class="columns is-multiline has-background-white box">
              <div class="column is-4 m-4">
                <div class="image main_image">
                  <img src="#" alt="" class="p-2" />
                  <i class="bx bx-pencil box"></i>
                </div>
                
              </div>

              <div class="column m-4">
                <div class="field is-horizontal">
                  <!-- Name -->
                  <div class="field-body">
                    <div class="field">
                      <label class="label is-uppercase is-size-7">Branch name *</label>
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input is-small"
                          type="text"
                          placeholder="Branch Name"
                          v-model="Name"
                        />
                        <span class="icon is-small is-left">
                          <i class="bx bxs-business"></i>
                        </span>
                      </p>
                    </div>

                  </div>
                </div>

                <label class="label is-uppercase mt-5 is-size-7">slug *</label>
                <div class="field is-4">
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input
                          class="input is-small"
                          type="text"
                          v-model="slug"
                          placeholder="Slug"
                        />
                      </p>
                    </div>
                  </div>
                </div>

                <label class="label is-uppercase mt-5 is-size-7"
                  >description *</label
                >
                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input
                          class="input is-small"
                          type="text"
                          v-model="description"
                          placeholder="Description"
                        />
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Category tags -->
                <label class="label is-uppercase mt-5 is-size-7"
                  >Location *</label
                >
                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input
                          class="input is-medium"
                          type="text"
                          v-model="location"
                          placeholder="Location"
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
    name:'AddBranch'

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