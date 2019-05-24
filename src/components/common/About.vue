<template>
  <div class="about-wrapper">
    <ul class="about-list">
      <li>
        <div class="tips">DASI</div>
        <div class="cards">武汉大学数据科学与智能实验室</div>
      </li>
      <li>
        <div class="cards">
          <a target="_blank" href="#">实验室概况</a>
        </div>
        <div class="cards">
          <a target="_blank" href="#">科研成果</a>
        </div>
        <div class="cards">
          <a target="_blank" href="#">学术动态</a>
        </div>
        <div class="cards">
          <a target="_blank" href="#">实验室风采</a>
        </div>
      </li>
      <li>
        <div class="tips">联系方式</div>
        <div class="cards">地址：</div>
        <div class="cards">电话：</div>
        <div class="cards">Email：</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'about'
}
</script>
<style lang="less" scoped>
.about-wrapper {
  height: 200px;
  background-color: #f6f9fa;
  padding-top: 40px;
  .about-list {
    display: flex;
    > li {
      width: 200px;
    }
    .tips {
      margin-bottom: 22px;
    }
    .cards {
      // float: left;
      position: relative;
      margin-bottom: 16px;
    }
  }
}
</style>

