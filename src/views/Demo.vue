<template>
  <div id="demo-page">
    <div class="demo-container">
      <h1>这里是一个demo示例</h1>
      <p>下面有两个框，就构成品字型的布局啦</p>
    </div>
    <div class="demo-main">
      <demo-component-left></demo-component-left>
      <demo-component-right></demo-component-right>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import DemoComponentRight from '@/components/demo/DemoComponentRight.vue';
import DemoComponentLeft from '@/components/demo/DemoComponentLeft.vue';

export default {
  name: 'demo',
  components: {
    DemoComponentRight,
    DemoComponentLeft
  }
};
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
}
.demo-main {
  width: 1270px;
  height: 500px;
  border: 1px solid salmon;
  display: flex;
}
</style>

