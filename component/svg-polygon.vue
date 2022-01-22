<!--
 * @Author: your name
 * @Date: 2021-07-02 17:27:51
 * @LastEditTime: 2021-07-05 15:52:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ggn-admin\src\pages\flow-chart\component\svg-box.vue
-->

<style lang="less">
.polygon {
  width: 100%;
  height: 100%;
}
</style>


<template>
  <div class="polygon">
    <svg width="100%"
         height="100%">
      <polygon points="40,40 80,20 40,0 0,20"
               stroke="#409eff"
               stroke-width="1.5"
               fill="#ffffff"></polygon>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    points: String
  },
  mounted () {
  }
}
</script>