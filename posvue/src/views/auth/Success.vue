<template>
  <section id="cover" class="hero">
    <div id="cover-caption" class="hero-body">
      <div class="container">
        <div class="columns">
          <div
            class="column is-6 is-offset-3 has-background-faded-purple box has-text-white py-4 my-6"
          >
            <div class="logo is-12 is-flex is-justify-content-center">
              <i class="bx bx-smile"></i>
            </div>
            <h1
              class="title has-text-white is-flex is-justify-content-center password mb-1"
            >
              Success !
            </h1>
            <form
              @submit.prevent="submitForm"
              class="is-justify-content-center"
            >
              <div class="field">
                <p class="has-text-centered is-size-7">
                  An email has been sent to youremail@gmail.com. Please check for
                  an email from the company and click to the included link to
                  reset your password
                </p>
              </div>

              <div class="field is-flex is-justify-content-center">
                <div class="control">
                  <button class="button is-pink has-text-white is-small">
                    Back to Home
                  </button>
                </div>
              </div>
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
  name: "Success",
  data() {
    return {};
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

.password {
  white-space: nowrap;
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
