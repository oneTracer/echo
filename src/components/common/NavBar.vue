<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">实验室概况</el-menu-item>
      <el-menu-item index="3">科研成果</el-menu-item>
      <el-menu-item index="4">学术动态</el-menu-item>
      <el-submenu index="5">
        <template slot="title">实验室风采</template>
        <el-menu-item index="5-1">实验室成员</el-menu-item>
        <el-menu-item index="5-2">活动风采</el-menu-item>
      </el-submenu>

      <el-menu-item index="6">联系我们</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  name: 'nav-bar',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="less" scoped>
.demo-main {
  width: 600px;
  height: 500px;
  border: 1px solid salmon;
}
</style>

