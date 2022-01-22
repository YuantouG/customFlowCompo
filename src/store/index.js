import Vue from 'vue'
import Vuex from 'vuex'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import menu from './modules/menu'
import user from './modules/user'
import formsParams from './modules/formsParams'
import tableParams from './modules/tableParams'
import userManagement from './modules/userManagement'
import getters from './getters'
import proCity from './modules/proCity.js'
import storeManageData from './modules/storeManageData.js'
import bannerOrData from './modules/bannerOrData.js'

/***重写element-ui $message 解决消息多次弹出的问题**/
import { Message } from 'element-ui'
import ElementUI from 'element-ui'
let messageInstance = null
const overrideMessage = (options) => {
  if (messageInstance) {
    messageInstance.close()
  }
  messageInstance = Message(options)
}
;['error', 'success', 'info', 'warning'].forEach((type) => {
  overrideMessage[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options,
      }
    }
    options.type = type
    return overrideMessage(options)
  }
})
/***重写message**/
Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000,
})
Vue.prototype.$message = overrideMessage

Vue.use(VueQuillEditor)
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu,
    user,
    formsParams,
    tableParams,
    userManagement,
    proCity,
    storeManageData,
    bannerOrData,
  },
  getters,
})
