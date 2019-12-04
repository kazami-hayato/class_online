<template>
<div class="video-page">
  <div class="video-back">
    <div class="video-title">正在播放：{{videoName}}</div>
    <div class="video-content">
      <div id="player"></div>
      <div class="video-catalogs">
          <p class="title">{{videoName}}</p>
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
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
export default {
  data(){
    return {
      videoName:'课程设计与开发',
       data: [{
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
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    }
  },
  mounted(){
    this.initVideo()
  },
  methods:{
    initVideo(){
      let player = window.polyvPlayer({
        wrap: '#player',
        width: 800,
        height: 533,
        vid: '1f875362c3d8c168e1a2966e122f372e_1',
      });
    },
    handleNodeClick(data){
      console.log(data)
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