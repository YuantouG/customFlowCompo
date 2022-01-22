/*
 * @Author: heyan
 * @Date: 2021-06-29 13:47:49
 * @LastEditTime: 2022-01-22 13:02:20
 * @LastEditors: sueRimn
 * @Description: In User Settings Edit
 * @FilePath: \ggn-admin\src\pages\flow-chart\flow-chart.js
 */
import '../../../assets/svg/qianbao.svg'
import classIfication from '../flow-chart/component/classification/index.vue'
import svgEllipse from './component/svg-ellipse.vue'
import svgPolygon from './component/svg-polygon.vue'
import svgRect from './component/svg-rect.vue'
import svgPath from './component/svg-path.vue'
import dialogBox from './component/dialog-box.vue'
export default {
  data() {
    return {
      mapData: new Map(),
      relation: new Map(),
      x: null,
      y: null,
      flag: 0,
      lineId: null,
      //是否开始鼠标监听
      isMouseMove: false,
      isNodeMove: false,
      //map变化标识
      isChanged: 0,
      currentId: null,
    }
  },
  methods: {
    /**
     * @description:移动图节点
     * @param {*} event
     * @return {*}
     */

    move(event) {
      console.log('move(event)----------', event)
      const { offsetX, offsetY } = event
      this.x = offsetX
      this.y = offsetY
      this.$refs.dialogBox.drawer = true
    },
    /**
     * @description:点击移动框节点-》抬起鼠标生成图节点
     * @param {*} type
     * @param {*} typenum
     * @param {*} typename
     * @return {*}
     */

    doSomething(type, typename, typenode) {
      this.flag++
      const node = {
        type: type,
        typenode: typenode,
        x: this.x,
        y: this.y,
        context: typename,
        width: '120',
        height: '60',
        id: this.flag,
        children: [],
        lineNodes: []
      }
      this.isNodeMove = false;
      this.mapData.set(this.flag, node)
      this.$refs.dialogBox.drawer = false
    },
    /**
     * @description:添加节点与线
     * @param {*} event
     * @return {*}
     */

    addLineNode(event) {
      console.log("addLineNode");

      const { offsetX, offsetY, target } = event
      this.currentId = parseInt(target.id)
      const _id = parseInt(target.id);
      //如果点击到出发的圆点就添加线的头部节点
      if (target.dataset.set == "start") {
        //开始标签创建线
        this.flag++
        this.isMouseMove = true
        this.isNodeMove = false;
        this.lineId = this.flag
        const line = {
          type: 'line',
          id: this.flag,
          x1: offsetX,
          y1: offsetY,
          x2: offsetX,
          y2: offsetY,
          parentNode: _id,
        }
        this.mapData.set(this.flag, line)
        const _data = this.relation.get(_id)
        this.relation.set(_id, [...(_data || [])])
        return
      }
      if (!Boolean(_id)) return;

      this.isNodeMove = true
      this.isChanged++
      const _data = this.mapData.get(_id)
      _data.color = "yellow"
      const _this = this

      document.onkeydown = function (e) {
        if (e.code === "Backspace") {
          const _node = _this.mapData.get(_id)
          _this.isNodeMove = false
          if (_node.type == "line") {
            let _nodeData = _this.relation.get(_node.parentNode)
            if (_nodeData && _nodeData.length > 0) {
              _nodeData = _nodeData.filter(e => {
                return e != _node.childNode
              })
            }
            _this.relation.set(_node.parentNode, _nodeData)
          } else {
            if (_node.lineNodes && _node.lineNodes.length > 0) {

              _node.lineNodes.map(e => {
                _this.mapData.delete(e);
              })
            }
            _this.relation.delete(_id)
          }
          _this.mapData.delete(_id);
          console.log("终极", _this.mapData);
          console.log("终极", _id);
        }
      }
    },

    /**
     * @name:添加线段
     * @test: test font
     * @msg: 
     * @param {*} event
     * @return {*}
     */
    DOMoveLine(event) {
      console.log("DOMoveLine");

      const { offsetX, offsetY, target } = event
      //当点击确定线的节点,判断是否在node的依据是看是否绑定了id
      //如果在node上就创建
      const flag = parseInt(target.id)
      console.log(this.isMouseMove);
      if (this.isMouseMove) {
        this.isMouseMove = false
        this.isNodeMove = false
        const type = target.dataset.end
        const _lineNode = this.mapData.get(this.lineId)
        if (flag && type === 'end') {
          console.log("_lineNode", this.lineId);
          console.log(_lineNode);
          const line = {
            ..._lineNode,
            x2: offsetX,
            y2: offsetY - 5,
            childNode: flag,
            color: "#409eff"
          }
          this.mapData.set(this.lineId, line)
          const data = this.mapData.get(_lineNode.parentNode);
          const data2 = this.mapData.get(flag);
          data.lineNodes.push(_lineNode.id)
          data2.lineNodes.push(_lineNode.id)
          const _data = this.relation.get(_lineNode.parentNode)
          _data.push(flag)
          return
        }
        //不在node上就删除
        let _data = this.relation.get(_lineNode.parentNode)
        console.log("dhild", _data);
        _data = _data.filter(e => {
          return e != _lineNode.childNode
        })
        this.relation.set(_lineNode.parentNode, _data)
        this.mapData.delete(this.lineId)
      }

      if (this.isNodeMove) {
        console.log(1111111111);
        this.isNodeMove = false
        const _data = this.mapData.get(this.currentId)

        if (!flag && _data.type == "line") {
          console.log("parent", _data.parentNode);
          this.mapData.delete(this.currentId)
          return
        }
        _data.color = "#409eff"
      }

    },

    /**
     * @description:监听鼠标移动
     * @param {*} event
     * @return {*}
     */

    moveFunction(event) {
      console.log("moveFunction");
      const { offsetX, offsetY } = event
      //移动节点or线段
      const _node = this.mapData.get(this.currentId);
      if (this.isNodeMove && _node.type == "line") {
        this.isChanged++
        this.lineId = _node.id
        this.isMouseMove = true
        _node.x2 = offsetX;
        _node.y2 = offsetY - 5;
        return
      }

      //添加连线时的移动
      if (this.isMouseMove) {
        this.isChanged++
        const line = {
          ...this.mapData.get(this.lineId),
          x2: offsetX,
          y2: offsetY - 5,
        }
        this.mapData.set(this.lineId, line)
        return;
      }


    },
    /**
     * @name:map-》tree 
     * @test: test font
     * @msg: 
     * @param {*}
     * @return {*}
     */
    save() {
      console.log("this.mapData", this.mapData);
      let obj = null;
      obj = JSON.parse(JSON.stringify(this.mapData.get(1)))

      //relation只管理关系
      const fun = (obj) => {
        // 根据当前节点的id获取relation的关系
        // console.log(obj);
        //如果节点没有子节点，就返回
        if (!obj) return
        const _obj = this.relation.get(obj.id)

        if (!(_obj && _obj.length > 0)) return

        //遍历relation map中的节点id，用id去获取节点对象，将节点对象加入当前树节点的chirldren数组中
        //由此递归
        for (let i = 0; i < _obj.length; i++) {
          console.log(this.mapData.has(_obj[i]), _obj[i]);
          if (!this.mapData.has(_obj[i])) continue;
          const _value = JSON.parse(JSON.stringify(this.mapData.get(_obj[i])));
          fun(_value)
          
          obj.children.push(_value)
        }
      }
      fun(obj)
      console.log("obj", obj);
      console.log("obj", this.mapData);
    },
    /**
     * @name:树-》map 
     * @test: test font
     * @msg: 
     * @param {*} obj
     * @return {*}
     */
    tranforms(obj) {
      const fun = (obj) => {
        if (this.mapData.size <= 0) {
          this.flag++
          this.mapData.set(this.flag, { ...obj, children: [], id: this.flag })
          this.relation.set(this.flag, [])
        }
        if (!(obj.children && obj.children.length > 0)) return
        obj.children.map((e) => {
          this.flag++
          const line = {
            type: 'line',
            id: this.flag,
            x1: obj.x + 20,
            y1: obj.y - 35,
            x2: e.x + 20,
            y2: e.y - 90,
          }
          this.mapData.set(this.flag, line)
          this.flag++
          this.mapData.set(this.flag, { ...e, children: [], id: this.flag })
          const _data = this.relation.get(obj.id)
          this.relation.set(obj.id, [...(_data || []), this.flag])
          fun(e)
        })
      }
      fun(obj)
    },

    clearNode() {
      this.mapData.clear();
      this.relation.clear();
    },
  },
  computed: {
    getMapData() {
      let x = this.flag
      let y = this.isMouseMove
      let z = this.isChanged
      let d = this.isNodeMove
      if (this.mapData.size < 1) return []
      return [...this.mapData.values()]
    },
  },
  mounted() {
    // const obj = {
    //   type: 'start',
    //   typenode: 'node',
    //   x: 654,
    //   y: 143,
    //   context: '开始',
    //   width: '120',
    //   height: '60',
    //   id: 1,
    //   children: [
    //     {
    //       type: 'end',
    //       typenode: 'node',
    //       x: 459,
    //       y: 268,
    //       context: '结束',
    //       width: '120',
    //       height: '60',
    //       id: 2,
    //       children: [
    //         {
    //           type: 'start',
    //           typenode: 'node',
    //           x: 343,
    //           y: 354,
    //           context: '开始',
    //           width: '120',
    //           height: '60',
    //           id: 6,
    //           children: [],
    //         },
    //       ],
    //     },
    //     {
    //       type: 'end',
    //       typenode: 'node',
    //       x: 830,
    //       y: 239,
    //       context: '结束',
    //       width: '120',
    //       height: '60',
    //       id: 3,
    //       children: [],
    //     },
    //   ],
    // }
    // this.tranforms(obj)
  },
  components: {
    classIfication,
    svgEllipse,
    svgPolygon,
    svgRect,
    dialogBox,
    svgPath,
  },
  beforeDestroy() {
    document.onkeydown = undefined
  }
}
