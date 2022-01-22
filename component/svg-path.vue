<!--
 * @Author: your name
 * @Date: 2021-07-07 10:04:02
 * @LastEditTime: 2021-07-08 10:04:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ggn-admin\src\pages\flow-chart\component\svg-path.vue
-->
<style lang="less" scoped>
</style>

<template>
  <g>
    <path :d='`M${x1} ${y1} C${x1} ${(y2+y1)/2},${x2} ${(y1+y2)/2},${x2} ${y2} `'
          stroke='#409eff'
          stroke-width='2'
          fill='none'></path>
    <path :d='`M${x2-10},${y2-10} L${x2},${y2} L${x2+10},${y2-10} L${x2},${y2-5} Z`'
          fill='#409eff'
          class="tran"
          :style="`transform: rotate(${y2-y1<0?180:0}deg);transform-origin: ${x2}px ${y2}px;`"></path>
  </g> 

</template>


<script>
export default {

  props: {
    x1: Number,
    y1: Number,
    x2: Number,
    y2: Number,
  },
  methods: {
    dragstartSomething () {
      console.log(11111111111);
    }
  }

}
</script>