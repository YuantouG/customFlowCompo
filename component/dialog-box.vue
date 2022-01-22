<!--
 * @Author: your name
 * @Date: 2021-07-06 11:37:57
 * @LastEditTime: 2021-07-06 13:15:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ggn-admin\src\pages\flow-chart\component\dialogBox.vue
-->
<style lang="less" scoped>

.el-drawer-box{
  
  .el_button{
    margin: auto;
  }
}


</style>

<template>
  <el-drawer title="流程框描述"
             :visible.sync="drawer"
             direction="rtl"
             :destroy-on-close="true">
    <div class="el-drawer-box">
      <slot></slot>
    </div>
  </el-drawer>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }

}
</script>