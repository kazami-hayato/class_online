/*
 * @Author: lau.lucis 
 * @Date: 2019-12-04 21:25:58 
 * @Last Modified by:   lau.lucis 
 * @Last Modified time: 2019-12-04 21:25:58 
 */
<template>
  <div id="first-login">
    <div class="camera-box">
      <video id="video" width="300" height="380"></video>
      <canvas id="canvas" width="300" height="380"></canvas>
    </div>
    <div class="policy-box">
      <p class="title">政策须知</p>
      <section>
        欢迎使用“有道”提供的产品和服务！有道（或简称“我们”）深知个人信息对您的重要性，我们一向庄严承诺保护使用我们的产品和服务（以下统称“有道服务”）之用户（以下统称“用户”或“您”）的个人信息及隐私安全。您在使用有道服务时，我们可能会收集和使用您的相关个人信息（或简称“个人信息”）。
      </section>
      <section>
        <h3>一、我们如何收集和使用您的个人信息</h3>
            <p>我们收集您的h个人信息主要是为了您和其他用户能够更容易和更满意地使用有道服务。而这些个人信息有助于我们实现这一目标。</p>
          <h4>（一）我们将通过以下途径收集和获得您的个人信息：</h4>
          <h5>1、您提供的个人信息。 例如：</h5>
          <ul>
            <li>您在注册有道服务的帐号或使用有道服务时，向我们提供的个人信息； </li>
            <li>您通过有道服务向其他方提供的共享个人信息，以及您使用有道服务时所储存的个人信息。</li>
            <li>您在注册有道服务的帐号或使用有道服务时，向我们提供的个人信息； </li>
            <li>您通过有道服务向其他方提供的共享个人信息，以及您使用有道服务时所储存的个人信息。</li>
            <li>您在注册有道服务的帐号或使用有道服务时，向我们提供的个人信息； </li>
            <li>您通过有道服务向其他方提供的共享个人信息，以及您使用有道服务时所储存的个人信息。</li>
          </ul>
      </section>
      <section>
        <h3>二、我们如何收集和使用您的个人信息</h3>
            <p>我们收集您的h个人信息主要是为了您和其他用户能够更容易和更满意地使用有道服务。而这些个人信息有助于我们实现这一目标。</p>
          <h4>（一）我们将通过以下途径收集和获得您的个人信息：</h4>
          <h5>1、您提供的个人信息。 例如：</h5>
          <ul>
            <li>您在注册有道服务的帐号或使用有道服务时，向我们提供的个人信息； </li>
            <li>您通过有道服务向其他方提供的共享个人信息，以及您使用有道服务时所储存的个人信息。</li>
            <li>您在注册有道服务的帐号或使用有道服务时，向我们提供的个人信息； </li>
            <li>您通过有道服务向其他方提供的共享个人信息，以及您使用有道服务时所储存的个人信息。</li>
            <li>您在注册有道服务的帐号或使用有道服务时，向我们提供的个人信息； </li>
            <li>您通过有道服务向其他方提供的共享个人信息，以及您使用有道服务时所储存的个人信息。</li>
          </ul>
      </section>
      <!-- <span>点击我同意即表示您同意以上协议</span> -->
      <el-button style="float:right;" type="primary" @click="agree">我同意</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){

  },
  mounted(){
    //let video = document.getElementById('video')
    if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
      //调用用户媒体设备, 访问摄像头
      this.getUserMedia({video : {width: 300, height: 380}}, this.success, this.error);
    } else {
      alert('不支持访问用户媒体');
    }
  },
  methods:{
    getUserMedia(constraints, success, error){
      if (navigator.mediaDevices.getUserMedia) {
        //最新的标准API
        navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
      } else if (navigator.webkitGetUserMedia) {
        //webkit核心浏览器
        navigator.webkitGetUserMedia(constraints,success, error)
      } else if (navigator.mozGetUserMedia) {
        //firfox浏览器
        navigator.mozGetUserMedia(constraints, success, error);
      } else if (navigator.getUserMedia) {
        //旧版API
        navigator.getUserMedia(constraints, success, error);
      }
    },
    success(stream){
      
      let video = document.getElementById('video');

      //兼容webkit核心浏览器
      //let CompatibleURL = window.URL || window.webkitURL;
      //将视频流设置为video元素的源
      console.log(stream);
 
      //video.src = CompatibleURL.createObjectURL(stream);
      video.srcObject = stream;
      video.play();
    },
    error(error){
      console.log(`访问用户媒体设备失败${error.name}, ${error.message}`);
    },
    agree(){
      let video = document.getElementById('video')
      let canvas = document.getElementById('canvas')
      let context = canvas.getContext('2d')
      video.style.display = "none"
      canvas.style.display = "block"
      let img = context.drawImage(video, 0, 0, 300, 380)
      console.log(img)
      setTimeout(()=>{
        this.$router.push({
        path:'/personal'
        })
      },5000)
  }
  },
}
</script>

<style lang="scss" scope>
#first-login{
  background: url('../assets/login/firstlogin-back.png') no-repeat;
  background-size: cover;
  width: 100%;
  height: 745px;
  position: relative;
  .camera-box{
    position: absolute;
    top: 180px;
    left: 183px;
    background: #ffffff;
    width: 300px;
    height: 380px;
  }
  .policy-box{
    position: absolute;
    top: 80px;
    right: 83px;
    background: #ffffff;
    width: 700px;
    height: 600px;
    overflow:scroll;
    text-align: justify;
    padding: 10px;
    box-shadow: 0px -4px 47px 12px white;
    .title{
      font-family: 'Lisu';
      font-size: 30px;
      text-align: center;
    }
  }
}
</style>