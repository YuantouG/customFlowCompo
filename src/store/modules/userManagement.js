// 用户管理页数据参数
// 认证状态选项
const atteoptions = [
  // 1,审核中2,审核成功0,未认证
  {
    value: '',
    label: '全部',
  },
  {
    value: '0',
    label: '未认证',
  },
  {
    value: '1',
    label: '已认证',
  },
]
// 牛人选项
const personOptions = [
  {
    value: '',
    label: '全部',
  },
  {
    value: '1',
    label: '牛人',
  },
  {
    value: '2',
    label: '非牛人',
  },
]
// 表格参数
const tableOptions = [
  {
    label: '序号',
    width: '80',
    props: '__keys',
    align: 'center',
  },
  {
    label: '所在城市',
    props: 'cityStr',
    align: 'center',
  },
  {
    label: '牛人编号',
    props: 'userCode',
    align: 'center',
  },
  {
    label: '用户昵称',
    props: 'nickName',
    align: 'center',
  },
  {
    label: '头像',
    props: 'avatar',
    align: 'center',
    type: 'scope',
    width: '75px',
  },
  {
    label: '联系方式',
    props: 'phone',
    align: 'center',
  },
  {
    label: '职业',
    props: 'occupation',
    type: 'scope',
    align: 'center',
  },
  {
    label: '角色',
    props: 'roles',
    align: 'center',
    type: 'scope',
  },
  {
    label: '实名认证',
    props: 'isAuthentication',
    align: 'center',
    type: 'scope',
  },
  {
    label: '注册时间',
    props: 'createTime',
    width: '180',
    align: 'center',
  },
  {
    label: '平台等级',
    props: 'level',
    width: '50',
    align: 'center',
    type: 'scope',
  },
  {
    label: '影响力',
    props: 'power',
    width: '50',
    align: 'center',
  },
  {
    label: '作品',
    props: 'works',
    type: 'scope',
    align: 'center',
  },
  {
    label: '操作',
    props: 'operate',
    type: 'scope',
    align: 'center',
    width: '200',
  },
]

// 用户认证状态
const userAuthSelectOptions = [
  {
    value: '',
    label: '全部',
  },
  {
    value: '-1',
    label: '审核不通过',
  },
  {
    value: '1',
    label: '审核中',
  },
  {
    value: '2',
    label: '审核通过',
  },
]

// 用户审核表格参数
const userCompnayAuthOptions = [
  {
    label: '认证类型',
    props: 'authType',
    align: 'center',
    type: 'scope',
  },
  {
    label: '昵称',
    props: 'nickName',
    align: 'center',
  },
  {
    label: '账号',
    props: 'username',
    align: 'center',
  },
  {
    label: '公司名称',
    props: 'username',
    align: 'center',
  },
  {
    label: '公司地址',
    props: 'companyAddress',
    align: 'center',
  },
  {
    label: '联系人',
    props: 'contractUserName',
    align: 'center',
  },
  {
    label: '联系电话',
    props: 'contractUserPhone',
    align: 'center',
  },
  {
    label: '图片',
    props: 'businessLicenseImgUrl',
    type: 'scope',
    align: 'center',
  },
  {
    label: '申请时间',
    props: 'createTime',
    align: 'center',
  },
  {
    label: '状态',
    props: 'status',
    align: 'center',
    type: 'scope',
  },
  {
    label: '操作',
    props: 'operate',
    type: 'scope',
    align: 'center',
    width: '200',
  },
]
// 用户审核表格参数
const userOccupationAuthOptions = [
  {
    label: '认证类型',
    props: 'authType',
    align: 'center',
    type: 'scope',
  },
  {
    label: '昵称',
    props: 'nickName',
    align: 'center',
  },
  {
    label: '账号',
    props: 'username',
    align: 'center',
  },
  {
    label: '姓名',
    props: 'realityName',
    align: 'center',
    type: 'scope',
  },
  {
    label: '职位',
    props: 'occupationName',
    align: 'center',
  },
  {
    label: '工作年限',
    props: 'workingLife',
    align: 'center',
  },
  {
    label: '城市',
    props: 'city',
    align: 'center',
  },
  {
    label: '图片',
    props: 'identityImgUrl',
    type: 'scope',
    align: 'center',
  },
  {
    label: '申请时间',
    props: 'createTime',
    align: 'center',
  },
  {
    label: '状态',
    props: 'status',
    align: 'center',
    type: 'scope',
  },
  {
    label: '审核人',
    props: 'auditUser',
    align: 'center',
    type: 'scope',
  },
  {
    label: '审核时间',
    props: 'auditTime',
    align: 'center',
    type: 'scope',
  },
  {
    label: '备注',
    props: 'remark',
    align: 'center',
    type: 'scope',
  },
  {
    label: '操作',
    props: 'operate',
    type: 'scope',
    align: 'center',
    width: '200',
  },
]

// 活动列表页表格参数
const stageTableOptions = [
  {
    label: '#',
    width: '60',
    props: '__keys',
    type: 'scope',
    align: 'center',
  },
  {
    label: '主办方',
    width: '180',
    props: 'company',
    align: 'center',
  },
  {
    label: '活动标题',
    width: '180',
    props: 'title',
    align: 'center',
  },
  {
    label: '联系方式',
    width: '180',
    props: 'phone',
    align: 'center',
  },
  {
    label: '类型',
    props: 'typeStr',
    align: 'center',
  },
  // {
  // 	label: "发布方",
  // 	props: "contactName",
  // 	align: "center"
  // },
  {
    label: '参与人数',
    props: 'num',
    align: 'center',
  },
  {
    label: '报名结束',
    props: 'enrollEndTime',
    align: 'center',
  },
  {
    label: '活动开始时间',
    props: 'beginTime',
    align: 'center',
  },
  {
    label: '权限',
    props: 'createTime',
    align: 'center',
    type: 'scope',
  },
  {
    label: '状态',
    props: 'statusStr',
    align: 'center',
  },
  {
    label: '操作',
    width: '200',
    props: 'operate',
    type: 'scope',
    align: 'center',
  },
]

const state = {
  atteoptions,
  personOptions,
  tableOptions,
  occupationOptions: [],
  userCompnayAuthOptions,
  userOccupationAuthOptions,
  userAuthSelectOptions,
  stageTableOptions,
}

const actions = {}

const mutations = {
  SET_OCCUPATION_OPTIONS(state, product) {
    state.occupationOptions = product
  },
}

export default {
  state,
  actions,
  mutations,
}
