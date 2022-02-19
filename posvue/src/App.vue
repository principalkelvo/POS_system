<template>
  <div>
    <Asidebar />
    <Navbar />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Asidebar from "@/components/Asidebar.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Asidebar,
  },
};
</script>

<style lang="scss">
@import "@/../node_modules/bulma";
@import "../node_modules/boxicons/css/boxicons.css";
</style>
