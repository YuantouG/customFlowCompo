<!--
 * @Author: your name
 * @Date: 2021-07-07 10:04:02
 * @LastEditTime: 2021-07-09 11:07:16
 * @LastEditors: sueRimn
 * @Description: In User Settings Edit
 * @FilePath: \ggn-admin\src\pages\flow-chart\component\svg-path.vue
-->
<style lang="less" scoped>
.gg:hover {
  cursor: pointer;
}
</style>

<template>
  <g class="gg">
    <path
      :d="`M${x1} ${y1} C${x1} ${(y2 + y1) / 2},${x2} ${
        (y1 + y2) / 2
      },${x2} ${y2} `"
      :stroke="color"
      stroke-width="2"
      fill="none"
      :id="id"
    ></path>
    <path
      :d="`M${x2 - 10},${y2 - 10} L${x2},${y2} L${x2 + 10},${y2 - 10} L${x2},${
        y2 - 5
      } Z`"
      :fill="color"
      class="tran"
      :id="id"
      :style="`transform: rotate(${
        y2 - y1 < 0 ? 180 : 0
      }deg);transform-origin: ${x2}px ${y2}px;`"
    ></path>
  </g>
</template>


<script>
export default {
  props: {
    x1: Number,
    y1: Number,
    x2: Number,
    y2: Number,
    color: {
      type: String,
      default: "#409eff",
    },
    id: {
      type: Number,
      default: null,
    },
  },
  methods: {
    dragstartSomething() {
      console.log(11111111111);
    },
  },
};
</script>