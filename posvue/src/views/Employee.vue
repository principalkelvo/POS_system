<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="">
    <h2 class="title has-text-weight-bold has-text-white is-size-4">
      {{employee.name}} View
    </h2>
    <!-- Personal info Date of join, birthday, Address,gender, Id no. Nationality Religion marital status
          Bank info Bank name, account number,kra
          Emergency info primary, name relationship phone
          Family info
          Education info
          Experience info -->
    <form @submit.prevent="submitForm">
      <div class="columns is-multiline has-background-white box">
        <!-- upload profile image -->
        <div class="column is-4 m-4">
          <div class="image main_image">
            <img class="p-2" v-bind:src="employee.image"/>

            <!-- <i
              class="bx bx-pencil box is-clickable"
              @click="$refs.file.click()"
            >
            </i>

            <input
              ref="file"
              type="file"
              accept="image/*"
              style="display:none"
              @change="onFileSelected"
              @input="pickFile"
            /> -->
          </div>         
        </div>

        

        <div class="column m-4">
          <div class="field is-horizontal">
            <!-- Name -->
            <div class="field-body">
              <div class="field">
                <label class="label is-uppercase is-size-7">name *</label>
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input is-small"
                    type="text"
                    placeholder="Name"
                    v-model="employee.name"
                  />
                  <span class="icon is-small is-left">
                    <i class="bx bx-user"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <label class="label is-uppercase mt-5 is-size-7">National ID *</label>
          <div class="field is-4">
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input is-small"
                    type="text"
                    v-model="employee.id_card"
                    placeholder="ID number"
                  />
                  <span class="icon is-small is-left">
                    <i class="bx bx-card"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <!-- Name -->
            <div class="field-body">
              <div class="field">
                <label class="label is-uppercase is-size-7">Registration Number *</label>
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input is-small"
                    type="number"
                    placeholder="Registration Number"
                    v-model="employee.reg_no"
                  />
                  <span class="icon is-small is-left">
                    <i class="bx bx-package"></i>
                  </span>
                </p>
              </div>

              <!-- Status -->

              <div class="field">
              <label class="label is-uppercase is-size-7">Status *</label>
                <div class="control">
                  <div class="select is-fullwidth is-small">
                    <select class="select" v-model="employee.status">
                      <option value="inactive">Inactive</option>
                      <option value="active">Active</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal mt-5">
            <!-- Phone -->
            <div class="field-body">
              <div class="field">
                <label class="label is-uppercase is-size-7">Phone Number *</label>
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input is-small"
                    type="tel"
                    placeholder="Phone number"
                    v-model="employee.phone"
                  />
                  <span class="icon is-small is-left">
                    <i class="bx bx-phone"></i>
                  </span>
                </p>
              </div>

              <!-- Email -->
              <div class="field">
                <label class="label is-uppercase is-size-7">Email *</label>
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input is-small"
                    type="email"
                    placeholder="Email"
                    v-model="employee.email"
                  />
                  <span class="icon is-small is-left">
                    <i class="bx bxs-envelope"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal mt-5">
            <!-- location -->
            <div class="field-body">
              <div class="field">
                <label class="label is-uppercase is-size-7">Location *</label>
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input is-small"
                    type="text"
                    placeholder="Location"
                    v-model="employee.location"
                  />
                  <span class="icon is-small is-left">
                    <i class="bx bx-map"></i>
                  </span>
                </p>
              </div>

              <!-- Quantity -->
              <div class="field">
                <label class="label is-uppercase is-size-7">Branch *</label>
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input is-small"
                    type="text"
                    placeholder="Branch"
                    v-model="employee.branch"
                  />
                  <span class="icon is-small is-left">
                    <i class="bx bxs-store"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <!-- Name -->
            <div class="field-body">
              <div class="field">
                <label class="label is-uppercase is-size-7">Position *</label>
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input is-small"
                    type="text"
                    placeholder="Position"
                    v-model="employee.position"
                  />
                  <span class="icon is-small is-left">
                    <i class="bx bx-package"></i>
                  </span>
                </p>
              </div>

              <!-- Marital Status -->

              <div class="field">
                <label class="label is-uppercase is-size-7"
                  >Marital Status *</label
                >
                <div class="control">
                  <div class="select is-fullwidth is-small">
                    <select class="select" v-model="employee.marital_status">
                      <option value="married">Married</option>
                      <option value="single">Single</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- upload all documents -->
          <label class="label is-uppercase mt-5 is-size-7"
            >upload documentation *</label
          >
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input
                    class="input is-small"
                    type="text"
                    v-model="document_tags"
                    placeholder="Documents Tags"
                  />
                </p>
              </div>
            </div>
          </div>

          <!-- <button
            class="button has-text-white has-text-weight-bold is-size-6 is-pink"
          >
            Update
            <i class="bx bx-chevron-down"></i>
          </button> -->

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
  name: "EditEmployee",
  data() {
    return {
      name: "",
      id_card: "",
      reg_no: "",
      emp_status: "active",
      phone: "",
      email: "",
      location: "",
      branch: "", //not added to backend
      position: "",
      marital_status: "single",
      document_tags: "", //not added to backend
      image: "",

      currentImage: undefined,
      previewImage: undefined,
      progress: 0,

      employee:[],
    };
  },

  mounted() {
    this.getEmployee()
  },

  methods: {
    onFileSelected(event) {
      this.currentImage = this.$refs.file.files.item(0);
      this.previewImage = URL.createObjectURL(this.currentImage);
      this.image = event.target.files[0];
      console.log(this.image);
    },

    selectImage(){
      this.$refs.file.click()
    },
    pickFile() {
      let input= this.$refs.file
      let file= input.files
      if(file && file[0]){
        let reader =new FileReader()
        reader.onload= e => {
          this.previewImage= reader.result
          console.log(' image '+this.previewImage)
        }
      reader.readAsDataURL(file[0])
      this.$emit('input',file[0])

      }
    },



    async getEmployee(){
      // const employeeID= this.$route.params.id
      const employeeID= this.$route.params.id
      axios
        .get(`api/v1/employees/${employeeID}/`)
        .then(response=>{
          this.employee= response.data
          console.log(this.employee.id)
        })
        .catch(error=>{
          console.log(error)
        })
    },


    async submitForm() {

      let formData = new FormData();
      formData.append("image", this.image);
      formData.append("name", this.name);
      formData.append("id_card", this.id_card);
      formData.append("reg_no", this.reg_no);
      formData.append("email", this.email);
      formData.append("emp_status", this.emp_status);
      formData.append("phone", this.phone);
      formData.append("position", this.position);
      formData.append("location", this.location);
      formData.append("marital_status", this.marital_status);
      console.log(this.formData);

      
      await axios
        .post("/api/v1/employees/", formData,{
          headers: {
            "Content-Type": "multipart/form-data"
            }
        })
        .then((response) => {
          console.log(response.data);
          toast({
            message:'The employee was successfully created',
            type: 'is-success',
            dismissible:true,
            pauseOnHover:true,
            duration:2000,
            position:'bottom-right',
          })
          this.$router.push('/')
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.main_image {
  width: 100%;
  max-width: 15em;
  height: 17em;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
}
/* .variant_image {
  width: 3em;
  height: 3em;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 1em;
} */
/* .variant_image img {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  background: #c4c4c4;
} */
img {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: contain;
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
.variant_image i {
  position: absolute;
  top: 0.1em;
  right: 0.1em;
  /* border: 1px solid black; */
  border-radius: 5px;
  padding: 0.1em;
}
</style>
