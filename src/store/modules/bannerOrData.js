import {getTypeList} from "@api/bannerOrapi.js"


const state ={
    TypeList:[],
    LinkList:[]
};

const actions ={
    /**
     * 获取banner字典-类型
     * @param commit
     * @constructor
     */
    GetTypeList({commit}){
        getTypeList().then(res =>{
            console.log(res);
            commit("GET_TYPE_LIST", res.types);
        })
    },
    /**
     * 获取banner字典-links
     * @param commit
     * @constructor
     */
    GetLinkList({commit}){
        getTypeList().then(res =>{
            console.log(res);
            commit("GET_LINK_LIST", res.links);
        })
    }
};

const mutations ={
    GET_TYPE_LIST:(state,data) =>{
        state.TypeList = data;
    },
    GET_LINK_LIST:(state,data) =>{
        state.LinkList = data;
    }
};

export default {
    state,
    actions,
    mutations
};