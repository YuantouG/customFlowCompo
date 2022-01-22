<!--
 * @Author: your name
 * @Date: 2021-07-02 16:05:04
 * @LastEditTime: 2021-07-02 16:12:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ggn-admin\src\pages\flow-chart\component\classification\index.vue
-->
<style lang="less" scoped src="./index.less">
</style>
<template>
  <div>
    <div class="header">
      <el-button size="mini" type="primary" @click="addNode()">新增</el-button>
      <el-button size="mini" type="primary" @click="remove()">删除</el-button>
    </div>
    <el-tree :data="treeList"
             :default-expand-all="true"
             :props="defaultProps"
             @node-click="handleNodeClick">
      <span class="custom-tree-node"
            slot-scope="{ node }">
        <i :class="node.label == '根目录'?'el-icon-s-grid':'el-icon-folder'"></i>
        <span>{{ node.label }}</span>
      </span>
    </el-tree>
  </div>

</template>
<script src="./index.js">

</script>