<template>
  <div class="home">
    <app-header></app-header>
    <el-container class="m-auto" direction="vertical" style="width: 1200px;">
      <div class="py-3">
        <el-row class="personal-information-board d-flex align-items-center">
          <el-col :span="12" class="d-flex justify-content-center">
            <div>
              <h1>黄烁的个人博客</h1>
              <h5>世上最痛苦的事，是活着，世上最快乐的事，是活着！</h5>
            </div>
          </el-col>
          <el-col :span="12" class="d-flex justify-content-center">
            <div class="img-box d-flex align-items-center justify-content-center"><img class="w-100" src="../assets/images/jump.png"></div>
          </el-col>
        </el-row>
      </div>
      <el-row>
        <el-col :span="13" class="pr-2">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
              <img class="w-100" src="../assets/images/洱海.jpg">
            </swiper-slide>
            <swiper-slide>
              <img class="w-100" src="../assets/images/洱海和你.jpg">
            </swiper-slide>
            <swiper-slide>
              <img class="w-100" src="../assets/images/雪景.jpg">
            </swiper-slide>
            <swiper-slide>
              <img class="w-100" src="../assets/images/夜景.jpg">
            </swiper-slide>
            <div class="swiper-button-left el-icon-arrow-left" slot="button-next"></div>
            <div class="swiper-button-right el-icon-arrow-right" slot="button-prev"></div>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </el-col>
        <el-col :span="11" class="pl-2">
          <el-row class="d-flex align-items-stretch">
            <el-col :span="13" class="pr-2">
              <div class="w-100 pb-2">
                <img class="w-100" style="height: 153px" src="../assets/images/洱海和你.jpg">
              </div>
              <div class="w-100 pt-2">
                <img class="w-100" style="height: 153px" src="../assets/images/洱海和你.jpg">
              </div>
            </el-col>
            <el-col :span="11" class="pl-2 d-flex align-items-stretch">
              <div class="w-100 px-2 py-3 business-card text-white">
                <p class="font-weight-bold mb-5" style="font-size: 28px;">个人名片</p>
                <p>姓名：黄烁</p>
                <p>职业：Web前端开发工程师</p>
                <p>工龄：4年</p>
                <p>现居：贵州-贵阳</p>
                <p>E-mail：mailhuangshuo@163.com</p>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'home',
  components: {
    AppHeader
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000
        },
        loop: true,
        speed: 3000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'swiper-bullet',
          bulletActiveClass: 'swiper-bullet-active'
        },
        navigation: {
          nextEl: '.swiper-button-right',
          prevEl: '.swiper-button-left'
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
  .personal-information-board{
    background-color: rgb(224, 224, 224);
    border-radius: 5px;
    height: 400px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 7px -1px #444;
    &::after{
      content: '';
      position: absolute;
      right: 20px;
      top: -30px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-color: #737373;
      box-shadow: 8px 8px 15px -5px #737373,-550px 120px 0px -30px rgb(115, 115, 174),-542px 128px 15px -35px rgb(115, 115, 174);
    }
    &::before{
      content: '';
      position: absolute;
      left: 45%;
      bottom: -30px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-color: rgb(144, 139, 115);
      box-shadow: 8px 8px 15px -5px rgb(144, 139, 115), -240px -40px 0px -20px rgb(144, 114, 115), -232px -32px 15px -25px rgb(144, 114, 115);
    }
  }
  .img-box{
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 50%;
    border: 5px solid whitesmoke;
    box-shadow: 8px 8px 15px -5px rgba(0, 0, 0, 0.2);
  }
  .my-bullet{
    border-radius: .02rem;
    width: .04rem;
    height: .04rem;
    margin: 0 .03rem;
    display: inline-block;
    background: rgba(0,0,0,0.20);
  }
  .my-bullet-active{
    background: #3CDBC0;
    width: .16rem;
  }
  .business-card{
    background-color: #666666;
  }
  .swiper-button{
    &-left{
      position: absolute;
      top: 50%;
      left: 10px;
      font-size: 30px;
      color: whitesmoke;
      margin-top: -15px;
      z-index: 10;
      cursor: pointer;
      &:hover{
        color: #409EFF;
      }
    }
    &-right{
      position: absolute;
      top: 50%;
      right: 10px;
      font-size: 30px;
      color: whitesmoke;
      margin-top: -15px;
      z-index: 10;
      cursor: pointer;
      &:hover{
        color: #409EFF;
      }
    }
  }
</style>
<style lang="scss">
  .swiper-bullet{
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #fff;
    opacity: 0.5;
    margin: 0 4px;
    &-active{
      opacity: 1;
      background: #409EFF;
    }
  }
</style>
