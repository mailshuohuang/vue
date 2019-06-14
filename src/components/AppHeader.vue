<template>
    <el-header class="app-menu w-100">
      <div class="d-flex align-items-center m-auto" style="width: 1200px">
        <div class="d-flex align-items-center mx-5">
          <div class="user-image mr-3 d-flex align-items-center justify-content-center"><img class="w-100" src="../assets/images/user-image.jpg"></div>
          <h1 class="text-white font my-0 mr-5">黄烁的个人博客</h1>
        </div>
        <el-menu
          class="flex-grow-1"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :default-active="headerMenuItemActive">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">个人博客</el-menu-item>
          <el-menu-item index="3">开发心得</el-menu-item>
          <el-menu-item index="4">博客日记</el-menu-item>
          <el-menu-item index="5">时间导航</el-menu-item>
          <el-menu-item index="6">关于我</el-menu-item>
        </el-menu>
      </div>
    </el-header>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      headerMenuItemActive: '1'
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .app-menu{
    background-color: #545c64;
    box-shadow: 0 0 3px 0 black;
  }
  .user-image{
    width: 40px;
    height: 40px;
    border: 2px solid whitesmoke;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0px 0px 5px 0px #fff;
  }
</style>
