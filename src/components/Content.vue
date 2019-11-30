<template>
<div id="content">
    <Top></Top>
    <router-view></router-view>
    <Bottom></Bottom>
</div>
</template>

<script>
import Bottom from './Bottom'
import Top from './Top'
export default {
  components:{
    Top,
    Bottom
  }
}
</script>

<style lang="scss" scope>

</style>