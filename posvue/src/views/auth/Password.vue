<template>
  <section id="cover" class="hero">
    <div id="cover-caption" class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-5 is-offset-4 has-background-faded-purple box has-text-white p-4 my-6">
            <h1 class="title has-text-white is-flex is-justify-content-center password">Reset Password</h1>
            <form
              @submit.prevent="submitForm"
              class="is-justify-content-center"
            >
              <div class="field">
                <label class="is-size-7">Email</label>
                <div class="control">
                  <input
                    type="email"
                    name="email"
                    class="input is-small"
                    placeholder="Email"
                    v-model="username"
                  />
                </div>
              </div>
              
              <div class="notification is-danger" v-if="errors.length">
                <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
              </div>
              <div class="field is-flex is-justify-content-center">
                <div class="control">
                  <button class="button is-pink has-text-white is-small">
                    Reset
                  </button>
                </div>
              </div>
<!-- 
              <hr />
              <p class="is-size-7">
                Don't have an account yet?<router-link
                  to="/signup"
                  class="has-text-warning"
                >
                  Register
                </router-link><br>
                Or
                <router-link to="/signup" class="has-text-warning">
                  Forgot Password
                </router-link>
              </p> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'
// import {toast} from 'bulma-toast'

export default {
  name: "Password",
  data() {
    return {
      username: "",
      errors: [],
    };
  },
  //   mounted(){
  //     document.title='Welcome | Pokot'
  //   },
  //   methods:{
  //     async submitForm(){
  //       this.$store.commit('setIsLoading',true)
  //       axios.defaults.headers.common['Authorization']='' //reset the authorization
  //       localStorage.removeItem('token') //just to make sure that we are not auntheticated
  //       const formData={
  //         username: this.username
  //       }
  //       await axios
  //         .post('/api/v1/token/login/',formData)
  //         .then(response=>{
  //           const token=response.data.auth_token

  //           this.$store.commit('setToken', token)
  //           axios.defaults.headers.common['Authorization']='Token '+ token
  //           localStorage.setItem('token', token)

  //           //back to previous page or to home
  //           this.$router.push('/success')
  //         })
  //          .catch(error=>{
  //             if(error.response){
  //               for(const property in error.response.data){
  //                 this.errors.push(`${property}:${error.response.data[property]}`)
  //               }
  //             }
  //             else if(error.message){
  //               this.errors.push('Something went wrong. Please try again')
  //             }
  //           })

  //           this.$store.commit('setIsLoading',false)
  //     }
  //   }
};
</script>
<style scoped>
#cover {
  /* background: #222 url('https://unsplash.it/1920/1080/?random') center center no-repeat; */
  background-size: cover;
  height: 87vh;
  text-align: center;
  display: flex;
  align-items: center;
  position: relative;
}

#cover-caption {
  width: 100%;
  position: relative;
  z-index: 1;
}

.password{
    white-space: nowrap
}
/* only used for background overlay not needed for centering */
/* form:before {
  content: "";
  height: 100%;
  left: 18%;
  position: absolute;
  top: 0;
  width: 65%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: -1;
  border-radius: 10px;
} */
.field {
  text-align: left;
}
</style>
