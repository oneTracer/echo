<template>
  <div class="home">
    <p>{{textOne}}</p>
    <p>{{textTwo}}</p>
    <p>{{textThree}}</p>
  </div>
</template>
<script>
export default {
  name: 'demo',
  data() {
    return {
      textOne: '组件化开发，将视图创建在views里，相当于page。',
      textTwo: '然后给每一个视图创建一个路由',
      textThree: '在每个page里面设计组件，放在component里面，并且给他们创建相对应的文件夹存放'
    }
  }
}
</script>
<style lang="less" scoped>
.home > p {
  margin: 0 auto 30px;
  width: 400px;
}
</style>

