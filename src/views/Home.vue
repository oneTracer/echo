<template>
  <div id="demo-page">
    <nav-bar></nav-bar>
    <div class="demo-container">
      <div class="carousel-wrapper">
        <Carousel></Carousel>
      </div>
      <div class="demo-main">
        <demo-component-left></demo-component-left>
        <demo-component-mid></demo-component-mid>
        <demo-component-right></demo-component-right>
      </div>
    </div>
    <about></about>
  </div>
</template>
<script>
// @ is an alias to /src
import DemoComponentRight from '@/components/home/DemoComponentRight.vue'
import DemoComponentLeft from '@/components/home/DemoComponentLeft.vue'
import DemoComponentMid from '@/components/home/DemoComponentMid.vue'
import NavBar from '@/components/common/NavBar.vue'
import About from '@/components/common/About.vue'
import Carousel from '@/components/home/Carousel.vue'

export default {
  name: 'home',
  components: {
    DemoComponentRight,
    DemoComponentLeft,
    DemoComponentMid,
    NavBar,
    Carousel,
    About
  }
}
</script>
<style lang="less" scoped>
#demo-page {
  width: 1270px;
  margin: 0 auto;
}
.demo-container {
  width: 1270px;
  border: 1px solid salmon;
  margin-bottom: 10px;

  .carousel-wrapper {
    width: 600px;
    height: 300px;
    margin: 40px auto;
  }
}
.demo-main {
  width: 1270px;
  height: 500px;
  border: 1px solid salmon;
  display: flex;
}
</style>

