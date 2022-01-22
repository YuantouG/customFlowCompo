<!--
 * @Author: your name
 * @Date: 2021-06-29 13:47:30
 * @LastEditTime: 2021-07-09 12:30:24
 * @LastEditors: sueRimn
 * @Description: In User Settings Edit
 * @FilePath: \ggn-admin\src\pages\flow-chart\flow-chart.vue
-->

<style lang="less" scoped src="./flow-chat.less"></style>
<template>
  <div class="flow-chart">
    <div class="content">
      <div class="aside_left">
        <class-ification></class-ification>
      </div>
      <div class="aside_right">
        <div class="aside_right_header">
          <div class="graph"></div>
          <div class="buttons">
            <div class="buttons_item" @dragend="move" :draggable="true">
              <svg-ellipse width="80" height="40"></svg-ellipse>
            </div>
            <div class="buttons_item">
              <svg-polygon></svg-polygon>
            </div>
            <div class="buttons_item">
              <svg-rect></svg-rect>
            </div>
            <el-button size="mini" type="warning" @click="clearNode"
              >清空</el-button
            >
            <el-button size="mini" type="primary" @click="save">保存</el-button>
          </div>
        </div>
        <div
          class="main_content"
          @mousemove="moveFunction"
          @mousedown="addLineNode"
          @mouseup="DOMoveLine"
        >
          <svg width="100%" height="100%">
            <template v-for="(item, i) in getMapData">
              <template v-if="item.type == 'line'">
                <svg-path
                  :key="i"
                  :x1="item.x1"
                  :y1="item.y1"
                  :x2="item.x2"
                  :y2="item.y2"
                  :id="item.id"
                  :color="item.color"
                ></svg-path>
              </template>
              <template v-if="item.type == 'start' || item.type == 'end'">
                <svg-ellipse
                  :x="item.x"
                  :y="item.y"
                  :message="item.context"
                  :show="true"
                  :width="item.width"
                  :height="item.height"
                  :key="i"
                  :id="item.id"
                  :color="item.color"
                ></svg-ellipse>
              </template>
              <template v-if="item.type == 'function'">
                <svg-svgRect
                  :x="300"
                  :message="mapData.context"
                  :show="true"
                  width="120"
                  height="60"
                  :key="i"
                ></svg-svgRect>
              </template>
            </template>
          </svg>
        </div>
      </div>
    </div>

    <dialog-box ref="dialogBox">
      <div class="dialogBoxBox">
        <div class="items" @click="doSomething('start', '开始', 'node')">
          开始
        </div>
        <div class="items" @click="doSomething('end', '结束', 'node')">
          结束
        </div>
      </div>
    </dialog-box>
  </div>
</template>

<script src="./flow-chart.js"></script>