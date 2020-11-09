<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <van-cell-group>
      <h2 class="h2">示例模块</h2>
      <van-cell title="社会保险单位参保登记" is-link to="demo" />

    </van-cell-group>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
}
</script>
<style lang="less" scoped>
.h2{
  font-size: 48px;
  line-height: 2;
  padding: 0 22px;
  border-bottom: 1px solid #d6d6d6;
}
/deep/.van-index-anchor{
color: #aaa;
}
</style>
