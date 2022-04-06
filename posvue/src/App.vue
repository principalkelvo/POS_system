<template>
  <div id="app">
    <!-- <Loader/> -->
    <Loader2  v-if="$store.state.isLoading"/>
    <Asidebar />
    <Navbar />
    <section class="section">
      <router-view />
    </section>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";

import Navbar from "@/components/Navbar.vue";
import Asidebar from "@/components/Asidebar.vue";
import Footer from "@/components/Footer.vue";
import Loader2 from "@/components/Loader2.vue";
import Loader from "@/components/Loader.vue";




export default {
  name: "App",
   
  components: {
    Navbar,
    Asidebar,
    Footer,
    Loader2,
    Loader
  },
  beforeCreate() {
    this.$store.commit('initializeStore')
    const token= this.$store.state.token
    // check if token exists
    if(this.$store.state.token){
      axios.defaults.headers.common['Authorization']= "Token "+ this.$store.state.token
    }
    else{
      axios.defaults.headers.common['Authorization']=" "
    }
  },
  data() {
    return {
      width: window.innerWidth, 
      height: window.innerHeight
    };
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  mounted() {
    this.onResize();

  },
  methods:{
    onResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      console.log(this.width +'port'+ this.height)
      if (this.width<=768){
      let sidebar = document.querySelector(".sidebar");
                let menu = document.querySelector(".menu");
                console.log(menu);
                sidebar.classList.add("close");
                console.log('menu');}
    },
  },
  
};
</script>

<style lang="scss">
@import "@/../node_modules/bulma";
@import "../node_modules/boxicons/css/boxicons.min.css";


#app{
  background: linear-gradient(122.46deg, #DD51ED 11.61%, rgba(221, 81, 237, 0.35) 103.87%);
}

nav.navbar {
  background: linear-gradient(
    90.65deg,
    #8a33de 21.43%,
    rgba(147, 98, 247, 0.71) 112.7%
  );
  left: 260px;
  width: calc(100% - 260px);
  padding: 0 10px;
  transition: all 0.5s ease;
}

.sidebar.close ~ .navbar {
  left: 78px;
  width: calc(100% - 78px);
}


section.section {
  position: relative;
  left: 260px;
  width: calc(100% - 260px);
  padding: 0 10px;
  transition: all 0.5s ease;
}
.sidebar.close ~ .section {
  left: 78px;
  width: calc(100% - 78px);
}
.sidebar.close ~ .footer {
  left: 78px;
  width: calc(100% - 78px);
}
@media screen and (max-width: 720px){
   section.section {
    padding:0 !important;
    margin:0 !important;
  }
}
@media screen and (max-width: 425px){
  .sidebar.close ~ .section {
  opacity:1;
  transition: all 0.4s ease;
}
.sidebar.close ~ .footer {
  opacity:1;
  transition: all 0.4s ease;
}
  .sidebar ~ .section{
    opacity:0;
  }
  .sidebar ~ .footer{
    opacity:0;

  }
  .title.is-3 {
    font-size: 1.4rem;
}
.subtitle.is-size-5 {
    font-size: 1rem !important;
}
}
</style>
