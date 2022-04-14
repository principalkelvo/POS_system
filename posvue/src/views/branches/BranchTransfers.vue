<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="">
    <h2 class="title has-text-weight-bold has-text-white is-size-4">
      Branch View
    </h2>
    <!-- Personal info Date of join, birthday, Address,gender, Id no. Nationality Religion marital status
          Bank info Bank name, account number,kra
          Emergency info primary, name relationship phone
          Family info
          Education info
          Experience info -->
    <form @submit.prevent="submitForm">
      <div class="columns is-multiline has-background-white box">
               

        <div class="column is-12 p-5">

          <div class="field is-horizontal">
            <!-- Name -->
            <div class="field-body">
             <div class="field">
              <label class="label is-uppercase is-size-7">from *</label>
                <div class="control">
                  <div class="select is-fullwidth is-small" style="max-width: 32em;">
                    <select class="select"  v-model="from">
                      <option value="inactive">Inactive</option>
                      <option value="active">Active</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Status -->

              <div class="field ">
              <label class="label is-uppercase is-size-7">transfer type *</label>
                <div class="control">
                  <div class="select is-fullwidth is-small" style="max-width: 31.5em;">
                    <select class="select"  v-model="transferType">
                      <option value="inactive">Inactive</option>
                      <option value="active">Active</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <!-- Phone -->
            <div class="field-body">
              <div class="field">
              <label class="label is-uppercase is-size-7">to *</label>
                <div class="control is-expanded">
                  <div class="select is-small" >
                    <select class="select" style="width: 31.5em;"  v-model="to">
                      <option value="inactive">Inactive</option>
                      <option value="active">Active</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal mt-5">
            <!-- location -->
            <div class="field-body">
              <div class="field">
                <label class="label is-uppercase is-size-7">slug *</label>
                <p class="control is-expanded">
                  <input
                    class="input is-small"
                    style="width: 31.5em;"
                    type="text"
                    placeholder="Slug"
                    v-model="slug"
                  />
                </p>
              </div>

              
            </div>
          </div>

          <!-- upload all documents -->
          <label class="label is-uppercase mt-5 is-size-7"
            >Notes *</label
          >
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                    class="input is-small pt-0"
                    style="height: 4.5em;max-width: 73em;"
                    type="text"
                    v-model="notes"
                    placeholder="Notes"
                  />
                </p>
              </div>
            </div>
          </div>

          <div class="column is-12 is-flex is-justify-content-center">

          <button
            class="button has-text-white has-text-weight-bold is-size-6 is-pink"
          >
            Update
            
          </button>
          </div>

        </div>
      </div>
    </form>
  </div>
  </div>
  </section>
  </div>
</template>

<script>
import axios from "axios";
import {toast} from 'bulma-toast'
export default {
  name: "BranchTransfer",
  data() {
    return {
      name: "",
      from: "",
      to: "",
      transferType: "WareHouse",
      slug: "",
      email: "",
      location: "",
      branch: "", //not added to backend
      
      notes: "", //not added to backend
    

      currentImage: undefined,
      previewImage: undefined,
      progress: 0,

      branch:[],
    };
  },


};
</script>
