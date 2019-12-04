/*
 * @Author: lau.lucis 
 * @Date: 2019-12-04 21:25:50 
 * @Last Modified by: lau.lucis
 * @Last Modified time: 2019-12-04 21:44:18
 */
<template>
  <div class="personal-page">
    <div class="personal-content">
      <div class="personal-panel">
        <div class="personal-info">
          <div class="personal-avtar"></div>
          <div class="info">
            <p><b>Hi! &nbsp;</b>{{student.name}}</p>
            <p><b>身份证号：</b>{{student.idnumber}}</p>
            <p><b>专业名称：</b>{{student.major}}</p>
            <p><b>准考证号：</b>{{student.examCode}}</p>
            <p style="font-family:'Lisu';font-size:21px;">天道酬勤，只要坚持就能胜利，加油！</p>
          </div>
        </div>
        <div class="personal-menu">
          <div class="menu-item">
          </div>
          <div class="menu-item"></div>
          <div class="menu-item">
            <div class="icon-setting"></div>
            <div>设置</div>
          </div>
          <div class="menu-item" @click="logout">
            <div class="icon-quit"></div>
            <div>退出</div>
          </div>
        </div>
      </div>
    </div>
    <div class="class-panel">
         <el-tabs v-model="activeTab" @tab-click="handleClick">
            <el-tab-pane label="正在进行" name="first">
              <el-row :gutter="40" type="flex" style="flex-wrap:wrap;">
                <el-col :span="5" v-for="(item) in student.courses" :key="item.vid">
                  <div class="course">
                    <div class="course-img">
                    </div>
                    <div class="course-info">
                      <p>{{item.coursename}}</p>
                      <div class="course-personal">
                      <div class="status">
                        已学{{item.finishedClass}}/{{item.totalClass}}课时
                        <el-progress :percentage="Math.floor(item.finishedClass*100/item.totalClass)" color="#355f7d"></el-progress>
                      </div>
                      <el-button size="medium" round>去学习</el-button>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="已完成" name="second">
              <el-row :gutter="40" type="flex" style="flex-wrap:wrap;">
                <el-col :span="5" v-for="(item) in student.courses" :key="item.vid">
                  <div class="course">
                    <div class="course-img">
                    </div>
                    <div class="course-info">
                      <p>{{item.coursename}}</p>
                      <div class="course-personal">
                      <div class="status">
                        已学完
                        <el-progress :percentage="100" color="#355f7d"></el-progress>
                      </div>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      student:{
        name:'',
        idnumber:'',
        examCode:'',
        major:'',
        avatar:'',
        courses:[
          {
            coursePost:'',
            coursename:'',
            finishedClass:0,
            totalClass:50,
            vid:''
          }
        ]
      },
      activeTab:'first'
    }
  },
  mounted(){
    this.setStudentInfo()
  },
  methods:{
    /**
     * @Author lau
     * @Description 设置学员信息
     * @Date 2019-12-04 21:28:12 星期三
     */
    setStudentInfo(){
      this.student = this.$store.state.userInfo
      console.log( this.$store.state.userInfo)
    },
    handleClick(){
      
    },
    logout(){
      this.$store.dispatch('logout').then(()=>{
        this.$message.success('登出成功！')
        this.$router.push({path:'/login'})
      })
    }
  }
};
</script>

<style lang="scss" scope>
.personal-page {
  font-family: 微软雅黑, "Microsoft YaHei";
  display: flex;
  justify-content: center;
  width: 100%;
  background-size: cover;
  flex-direction: column;
  margin-bottom: 20px;
  .personal-content {
    width: 100%;
    background:rgba(173,218,251,1);
    height: 100%;
    background-size: cover;
    .personal-panel {
      display: flex;
      justify-content: space-between;
      max-width: 1260px;
      margin: 0 auto;
      height: 220px;
      padding:0 20px;
      .personal-info {
        color: #606266;
        font-size: 14px;
        width: 45%;
        line-height: 220px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .personal-avtar {
          width: 102px;
          height: 102px;
          border-radius: 50px;
          background: url('../assets/personal/personal-avtar.png') no-repeat;
          background-size: cover;
        }
        .info{
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
        color: #303133;
        text-align: center;
        .menu-item {
          height: 80px;
          font-size: 18px;
          cursor: pointer;
          div{
            padding: 5px 0px;
          }
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
    }
}
.course{
  width: 100%;
  border: 1px solid #EDEDED;
  position: relative;
  height: 255px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 8px;
  }
  .course-img {
    background: url('../assets/personal/course-img.jpg') no-repeat;
    background-size: cover;
    width: 100%;
    height: 110px;
  }
  .course-info{
    padding:4px 7px 4px 7px;
    p{
      font-size: 14px;
    }
    .course-personal{
      padding-top: 10px;
      text-align: center;
      .status{
        font-size: 13px;
        text-align: left;
        color: #355f7d;
      }
      button{
        margin-top: 10px;
        width: 100px;
      }
    }
  }
}
.el-tabs__content{
  padding:15px;
}
</style>