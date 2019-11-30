<template>
  <div class="top-bar">
    <div class="top-content">
      <div class="brand">
        <div class="brand-img"></div>
        <div class="brand-name">
          <span class="ch-name">高等教育学习网站</span>
          <span class="en-name">SELF-STUDY EXAMINATION ONLINE STUDENT AID PLATFO</span>
        </div>
      </div>
    </div>
    <div class="menu">
        <ul class="menu-wrap" @click="handleSelect">
          <li :class="activeIndex==='1'?selected:unselected" data-index="1">网课学习</li>
          <li :class="activeIndex==='2'?selected:unselected" data-index="2">个人报考</li>
          <li :class="activeIndex==='3'?selected:unselected" data-index="3">我的成绩</li>
          <li :class="activeIndex==='4'?selected:unselected" data-index="4">政策须知</li>
        </ul>
        <!-- <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" class="menu-wrap">
          <el-menu-item index="1" class="menu-item">网课学习</el-menu-item>
          <el-menu-item>个人报考</el-menu-item>
          <el-menu-item>我的成绩</el-menu-item>
          <el-menu-item>政策须知</el-menu-item>
        </el-menu> -->
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      activeIndex:'1',
      selected:['menu-item','selected'],
      unselected:['menu-item']
    }
  },
  methods:{
    handleSelect(e){
      let tolinks = ['/personal','/myexam','mygrade','mypolicy']
      let target = tolinks[parseInt(e.target.dataset['index'])-1]
      this.activeIndex =e.target.dataset['index']
      console.log(this.activeIndex)
      this.$router.push({
        path:target
      })
    }
  }
};
</script>

<style lang="scss" scope>
.top-bar {
  background: #595050;
  width: 100%;
  height: 55px;
  font-family: "微软雅黑";
  display: flex;
  justify-content: center;
  position: relative;
  .top-content {
    width: 80%;
    display: flex;
    justify-content: space-between;
    .brand {
      display: flex;
      .brand-img {
        width: 50px;
        height: 50px;
        background-size: cover;
        background: url("../assets/personal/brand-img.png") no-repeat 50% 50%;
      }
      .brand-name {
        background: url("../assets/personal/brand-back.png") no-repeat 0% 60%;
        color: white;
        width: 525px;
        line-height: 55px;
        .ch-name {
          font-size: 20px;
        }
        .en-name {
          font-size: 10px;
          margin-left: 30px;
          padding-top: 20px;
          vertical-align: sub;
        }
      }
    }
  }
  .menu {
      background: url("../assets/personal/menus.png") no-repeat 50% 50%;
      position: absolute;
      width: 400px;
      height: 35px;
      background-size: cover;
      right: 0;
      top: 30px;
      color: #111111;
      font-size: 12pt;
      z-index:1;
      .menu-wrap {
        list-style: none;
        padding-left: 115px;
        margin: 0px;
        display: flex;
        justify-content: space-around;
        line-height: 35px;
        .menu-item {
          float: left;
          cursor: pointer;
        }
        .selected{
          border-bottom: solid orange 2px;
        }
      }
    }
}
</style>