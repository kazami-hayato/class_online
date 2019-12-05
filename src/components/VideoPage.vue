<template>
<div class="video-page">
  <div class="video-back">
    <div class="video-title">正在播放：{{videoName}}</div>
    <div class="video-content">
      <div id="player"></div>
      <div class="video-catalogs">
          <p class="title">{{videoName}}</p>
          <el-tree :data="catalog" :props="defaultProps" @node-click="handleNodeClick">
             <span class="custom-tree-node" slot-scope="{ node, data }">
               <i class="el-icon-video-play" v-show="data.type"></i>
               <span :title="node.label" >{{ node.label }}</span>
               <i :class="[data.finished?'el-icon-success play-status finished':'el-icon-success play-status']"></i>
             </span>
          </el-tree>
      </div>
      <div class="video-functions">
          <ul>
            <li> <div class="icon-catalog"> </div><div>目录</div></li>
            <li><div class="icon-examine"> </div><div>阶段测试</div></li>
            <li><div class="icon-finalExam"> </div><div>综合测评</div></li>
            <li><div class="icon-collection"> </div><div>试题收藏</div></li>
            <li><div class="icon-questions"> </div><div>题库</div></li>
          </ul>
      </div>
    </div>
  </div>
</div>  
</template>

<script>
import { getViewLog, getCourseCatalog} from '../api/course'
let player = null
export default {
  data(){
    return {
      videoName:'课程设计与开发',
       catalog: [{
          label: '第一章，毛泽东思想及其历史地位',
          type:false,
          finished:true,
          children: [{
            label: '第一节 毛泽东思想的形成及其历史地位',
            type:false,
            finished:true,
            children: [{
              label: '毛泽东思想的形成及其历史地位',
              type:true,
              finished:true,
              vid:'1f875362c39fb724d6864ab7a0bac42a_1'
            }]
          }]
        }, {
          label: '第二章 新民主主义革命理论 ',
          type:false,
          finished:false,
          children: [{
            label: '第一节 新民主主义革命理论形成的依据',
            type:false,
            finished:false,
            children: [{
              label: '新民主主义革命理论形成的依据',
              type:true,
              finished:false,
              vid:'1f875362c3d8c168e1a2966e122f372e_1'
            }]
          }, {
            label: '第二节 新民主主义革命的总路线和基本纲领',
            type:false,
            finished:false,
            children: [{
              label: '新民主主义革命的总路线和基本纲领',
              type:true,
              finished:false,
            }]
          }]
        }, {
          label: '第三章 社会主义改造理论',
          type:false,
          finished:true,
          children: [{
            label: '第一节 从新民主主义到社会主义的转变',
            type:false,
            finished:true,
            children: [{
              label: '从新民主主义到社会主义的转变',
              type:true,
              finished:true,
            }]
          }, {
            label: '第二节 社会主义改造道路和历史经验',
            type:false,
            finished:true,
            children: [{
              label: '社会主义改造道路和历史经验',
              type:true,
              finished:true,
              vid:'1f875362c3b1ab8021c2fd039d607a25_1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        currentVid:'',
        courseId:'',
        faceValidate:null,
        videoDuration:1,
        validated:false,
        playList:[]
    }
  },
  mounted(){
    this.courseId = this.$route.params.courseId
    this.getCourseCatalog()
    this.initVideo()
    this.getViewLog()
  },
  methods:{
    /**
     * @Author lau
     * @Description 初始化视频
     * @Date 2019-12-05 21:02:41 星期四
     */
    initVideo(){
      player = window.polyvPlayer({
        wrap: '#player',
        width: 800,
        height: 533,
        vid: '1f875362c39fb724d6864ab7a0bac42a_1',
        viewerInfo:{
          viewerId:'abcdef',
          viewerName:'某某某',
          viewerAvatar:''
        },
        // watchStartTime:"50",
        ban_history_time:"off",
        // ban_seek_by_limit_time:"on"
      });
      this.currentVid = '1f875362c39fb724d6864ab7a0bac42a_1'
      this.setVideoInfo()
    },
    /**
     * @Author lau
     * @Description 获取当前用户的观看日志
     * @Date 2019-12-05 21:02:13 星期四
     */
    getViewLog(){
      let params = {
        vid:'1f875362c39fb724d6864ab7a0bac42a_1',
        sessionId:'abcdef',
        numPerPage:100,
        pageNum:1
      }
      getViewLog(params).then(res => {
        console.log(res)
      })
    },
    /**
     * @Author lau
     * @Description 切换视频
     * @Date 2019-12-06 00:33:37 星期五
     */
    handleNodeClick(data){
      // console.log(data)
      if(data.vid && this.currentVid !== data.vid){
        this.changeVid(data.vid)
      }
    },
    /**
     * @Author lau
     * @Description 换视频
     * @Date 2019-12-06 01:15:14 星期五
     */
    changeVid(vid){
        player.changeVid(vid)
        this.currentVid = vid

        this.setVideoInfo()
    },
    /**
     * @Author lau
     * @Description 获取该课程对应的播放列表树
     * @Date 2019-12-05 22:29:40 星期四
     */
    getCourseCatalog(){
      getCourseCatalog({courseId:this.courseId}).then(res => {
          this.videoName = res.data.courseName
          this.catalog = res.data.courseCatalog
          
          //To do 深度遍历目录树，获取vid组成待播放列表

      }).catch(error => {
        this.$message.error("获取播放列表失败")
      })
    },
    /**
     * @Author lau
     * @Description 设置视频轮询事件
     * @Date 2019-12-06 01:14:16 星期五
     */
    setVideoInfo(){
      setTimeout(()=>{
          // 人脸检测
        this.validated = false
        this.videoDuration = player.j2s_getDuration()
        this.faceValidate = setInterval(()=>{
          var sec2=player.j2s_getCurrentTime();
          console.log(sec2/this.videoDuration)
          if(sec2/this.videoDuration > 0.5 && !this.validated)
            {
              alert("进行人脸检测！")
              this.validated = true
            }else if(sec2/this.videoDuration>=1){
              this.changeVid("1f875362c3d8c168e1a2966e122f372e_1")
              clearInterval(this.faceValidate)
              this.faceValidate = null
            }
        },1000)

      },1000)
    }
  }
}
</script>

<style lang="scss" scope>
.video-page{
  background: #2F3133;
  color: white;
  width: 100%;
  height: 730px;
  .video-back{
    width: 1260px;
    margin: 0 auto;
    padding: 20px;
    .video-title{

    }
    .video-content{
      display: flex;
      .video-catalogs{
        background: #1F2123;
        width: 400px;
        height: 533px;
        .title{
          font-size: 16px;
          margin: 12px 0 0 12px;
        }
      }
      .video-functions{
        width: 80px;
        height: 533px;
        background: #000;
        position: relative;
        font-size: 14px;
        ul{
          list-style: none;
          margin: 0px;
          padding: 0px;
          li{
            text-align: center;
            margin-bottom: 15px;
            height: 70px;
            &:hover{
              background: #ff5423;
            }
          }
        }
      }
    }
  }
}
.el-tree{
  background: transparent;
  color: white;
  padding: 10px 5px;
}
.el-tree-node__label{
  font-size:14px;
}
.el-tree-node__content:hover,.el-tree-node:focus>.el-tree-node__content{
  background: #494848;
  color: #ff5423
}
.el-tree-node__content{
  height: 40px;
  line-height: 40px;
  overflow: hidden;
}
.custom-tree-node{
    position: relative;
    width: 100%;
}
.play-status{
    position: absolute;
    right: 0;
    top: 10px;
}
.finished{
  color: #ff5423;
}
</style>