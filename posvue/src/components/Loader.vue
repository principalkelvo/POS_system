<template>
<div class="main"  v-if="!$store.state.isLoading">
    
    <div class="loader1">
        <span style="--i:1;"> </span>
        <span style="--i:2;"> </span>
        <span style="--i:3;"> </span>
        <span style="--i:4;"> </span>
        <span style="--i:5;"> </span>
        <!-- <span style="--i:6;"> </span>
        <span style="--i:7;"> </span>
        <span style="--i:8;"> </span>
        <span style="--i:9;"> </span>
        <span style="--i:10;"> </span> -->
    </div>
    
</div>
</template>
<script>
export default {
    name:'loader',
    mounted() {
        document.onreadystatechange=() =>{
            if(document.readyState=='complete')[
                this.$store.commit('setIsLoading',true)
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.main{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    background:#001f25;
}
.loader1{
    position:relative;
    width: 110px;
    height: 110px;
}
.loader1 span{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(72deg*var(--i)));
}
.loader1 span::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: transparent;
    border: 4px solid #00efff;
    box-shadow: 0 0 10px #00efff,
                -20px -20px 0 #00efff,
                -20px -20px 10px  #00efff,
                20px 20px 0 #00efff,
                20px 20px 10px #00efff,
                20px -20px 0 #00efff,
                20px -20px 10px #00efff,
                -20px 20px 0 #00efff,
                -20px 20px 10px #00efff,;
    transition:2s;
    transform-origin: 20px;
    animation:animate 5s linear infinite;
    animation-delay: calc(0.5s * var(--i));
}

.loader1:hover span::before{
    box-shadow:0 0 20px #00efff,
                -200px -200px 0 #00efff,
                -200px -200px 20px  #00efff,
                200px 200px 0 #00efff,
                200px 200px 20px #00efff,
                200px -200px 0 #00efff,
                200px -200px 20px #00efff,
                -200px 200px 0 #00efff,
                -200px 200px 20px #00efff,;
    transform-origin:250px;
}

@keyframes animate{
    0%{
        transform:rotate(0deg);
        filter: hue-rotate(0deg);
    }
    100%{
        transform:rotate(360deg);
        filter: hue-rotate(360deg);
    }
}

</style>