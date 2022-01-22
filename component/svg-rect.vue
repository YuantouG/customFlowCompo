<!--
 * @Author: your name
 * @Date: 2021-07-02 17:27:51
 * @LastEditTime: 2021-07-06 11:12:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ggn-admin\src\pages\flow-chart\component\svg-box.vue
-->

<style lang="less">
.rect {
  width: 100%;
  height: 100%;
}
</style>


<template>
  <div class="rect">
    <svg width="100%"
         height="100%">
      <rect :x="x"
            :y="y"
            width="85%"
            height="85%"
            stroke="#409eff"
            stroke-width="2"
            fill="#ffffff"></rect>

    </svg>
  </div>
</template>

<script>
export default {
  props: {
    x: {
      type: String,
      default: "2"
    },
    y: {
      type: String,
      default: "2"
    }
  }

}
</script>