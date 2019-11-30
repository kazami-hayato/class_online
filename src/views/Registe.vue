<template>
  <div id="registe-page">
    <div class="registe-box">
        <p>用户注册</p>
        <el-input placeholder="请输入您的账号" prefix-icon="el-icon-user"></el-input>
        <div style="clear:both;height:20px;"></div>
        <el-input placeholder="请输入您的密码" prefix-icon="el-icon-key"></el-input>
        <div style="clear:both;height:20px;"></div>
        <el-input placeholder="请再次输入您的密码" prefix-icon="el-icon-key"></el-input>
        <div style="clear:both;height:20px;"></div>
        <el-input placeholder="请输入你的手机号" prefix-icon="el-icon-mobile-phone"></el-input>
        <div style="clear:both;height:20px;"></div>
        <el-input placeholder="请输入验证码" style="width:60%;float:left;"></el-input>
        <el-button type="primary" class="validate-btn">获取验证码</el-button>
        <!-- <el-button class="validate-btn">获取验证码</el-button> -->
        <div style="clear:both;height:20px;"></div>
        <el-button type="primary" class="registe-btn" @click="registe">注册</el-button>
        <div class="tips">
           <span>已有账户？</span><span>去登录>></span>
        </div>
        <div class="bottom-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{
    registe(){

    }
  }
}
</script>

<style lang="scss" scope>
#registe-page{
  width: 100%;
  height: 745px;
  background: url("../assets/login/login-back.png") no-repeat;
  background-size: cover;
  position: relative;
  .registe-box{
    width: 324px;
    height: 473px;
    position: absolute;
    left: 50%;
    top:100px;
    margin-left: -162px;
    text-align: center;
    p{
      font-family:'Lisu';
      color: rgba($color: #000000, $alpha: 1.0);
      font-size: 34px;
    }
    .validate-btn{
      background: rgba(60,108,140,1);
      border-color: rgba(60,108,140,1);
      cursor: pointer;
      color: white;
      width: 32%;
      float: right;
      text-align: center;
    }
    .registe-btn{
      width: 324px;
      background: rgba(60,108,140,1);
      border-color: rgba(60,108,140,1);
      cursor: pointer;
    }
    .forget-password{
      color: #606266;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
      font-size: 14px;
    }
    .tips{
      text-align:right;
      margin-top:20px;
      span{
        &:nth-child(1){
          color: #666666;
          font-size: 14px;
        }
        &:nth-child(2){
          color: #C1272D;
          font-size: 20px;
          cursor: pointer;
        }
      }
    }
    .bottom-line{
      background: url('../assets/login/bottom-line.png') no-repeat 50% 50%;
      width: 170px;
      height: 2px;
      float:right;
    }
  }
}
</style>