<template>
  <div class="mt-5">
    <h2 class="title has-text-weight-bold has-text-white is-size-4">
      Add Employee
    </h2>
    <!-- Personal info Date of join, birthday, Address,gender, Id no. Nationality Religion marital status
          Bank info Bank name, account number,kra
          Emergency info primary, name relationship phone
          Family info
          Education info
          Experience info -->
    <div class="columns is-multiline has-background-white box">
      
      <form @submit.prevent="submitForm" class="column is-12">
      <div class="column is-4 m-4">
        <div class="image main_image">
          <img class="p-2" v-bind:src="selectedFile" @click="selectImage" />
          <i class="bx bx-pencil box is-clickable" @click="$refs.fileInput.click()">
                    </i>
          <input @input="pickFile" ref="fileInput" type="file" style="display:none" accept='image/*'/>
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
                  v-model="name"
                />
                <span class="icon is-small is-left">
                  <i class="bx bx-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <label class="label is-uppercase mt-5 is-size-7">ID no *</label>
        <div class="field is-4">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input is-small"
                  type="text"
                  v-model="id_card"
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
              <label class="label is-uppercase is-size-7">reg no. *</label>
              <p class="control is-expanded has-icons-left">
                <input
                  class="input is-small"
                  type="number"
                  placeholder="Registration Number"
                  v-model="reg_no"
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
                  <select class="select" v-model="emp_status">
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
              <label class="label is-uppercase is-size-7">Phone *</label>
              <p class="control is-expanded has-icons-left">
                <input
                  class="input is-small"
                  type="tel"
                  placeholder="Phone number"
                  v-model="phone"
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
                  v-model="email"
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
                  v-model="location"
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
                  v-model="branch"
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
                  v-model="position"
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
                  <select class="select" v-model="marital_status">
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

        <button
          class="button has-text-white has-text-weight-bold is-size-6 is-pink"
        >
          Submit
          <!-- <i class="bx bx-chevron-down"></i> -->
        </button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "AddEmployee",
  data() {
    return {
      selectedFile: null,
      name:'',
      id_card:'',
      reg_no:'',
      emp_status:'active',
      phone:'',
      email:'',
      location:'',
      branch:'', //not added to backend
      position:'',
      marital_status:'single',
      document_tags:'', //not added to backend
    };
  },
  methods: {
    async submitForm(){
      console.log("submit")

      const employee={
        name:this.name,
        id_card:this.id_card,
        reg_no:this.reg_no,
        emp_status:this.emp_status,
        phone:this.phone,
        email:this.email,
        location:this.location,
        position:this.position,
        marital_status:this.marital_status,
        get_image:this.selectedFile,
      }

      await axios
        .post('/api/v1/employees/',employee)
        .then(response=>{
          console.log(response)
          this.$router.push('/')
        })
        .catch(error=>{
          console.log(error)
        })
    },


    // onFileSelected(event) {
    //   this.selectedFile = event.target.files[0];
    //   console.log(event);
    //   console.log(this.selectedFile.name);
    // },
    // onUpload(){
    //   const fd= new FormData();
    //   fd.append('image',this.selectedFile,this.selectedFile.name)
    //   this.selectedFile=fd
    //   console.log(this.selectedFile)
    // }

    //upload image and preview
    selectImage(){
      this.$refs.fileInput.click()
    },
    pickFile() {
      let input= this.$refs.fileInput
      let file= input.files
      if(file && file[0]){
        let reader =new FileReader
        reader.onload= e => {
          this.selectedFile=e.target.result
        }
      reader.readAsDataURL(file[0])
      this.$emit('input',file[0])
      }

    }
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
  object-fit:contain;
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
