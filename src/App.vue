<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {get,set} from './assets/js/utils'

export default {
  name: 'app',
  created(){
    /**
     * @Author lau
     * @Description 解决刷新state值清空的问题
     * @Date 2019-12-06 00:30:17 星期五
     */
    if(get("store")){
      this.$store.replaceState(Object.assign({},this.$store.state,get("store")))
    }
    window.addEventListener('beforeunload', ()=>{
      set("store",this.$store.state)
    })
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  margin-top: 0px;
  padding: 0px;
}
body{
  margin: 0px;
  padding: 0px;
}
</style>zll
