const searchParams = [
	{
		label: "经营分类",
		props: "busScope",
		value: "",
		options: [
			{
				label: "全部",
				value: "",
			},
			{
				label: "场地",
				value: "1",
			},
			{
				label: "服装道具",
				value: "2",
			},
			{
				label: "广告制作",
				value: "3",
			},
			{
				label: "摄影器材",
				value: "4",
			}
		]
	},
	{
		label: "是否认证",
		props: "authenticationStatus",
		value: "",
		options: [
			{
				label: "全部",
				value: "",
			},
			{
				label: "已认证",
				value: "1",
			},
			{
				label: "未认证",
				value: "0",
			},
		]
	},
	{
		label: "商品上传",
		props: "putaway",
		value: "",
		options: [
			{
				label: "全部",
				value: "",
			},
			{
				label: "已上传",
				value: "1",
			},
			{
				label: "未上传",
				value: "2",
			},
		]
	},
];

const auditParams = [
	{
		label: "经营分类",
		props: "busScope",
		value: "",
		options: [
			{
				label: "全部",
				value: "",
			},
			{
				label: "器材类",
				value: "1",
			},
			{
				label: "道具类",
				value: "2",
			},
			{
				label: "场地类",
				value: "3",
			},
			{
				label: "广告制作",
				value: "4",
			}
		]
	}
];

const storeParams = [
	{
		label: "经营分类",
		props: "",
		value: "",
		options: [
			{
				label: "全部",
				value: "",
			},
			{
				label: "场地租凭",
				value: "1",
			},
			{
				label: "器材软件",
				value: "2",
			},
			{
				label: "制作采购",
				value: "3",
			},
			{
				label: "演艺配音",
				value: "4",
			},
			{
				label: "道具搭建",
				value: "5",
			}
		]
	},
	
	{
		label: "商品上传",
		props: "",
		value: "",
		options: [
			{
				label: "全部",
				value: "",
			},
			{
				label: "已上传",
				value: "1",
			},
			{
				label: "未上传",
				value: "0",
			},
		]
	}
	
]

const state = {
	searchParams,
	auditParams ,
	storeParams
};


const actions = {};

const mutations = {};

export default {
	state,
	actions,
	mutations
};