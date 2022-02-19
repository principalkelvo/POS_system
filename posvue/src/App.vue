<template>
  <div>
    <Asidebar />
  </div>
</template>

<script>
import Asidebar from "@/components/Asidebar.vue";
export default {
  name: "App",
  components: {
      Asidebar
  },
};
</script>

<style lang="scss">
@import "../node_modules/bulma";
</style>
