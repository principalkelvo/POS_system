<template>
  <div>
    <Asidebar />
    <Navbar />
    <section class="section">
      <router-view />
    </section>
  </div>
    <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Asidebar from "@/components/Asidebar.vue";
import Footer from "@/components/Footer.vue";




export default {
  name: "App",
  components: {
    Navbar,
    Asidebar,
    Footer
  },
};
</script>

<style lang="scss">
@import "@/../node_modules/bulma";
@import "../node_modules/boxicons/css/boxicons.css";


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
</style>
