<template>
  <div class="login_page">
    <div class="login_box"></div>
  </div>
</template>
<style lang="less" scoped>
.login_page {
  width: 100%;
  height: 100%;
  background-color: aqua;
  .login_box {
    // 居中显示 我们先不关心具体样式如何 关心盒子该怎么摆放 组件之间的关系
    position: absolute;
    width: 450px;
    height: 300px;
    background-color: white;
    border-radius: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
<script>
export default {
  name: 'Login',
  data: function () {
    return {}
  },
  methods: {}
}
</script>
