<template>
  <div class="personal-page">
    <div class="personal-content">
      <div class="personal-panel">
        <div class="personal-info">
          <img src="../assets/personal/avtar.jpg" alt />
          <div class="info">
            <p><b>学员姓名：</b>王一帆 </p>
            <p><b>身份证号：</b>3222221512545138</p>
            <p><b>专业名称：</b>工程管理</p>
            <p><b>准考证号：</b>22462454487525</p>
            <p style="font-family:'Lisu';font-size:21px;">天道酬勤，只要坚持就能胜利，加油！</p>
          </div>
        </div>
        <div class="personal-menu">
          <div class="menu-item"></div>
          <div class="menu-item"></div>
          <div class="menu-item"></div>
          <div class="menu-item"></div>
        </div>
      </div>
    </div>
    <div class="class-panel">
        <div class="title"></div>
        <div class="courses">
          <div class="course">
            <img src="../assets/personal/course-img.jpg" alt="">
            <div class="course-info">
              <p>课程设计与开发</p>
              <!-- <p>进度条</p> -->
              <el-progress percentage=50></el-progress>
              <el-button round style="margin-top:10px;">进入学习</el-button>
            </div>
          </div>
          <div class="course">
            <img src="../assets/personal/course-img.jpg" alt="">
            <div class="course-info">
              <p>课程设计与开发</p>
              <!-- <p>进度条</p> -->
              <el-progress percentage=100>已完成</el-progress>
              <el-button round style="margin-top:10px;">进入学习</el-button>
            </div>
          </div>
          <div class="course">
            <img src="../assets/personal/course-img.jpg" alt="">
            <div class="course-info">
              <p>课程设计与开发</p>
              <!-- <p>进度条</p> -->
              <el-progress percentage=0></el-progress>
              <el-button round style="margin-top:10px;">进入学习</el-button>
            </div>
          </div>
          <div class="course">
            <img src="../assets/personal/course-img.jpg" alt="">
            <div class="course-info">
              <p>课程设计与开发</p>
              <!-- <p>进度条</p> -->
              <el-progress percentage=30></el-progress>
              <el-button round style="margin-top:10px;">进入学习</el-button>
            </div>
          </div>
          <div class="course">
            <img src="../assets/personal/course-img.jpg" alt="">
            <div class="course-info">
              <p>课程设计与开发</p>
              <!-- <p>进度条</p> -->
              <el-progress percentage=100>已完成</el-progress>
              <el-button round style="margin-top:10px;">进入学习</el-button>
            </div>
          </div>
          <div class="course">
            <img src="../assets/personal/course-img.jpg" alt="">
            <div class="course-info">
              <p>课程设计与开发</p>
              <!-- <p>进度条</p> -->
              <el-progress percentage=100>已完成</el-progress>
              <el-button round style="margin-top:10px;">进入学习</el-button>
            </div>
          </div>
        </div>
        <!-- <div class="subject">
          <Course></Course>
        </div> -->
      </div>
  </div>
</template>

<script>
// import Course from '../components/Course'
export default {
  components:{
    // Course
  }
};
</script>

<style lang="scss" scope>
.personal-page {
  display: flex;
  justify-content: center;
  width: 100%;
  background-size: cover;
  flex-direction: column;
  margin-bottom: 20px;
  .personal-content {
    width: 100%;
    background: url("../assets/personal/personal-back.png") no-repeat 50% 50%;
    height: 100%;
    background-size: cover;
    .personal-panel {
      display: flex;
      justify-content: space-around;
      width: 100%;
      height: 180px;
      .personal-info {
        color: #ffffff;
        font-size: 14px;
        width: 35%;
        line-height: 180px;
        img {
          width: 150px;
          height: 150px;
          vertical-align: middle;
        }
        .info{
          float:right;
          line-height:20px;
          p:nth-chid(-1){
            font-family: "隶书" 
          }
        }
      }
      .personal-menu {
        display: flex;
        align-items: center;
        width: 30%;
        justify-content: space-around;
        .menu-item {
          width: 80px;
          height: 80px;
          background: url('../assets/personal/myclasses.png') no-repeat 50% 50%;
        }
      }
    }
  }
    .class-panel{
      margin-top: 20px;
      height: 100%;
      width: 80%;
      align-self: center;
      .title{
        background: url("../assets/personal/class-ttle.png") no-repeat 50% 50%;
        width: 156px;
        height: 36px;
      }
      .courses{
        margin-top: 36px;
        display: flex;
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        .course{
          width: 238px;
          height: 260px;
          border-radius: 4px;
          border: 1px solid rgba($color: #cccccc, $alpha: 0.5);
          box-shadow: #333;
          margin-right: 40px;
          margin-top: 20px;
          img{
            width: 240px;
            height: 120px;
          }
          .course-info{
            text-align: center;
            
          }
        }
      }
    }
}
</style>