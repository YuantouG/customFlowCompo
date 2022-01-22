<!--
 * @Author: your name
 * @Date: 2021-07-02 17:27:51
 * @LastEditTime: 2021-07-09 14:30:03
 * @LastEditors: sueRimn
 * @Description: In User Settings Edit
 * @FilePath: \ggn-admin\src\pages\flow-chart\component\svg-box.vue
-->

<style lang="less">
.div_box {
  width: 100%;
  height: 100%;
}

.circle_icon {
  visibility: inherit !important;
  cursor: crosshair;
}

.gg:hover {
  cursor: move;
}

.svgtext {
  text-anchor: middle;
  dominant-baseline: middle;
}
// }
</style>


<template>
  <svg :width="width" :height="height" class="ell_svg" :x="x - 40" :y="y - 90">
    <g class="gg">
      <ellipse
        cx="50%"
        cy="50%"
        rx="40%"
        ry="40%"
        :stroke="color"
        stroke-width="2"
        fill="#ffffff"
        :id="id"
      ></ellipse>
      <text :id="id" class="svgtext" x="50%" y="50%">
        {{ id }}
      </text>
      <circle
        class="circle_icon"
        v-if="show"
        cx="50%"
        cy="90%"
        r="4"
        :stroke="color"
        :id="id"
        fill="#ffffff"
        data-set="start"
      />
      <circle
        class="circle_icon"
        v-if="show"
        cx="50%"
        cy="10%"
        r="4"
        :id="id"
        :stroke="color"
        fill="#ffffff"
        data-end="end"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
    x: {
      type: Number,
      default: 2,
    },
    y: {
      type: Number,
      default: 2,
    },
    message: {
      type: String,
      default: null,
    },
    show: {
      type: Boolean,
      default: false,
    },
    id: {
      type: Number,
      default: null,
    },
    color: {
      type: String,
      default: "#409eff",
    },
  },
  data() {
    return {};
  },
  methods: {
    addLine(event) {
      console.log("111111111111", event);
      this.$emit("addLineNode", event);
    },
    dododo() {
      console.log("dododododododod");
    },
  },
};
</script>