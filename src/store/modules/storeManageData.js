import {getBusiTypeList,getStoreList,getStoreDetails,getInsurances,getKingKongList} from "@api/storeManage.js"

const state ={
	BusiTypeList:[],
	StoreList:[],
	StoreDetails:[],
	SupperlistDetails:[],
	insurances:[],
	kingkonglist:[],
	CardDetails:[],
}

const actions ={
	/**
	 * 获取店铺管理经营分类列表
	 */
	GetBusiTypeList({commit}){
		getBusiTypeList().then(data =>{
			commit("GET_BUSI_TYPE_LIST",data);
		});
	},
	
	/**
	 * 获取店铺列表
	 */
	GetStoreList({commit},params){
		getStoreList(params).then(data =>{
			data.records = data.records.map((val,index) =>{
					if(val.authStatus == 2){
						val.authStatus = "已认证";
						
					}else{
						val.authStatus ="未认证";
					}
					if(val.deposit == 0 || val.deposit == "" || val.deposit == null){
						val.deposit = "未缴纳"
					}else{
						val.deposit = "￥"+val.deposit;
					}
					return val;
			})
			commit("GET_STORE_LIST",data);
		})
	},
	
	/**
	 * 获取店铺详情
	 */
	GetStoreDetails({commit},param){
		getStoreDetails(param).then(data =>{
			commit("GET_STORE_DETAILS",data.data.data);
		})
	},
	
	/**
	 * 店铺推荐获取保证金
	 */
	GetInsurances({commit}){
		getInsurances().then(data =>{
			commit("GET_INSURANCES",data);
		})
	},
	
	/**
	 * 金刚区列表
	 */
	GetKingKongList({commit},cityId){
		getKingKongList(cityId).then(data=>{
			commit("GET_KING_KONG_LIST",data);
		})
	}
	
}

const mutations ={
	GET_BUSI_TYPE_LIST:(state,data) => {
		state.BusiTypeList = data;
	},
	
	GET_STORE_LIST:(state,data) =>{
		state.StoreList = data;
	},
	
	GET_STORE_DETAILS:(state,data) =>{
		state.StoreDetails = data;
	},
	
	GET_INSURANCES:(state,data) =>{
		state.insurances = data;
	},
	
	GET_KING_KONG_LIST:((state,data) =>{
		state.kingkonglist = data;
	})
}


export default{
	state,
	actions,
	mutations
}