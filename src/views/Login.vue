<template>
  <div id="login-page" v-loading="logining">
    <div class="login-box">
        <p>用户登录</p>
        <el-form :model="user">
          <el-form-item>
             <el-input placeholder="请输入账号或手机号" prefix-icon="el-icon-user" v-model="user.account"></el-input>
          </el-form-item>
          <div style="clear:both;height:10px;"></div>
          <el-form-item>
            <el-input placeholder="请输入密码" prefix-icon="el-icon-key" v-model="user.password" show-password clearable ></el-input>
          </el-form-item>
        </el-form>
        <div style="clear:both;height:10px;"></div>
            <el-button type="primary" class="login-btn" @click="login">登&nbsp;&nbsp;&nbsp;录</el-button>
        <div style="text-align:left">
          <el-checkbox v-model="autoLogin">自动登录</el-checkbox><span class="forget-password"> | 忘记密码</span>
        </div>
        <div class="tips">
           <span>还没有账户？</span><span>去注册>></span>
        </div>
        <div class="bottom-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user:{
        account:'',
        password:''
      },
      isValidated:false,
      autoLogin:false,
      logining:false
    }
  },
  methods:{
    login(){
      this.logining = true
      if(this.user.account === '' || this.user.password === ''){
          this.logining = false
          this.$message.error('账号密码不能为空');
      } else{
        console.log(this.user)
        this.$store.dispatch('login',this.user)
            .then(()=>{
              this.logining = false
              console.log('登录成功！')
              this.$router.push('/')
            })
            .catch((error) => {
              this.logining = false
              this.$message.error(error.msg)
            })
      }
    }
  }
}
</script>

<style lang="scss" scope>
#login-page{
  width: 100%;
  height: 745px;
  background: url("../assets/login/login-back.png") no-repeat;
  background-size: cover;
  position: relative;
  .login-box{
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
    .login-btn{
      width: 324px;
      background: rgba(60,108,140,1);
      border-color: rgba(60,108,140,1);
      cursor: pointer;
      font-size: 20px;
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