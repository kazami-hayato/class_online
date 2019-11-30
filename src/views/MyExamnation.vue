<template>
  <div id="examination-page">
      <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="课程代码"
        prop="code"
        width="120">
        <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
      </el-table-column>
      <el-table-column
        prop="name"
        label="课程名"
        width="120">
      </el-table-column>
       <el-table-column
        prop="teacher"
        label="任课老师"
        width="120">
      </el-table-column>
       <el-table-column
        prop="book"
        label="指定教材"
        width="200">
      </el-table-column>
       <el-table-column
        prop="time"
        label="课程时长"
        width="120">
      </el-table-column>
      <el-table-column
        prop="level"
        label="学分"
        show-overflow-tooltip>
      </el-table-column>
       
    </el-table>
    <div>已选学分：<span>{{score}}</span>分<span style="color:red">(36学分)</span></div>
    <el-button @click="select" style="float:right" type="primary">提交选课</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
        tableData: [{
          code: '34454545',
          name: '装修设计',
          teacher: '窦贤康',
          book:'《装修设计从入门到放弃》',
          time:'36课时',
          level:5
        }, {
          code: '34454545',
          name: '装修设计',
          teacher: '窦贤康',
          book:'《装修设计从入门到放弃》',
          time:'36课时',
          level:5
        }, {
          code: '34454545',
          name: '装修设计',
          teacher: '窦贤康',
          book:'《装修设计从入门到放弃》',
          time:'36课时',
          level:5
        }, {
          code: '34454545',
          name: '装修设计',
          teacher: '窦贤康',
          book:'《装修设计从入门到放弃》',
          time:'36课时',
          level:5
        }, {
          code: '34454545',
          name: '装修设计',
          teacher: '窦贤康',
          book:'《装修设计从入门到放弃》',
          time:'36课时',
          level:5
        }, {
          code: '34454545',
          name: '装修设计',
          teacher: '窦贤康',
          book:'《装修设计从入门到放弃》',
          time:'36课时',
          level:5
        },{
          code: '34454545',
          name: '装修设计',
          teacher: '窦贤康',
          book:'《装修设计从入门到放弃》',
          time:'36课时',
          level:5
        }],
        multipleSelection: [],
        score:0
    }
  },
  methods:{
    handleSelectionChange(val){
      this.multipleSelection = val;
      for(let i=0;i<val.length;i++){
        this.score+=parseInt(val[i].level)
      }
    },
    select(){
      if(this.score < 36){
        this.$confirm('content', 'title', {
          confirmButtonText: 'confirm',
          cancelButtonText: 'cancel',
          type: 'warning'
        }).then(() => {
          
        }).catch(() => {});
      }
    }
  }
}
</script>

<style lang="scss" scope>
#examination-page{
  margin: 50px;
}
</style>