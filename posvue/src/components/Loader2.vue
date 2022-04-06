<template>
  <div class="main"  v-if="$store.state.isLoading">
    <div class="page-loader">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
    </div>
    <svg>
      <filter id="gooey">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10"/>
        <feColorMatrix values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 20 -10
        "/>
      </filter>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Loader2",
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete"){
        this.$store.commit("setIsLoading", false);
      }
      else if (document.readyState == "interactive"){
        this.$store.commit("setIsLoading", true);
      }
    };
  },
};
</script>

<style lang="scss" scoped>
$colors: #8cc271, #69beeb, #f5aa39, #e9643b;

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #001f25aa;
  z-index: 999;
  position: fixed;
}
.page-loader {
  display: flex;
  // width: 110px;
  // height: 110px;

  // justify-content: center;
  // align-items: center;
  // position: fixed;
  // overflow: hidden;

  top: 0;
  left: 0;
  // width: 100%;
  // height: 100vh;
  // background-color: #333;
  filter:url(#gooey);
  
}

.cube {
  width: 60px;
  height: 60px;
  margin-right: 20px;
  border-radius: 50%;

  //scss magic
  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background-color: nth($colors, $i);
    }
  }
  &:first-child {
    animation: left 2s infinite;
  }
  &:nth-child(2) {
    animation: left 2s infinite 1s;
  }
  &:nth-child(3) {
    animation: right 2s infinite 1s;
  }
  &:last-child {
    animation: right 2s infinite ;
  }
}

@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(50px);
  }
}
@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(-50px);
  }
}

svg{
  width:0;
  height:0;
}
</style>
