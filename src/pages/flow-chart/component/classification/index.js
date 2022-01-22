/*
 * @Author: your name
 * @Date: 2021-07-02 16:05:19
 * @LastEditTime: 2021-07-02 16:14:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ggn-admin\src\pages\flow-chart\component\classification\index.js
 */
let id = 1000
export default {
  data() {
    return {
      treeList: [
        {
          id: 1,
          label: '根目录',
          children: [],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
      currentNode: null,
      Node: null,
    }
  },
  methods: {
    handleNodeClick(event, data) {
      this.currentNode = event
      this.Node = data
    },
    addNode() {
      const newNode = { id: id++, children: [], label: 'bbb' }
      this.currentNode.children.push(newNode)
    },
    remove() {
      if (this.currentNode.label == '根目录') return
      const _arr = this.Node.parent.data.children.map((e) => e.id)
      const index = _arr.indexOf(2)
      this.Node.parent.data.children.splice(index, 1)
    },
  },
}
