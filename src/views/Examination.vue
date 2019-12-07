<template>
<div class="examination">
  <div class="exam-info">
    <div class="exam-title">
      <div class="exam-detail">
        <h1>公关礼仪阶段测评一</h1>
      <p>答题时间：90分钟&emsp;&emsp;总题数：100题&emsp;&emsp;总分：100分&emsp;&emsp;</p>
      </div>
    </div>
  </div>
  <el-row type="flex" class="detail-panel">
    <el-col :span="17" class="question-panel">
        <div class="practice-item" v-for="(item,index) in questions" :key="item.questionInfo">
                <div class="practice-item-header">
                    <span class="practice-item-num">{{index+1}}</span>
                    <span class="practice-item-title">
                        <span>{{item.type === 1?'【单选】':'【多选】'}}</span>{{item.questionInfo}}
                    </span>
                </div>
                    <ul class="practice-item-option" data-exerid="26930886" data-score="2" data-type="xz" >
                      <li v-for="(answer) in item.answers" :key="answer.label"><label><input name="2215" type="radio" :value="answer.label"><i>{{answer.label}}</i> {{answer.content}}</label></li>
                      <!-- <li><label><input name="2215" type="radio" value="B"><i>B</i> {{item.answer2}}</label></li>
                      <li><label><input name="2215" type="radio" value="C"><i>C</i> {{item.answer3}}</label></li>
                      <li><label><input name="2215" type="radio" value="D"><i>D</i> {{item.answer4}}</label></li> -->
                    </ul>
                <div class="practice-item-operate am-cf">
                  <el-button  data-right="B" type="primary">在答题卡上标记</el-button>
                </div>
                <div class="practice-item-result" style="display:none">
                        <div class="practice-item-answer-right" style="display:none">
                            <i></i>您<span>答对</span>了
                        </div>
                        <div class="practice-item-answer-wrong" style="display:none">
                            <i></i>您<span>答错</span>了，已加入错题本
                        </div>
                    <div class="practice-item-answer">
                            <p>
                                <span class="symbol">【结果】</span>正确答案是：<span class="answer">B</span>
                            </p>
                        <p>
                            <span class="symbol">【解析】</span>
                        </p>
                    </div>
                    <div class="practice-item-count">

                        <span>平均正确率70%</span>
                    </div>
                </div>
            </div>
    </el-col>
    <el-col :span="6" class="funtion-panel">
      <div class="exam-timing">
        <i class="el-icon-time">考试剩余时间 <span style="color:#5eb95e;font-weight:bold;">{{examTime}}</span> 分钟</i>
      </div>
      <div class="answers-card">
        <div class="answers">
          <h3>答题卡</h3>
          <p>点击图标跳转到对应的题目</p>
        </div>
      </div>
    </el-col>
  </el-row>
</div>  
</template>

<script>
export default {
  data(){
    return {
      questions:[
        {
          type:1,
          questionInfo:'通过各种有关的事体来传达礼仪信息的媒体是（）',
          answers:[
            {label:'A',content:'物体礼仪媒体'},
            {label:'B',content:'事体礼仪媒体'},
            {label:'C',content:'形体礼仪媒体'},
            {label:'D',content:'神体礼仪媒体'},
          ]
        },
        {
          type:1,
          questionInfo:'通过各种有关的事体来传达礼仪信息的媒体是（）',
          answers:[
            {label:'A',content:'物体礼仪媒体'},
            {label:'B',content:'事体礼仪媒体'},
            {label:'C',content:'形体礼仪媒体'},
            {label:'D',content:'神体礼仪媒体'},
          ]
        },
        {
          type:1,
          questionInfo:'通过各种有关的事体来传达礼仪信息的媒体是（）',
          answers:[
            {label:'A',content:'物体礼仪媒体'},
            {label:'B',content:'事体礼仪媒体'},
            {label:'C',content:'形体礼仪媒体'},
            {label:'D',content:'神体礼仪媒体'},
          ]
        },
        {
          type:1,
          questionInfo:'通过各种有关的事体来传达礼仪信息的媒体是（）',
          answers:[
            {label:'A',content:'物体礼仪媒体'},
            {label:'B',content:'事体礼仪媒体'},
            {label:'C',content:'形体礼仪媒体'},
            {label:'D',content:'神体礼仪媒体'},
          ]
        }
      ],
      examTime:'90:00'
    }
  },
  mounted(){
    this.setTiming()
  },
  methods:{
    setTiming(){
      let totalTime = 90
      let seconds = 60
      setInterval(()=>{
        let second
        if(seconds === 60){
          second = "59"
          totalTime--
        }else if(seconds<10&&seconds>0){
          second = "0" + seconds.toString()
        }else if(seconds === 0){
          second = "00"
          seconds = 60
        }else{
          second = seconds.toString()
        }
        seconds--;
        this.examTime = totalTime +":"+ second
      },1000)
    }
  }
}
</script>

<style lang="scss" scope>
.examination{
  width: 1200px;
  margin: 20px auto;
  font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", "FontAwesome", sans-serif;
  .exam-info{
    background-color: #fff;
    padding: 5px 30px 5px 30px;
    border: 2px solid #e6e6e6;
    height: 77px;
    .exam-title{
      float: left;
      .exam-detail{
        display: inline-block;
        vertical-align: middle;
        h1{
          font-size: 16px;
        } 
        p{
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
  .detail-panel{
    margin-top: 20px;
    justify-content: space-between;
    width: 1200px;
    .question-panel{
      overflow: hidden;
      border: 2px solid #e6e6e6;
      padding: 0 30px;
      background-color: #fff;
      .practice-item{
          width: 100%;
          padding: 35px 0;
          background-color: #fff;
          .practice-item-header{
            .practice-item-num{
              color: #0195d3;
              font-weight: bold;
            }
            .practice-item-title{
              margin-left: 10px;
              span{
                color: #0195d3;
                margin-right: 5px;
              }
            }
          }
          .practice-item-option{
            margin-left: 25px;
            padding: 15px 0;
            list-style: none;
            li{
              list-style: none;
              margin: 0;
              padding: 8px 0;
              label{
                font-size: 16px;
                cursor: pointer;
                font-weight: normal;
                input[type="checkbox"], input[type="radio"]{
                  display: none;
                }
              }
            }
          }
          .practice-item-operate{
              padding: 0;
          }
        & + .practice-item{
          border-top: 1px solid #e6e6e6;
        }
      }
    }
    .funtion-panel{
      .exam-timing{
          padding: 10px 20px;
          background-color: #fff;
          border: 2px solid #e6e6e6;
      }
      .answers-card{
          height: 540px;
          margin: 0px;
          margin-top: 20px;
          .answers{
            padding: 10px 20px;
            background-color: #fff;
            border: 2px solid #e6e6e6;
            h3{
              font-size: 16px;
            }
            p{
              color: #999;
              margin: 5px auto 10px auto;
              font-size: 15px;
            }
          }
      }
    }
  }
  
}
</style>