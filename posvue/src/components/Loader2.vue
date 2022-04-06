<template>
<div class="main" >
  <div class="page-loader" >
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
  </div>
</template>

<script>
export default {
  name:'Loader2',
  mounted() {
        document.onreadystatechange=() =>{
            if(document.readyState=='complete')[
                this.$store.commit('setIsLoading',true)
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
$colors: #8cc271, #69beeb, #f5aa39, #e9643b;

.main{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    background:#001f25aa;
    z-index: 999;
  position:fixed;

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
  
}

.cube {
  width: 40px;
  height: 40px;
  margin-right: 10px;

  //scss magic
  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background-color: nth($colors, $i);
    }
  }
  &:first-child {
    animation: left 1s infinite;
  }
  &:last-child {
    animation: right 1s infinite 0.5s;
  }
}

@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0);
  }
}
@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0);
  }
}
</style>
