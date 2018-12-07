<template>
    <div>
      <home_header></home_header>
      <home_swiper></home_swiper>
    </div>

</template>

<script>
  import home_header from './components/header'
  import home_swiper from './components/swiper'

    export default {
        name: "home",
        components:{
          home_header,
          home_swiper
        }
    }
</script>

<style scoped>

</style>
