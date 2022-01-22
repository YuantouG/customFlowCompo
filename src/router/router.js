/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-12-28 13:23:54
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-01-22 13:03:28
 */
import flowChart from "@pages/flow-chart/flow-chart.vue"

export const routes = [
  {
    path: "/",
    component: flowChart,
    children: [
      {
        path: "/",
        name: "flowChart",
        component: flowChart,
      },
    ],
  },
];
