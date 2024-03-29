import Mock from 'mockjs'

let courseCatalog = {
  courseName:'中国特色社会主义理论',
  courseId:'5648784',
  courseCatalog:[{
    id:1,
    label: '第一章，毛泽东思想及其历史地位',
    type:false, // 是否包含视频
    finished:true, 
    children: [{
      id:4,
      label: '第一节 毛泽东思想的形成及其历史地位',
      type:false,
      finished:true,
      children: [{
        id:9,
        label: '毛泽东思想的形成及其历史地位',
        type:true,
        finished:true, // 是否完成该小节
        vid:'1f875362c3d8c168e1a2966e122f372e_1' // 小节视频1f875362c3d8c168e1a2966e122f372e_1
      }]
    }]
  }, {
    id:2,
    label: '第二章 新民主主义革命理论 ',
    type:false,
    finished:false,
    children: [{
      id:5,
      label: '第一节 新民主主义革命理论形成的依据',
      type:false,
      finished:false,
      children: [{
        id:10,
        label: '新民主主义革命理论形成的依据',
        type:true,
        finished:false,
        vid:'1f875362c39fb724d6864ab7a0bac42a_1'
      }]
    }, {
      id:6,
      label: '第二节 新民主主义革命的总路线和基本纲领',
      type:false,
      finished:false,
      children: [{
        id:11,
        label: '新民主主义革命的总路线和基本纲领',
        type:true,
        finished:false,
        vid:'1f875362c39437fb4c744e299645a2ad_1'
      }]
    }]
  }, {
    id:3,
    label: '第三章 社会主义改造理论',
    type:false,
    finished:false,
    children: [{
      id:7,
      label: '第一节 从新民主主义到社会主义的转变',
      type:false,
      finished:false,
      children: [{
        id:12,
        label: '从新民主主义到社会主义的转变',
        type:true,
        finished:false,
        vid:'1f875362c3dcccbe05ad5b9176f89158_1'
      }]
    }, {
      id:8,
      label: '第二节 社会主义改造道路和历史经验',
      type:false,
      finished:false,
      children: [{
        id:13,
        label: '社会主义改造道路和历史经验',
        type:true,
        finished:false,
        vid:'1f875362c3b1ab8021c2fd039d607a25_1'
      }]
    }]
  }]
}

export default courseCatalog