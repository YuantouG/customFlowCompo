import {
	getProvinceList,
	getOccupationOptions
} from "@api/common";

import {
	checkCompanyNameUsable,
	checkPhoneNumberUsable
} from "@api/srmprovider";

import {
	getActivityTypeList
} from "@api/stage"

import {
	checkIdentityCardCode,
	checkPhoneType,
	checkCellphoneNumber
} from "@util/common"


const labelWidth = "200px";
const formItemLableWidth = 200;
// const formItemLableWidthV2 = 100;

const supplierFormAdd = [{
		title: "公司及联系人信息",
		forms: [{
				label: {
					value: "公司名称",
					type: "text",
					width: labelWidth,
					span: 24,
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入公司名称",
							trigger: "change"
						},
						{
							min: 3,
							max: 30,
							message: "长度在 3 到 30 个字符",
							trigger: "change"
						},
						{
							validator: (rule, value, callback) => {
								checkCompanyNameUsable({
									companyName: value
								}).then(data => {
									if (data) {
										callback();
									} else {
										callback(new Error("公司名已存在!"));
									}
								});
							},
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入公司名称",
						labelWidth: formItemLableWidth,
						span: 20,
						props: "companyName",
					}
				}
			},
			{
				label: {
					value: "公司所在地址",
					type: "text",
					width: labelWidth,
					span: 9
				},
				forms: {
					rules: [{
						required: true,
						message: "请选择省",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择省",
						labelWidth: formItemLableWidth,
						props: "provinceid",
						params: {
							value: "id",
							label: "name"
						}
					},

				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 5
				},
				forms: {
					rules: [{
						required: true,
						message: "请选择市",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择市",
						labelWidth: 0,
						props: "cityid",
						viewType: "show",
						params: {
							value: "id",
							label: "name"
						}
					},
				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 5
				},
				forms: {
					rules: [{
						required: true,
						message: "请选择区",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择区",
						labelWidth: 0,
						props: "regionid",
						viewType: "show",
						params: {
							value: "id",
							label: "name"
						}
					},
				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 5
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入详细地址",
							trigger: "change"
						},
						{
							min: 3,
							max: 40,
							message: "长度在 3 到 40 个字符",
							trigger: "change"
						},
					],
					forms: {
						type: "input",
						placeholder: "请输入详细地址",
						labelWidth: 0,
						props: "companyAddress",
						viewType: "show"
					},
				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					forms: {
						type: "slot",
						labelWidth: formItemLableWidth,
						props: "slot_map",
					},
				},
			},
			{
				label: {
					value: "注册资金",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入注册资金",
							trigger: "change"
						},
						{
							min: 3,
							max: 30,
							message: "长度在 3 到 30 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入注册资金",
						labelWidth: formItemLableWidth,
						props: "registeredCapital",
						span: 16,
					}
				}
			},
			{
				label: {
					value: "员工总数",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入员工总数", trigger: "change" },
						// { min: 1, max: 7, message: "长度在 1 到 7 个字符", trigger: "change" }
					],
					forms: {
						type: "input",
						placeholder: "请输入员工总数",
						labelWidth: formItemLableWidth,
						props: "employeeNum",
						span: 10,
					}
				}
			},
			{
				label: {
					value: "公司电话",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入公司电话号码",
							trigger: "change"
						},
						{
							min: 1,
							max: 13,
							message: "长度在 1 到 13 位数字",
							trigger: "change"
						},
						{
							validator: (rule, value, callback) => {
								if (checkPhoneType(value)) {
									callback();
								} else {
									callback(new Error("请输入正确的电话号码!"));
								}
							},
							trigger: "blur"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入公司电话号码",
						labelWidth: formItemLableWidth,
						props: "companyPhone",
						span: 16,
					}
				}
			},
			{
				label: {
					value: "电子邮箱",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入电子邮箱地址", trigger: "change" },
						{
							type: "email",
							message: "请输入正确的邮箱地址",
							trigger: "blur"
						},
						{
							min: 1,
							max: 40,
							message: "长度在 1 到 40 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入电子邮箱地址",
						labelWidth: formItemLableWidth,
						props: "companyEmail",
						span: 16,
					}
				}
			},
			{
				label: {
					value: "联系人姓名",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入联系人姓名",
							trigger: "change"
						},
						{
							min: 1,
							max: 10,
							message: "长度在 1 到 10 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入联系人姓名",
						labelWidth: formItemLableWidth,
						props: "contactName",
						span: 10,
					}
				}
			},
			{
				label: {
					value: "联系人电话",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入联系人电话",
							trigger: "change"
						},
						{
							validator: (rule, value, callback) => {
								if (checkCellphoneNumber(value)) {
									callback();
								} else {
									callback(new Error("请输入正确的电话号码!"));
								}
							},
							trigger: "blur"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入联系人电话",
						labelWidth: formItemLableWidth,
						props: "contactPhone",
						span: 10,
					}
				}
			},
		]
	},
	{
		title: "营业执照信息",
		forms: [{
				label: {
					value: "营业执照号",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入营业执照号",
							trigger: "change"
						},
						{
							min: 18,
							max: 20,
							message: "长度在 18 到 20 个字符",
							trigger: "blur"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入营业执照号",
						labelWidth: formItemLableWidth,
						props: "busLicNum",
						span: 10,
					}
				}
			},
			{
				label: {
					value: "法定经营范围",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入法定经营范围",
							trigger: "change"
						},
						{
							min: 1,
							max: 800,
							message: "长度在 1 到 800 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "textarea",
						placeholder: "请输入法定经营范围",
						labelWidth: formItemLableWidth,
						props: "busScope",
						span: 24,
					}
				}
			},
			{
				label: {
					value: "营业执照电子版",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "fileupload",
						placeholder: "请上传营业执照扫描件",
						help_message: "支持JPG、JPEG、PNG，不超过5MB",
						labelWidth: formItemLableWidth,
						// props: "busLicPhoto",
						// imgs: "busLicPhotoImg",
						props: "busLicPhoto",
						imgs: "busLicPhotoURL",
						span: 10,
						params: {
							accept: ".jpg,.jpeg,.png",
							max: 10
						}
					}
				}
			}
			,{
				label: {
					value: "公司类型",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "slot",
						placeholder: "",
						labelWidth: formItemLableWidth,
						props: "companyTypeNIC",
						span: 0,
					}
				}
			},
		]
	},
	{
		title: "法人信息",
		forms: [{
				label: {
					value: "法人名字",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入法人姓名",
							trigger: "change"
						},
						{
							min: 1,
							max: 10,
							message: "长度在 1 到 10 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入法人姓名",
						labelWidth: formItemLableWidth,
						props: "legalPersonName",
						span: 6,
					}
				}
			},
			{
				label: {
					value: "法人身份证号",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入法人身份证号", trigger: "change" },
						// { min: 1, max: 18, message: "长度在 1 到 18 个字符", trigger: "change" },
						// { validator: (rule, value, callback) => {
						// 	if(checkIdentityCardCode(value)) {
						// 		callback();
						// 	} else {
						// 		callback(new Error("请输入正确的身份证号码!"));
						// 	}
						// }, trigger: "blur" }
					],
					forms: {
						type: "input",
						placeholder: "请输入法人身份证号",
						labelWidth: formItemLableWidth,
						props: "legalPersonIdentityCard",
						span: 12,
					}
				}
			},
			{
				label: {
					value: "身份证电子版",
					type: "text",
					width: labelWidth,
					span: 14
				},
				forms: {
					rules: [],
					forms: {
						type: "fileupload",
						placeholder: "请上传身份证正面",
						help_message: "",
						labelWidth: formItemLableWidth,
						// props: "legalPersonIdentityPhoto",
						// imgs: "legalPersonIdentityPhotoImg",
						props: "legalPersonIdentityPhoto",
						// imgas: "symbolV1URL",
						imgs: "symbolV1URL",
						params: {
							accept: ".jpg,.jpeg,.png",
							max: 5
						}
					},
				}
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 10
				},
				forms: {
					rules: [],
					forms: {
						type: "fileupload",
						placeholder: "请上传身份证反面",
						help_message: "",
						labelWidth: 0,
						// props: "legalPersonIdentityPhotoB",
						// imgs: "legalPersonIdentityPhotoBImg",
						props: "legalPersonIdentityPhotoB",
						// imgas: "symbolV2URL",
						imgs: "symbolV2URL",
						params: {
							accept: ".jpg,.jpeg,.png",
							max: 5
						}
					},
				}
			},
		]
	},
	{
		title: "银行信息",
		forms: [{
				label: {
					value: "银行开户名",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入请输入开户银行名称", trigger: "change" },
						// { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "change" }
					],
					forms: {
						type: "input",
						placeholder: "请输入请输入开户银行名称",
						labelWidth: formItemLableWidth,
						props: "bankCardName",
						span: 6,
					}
				}
			},
			{
				label: {
					value: "银行账号",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入开户银行帐号", trigger: "change" },
						// { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "change" }
					],
					forms: {
						type: "input",
						placeholder: "请输入开户银行帐号",
						labelWidth: formItemLableWidth,
						props: "bankCardNum",
						span: 12,
					}
				}
			},
			{
				label: {
					value: "开户分行",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入开户银行分行", trigger: "change" },
						// { min: 3, max: 60, message: "长度在 3 到 60 个字符", trigger: "change" }
					],
					forms: {
						type: "input",
						placeholder: "请输入开户银行分行",
						labelWidth: formItemLableWidth,
						props: "bankCardCreateAddress",
						span: 12,
					}
				}
			},
		]
	},
	{
		title: "账号信息",
		forms: [{
				label: {
					value: "登录账号",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							validator: (rule, value, callback) => {
								if (!checkCellphoneNumber(value) && value) {
									value && callback(new Error("请输入合法的手机号码"));
								}
								callback();
							},
							trigger: "change"
						},
						{
							validator: (rule, value, callback) => {
								checkPhoneNumberUsable({
									phoneNumber: value
								}).then(data => {
									if (data) {
										callback();
									} else {
										callback(new Error("手机号已被注册"));
									}
								});
							},
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入手机号码系统登录账号",
						labelWidth: formItemLableWidth,
						props: "accountPhone",
						span: 12,
					}
				}
			},
			{
				label: {
					value: "登录密码",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "password",
						placeholder: "请输入6-18位系统登录密码",
						labelWidth: formItemLableWidth,
						props: "accountPassword",
						span: 12,
					},
				}
			},
			{
				label: {
					value: "经营分类",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "select",
						placeholder: "请选择营分类",
						labelWidth: formItemLableWidth,
						props: "accountBusinessScope",
						params: {
							value: "uniqueId",
							label: "typeName"
						},
						span: 12,
					}
				}
			},
			{
				label: {
					value: "是否认证商家",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "select",
						placeholder: "请选择是否认证商家",
						labelWidth: formItemLableWidth,
						props: "authenticationStatus",
						data: [{
								value: 1,
								label: "是"
							},
							{
								value: 0,
								label: "否"
							},
						],
						params: {
							value: "value",
							label: "label"
						},
						span: 12,
					}
				}
			},
		]
	}
];

const supplierFormEdit = [{
		title: "公司及联系人信息",
		forms: [{
				label: {
					value: "公司名称",
					type: "text",
					width: labelWidth,
					span: 24,
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入公司名称",
							trigger: "change"
						},
						{
							min: 3,
							max: 30,
							message: "长度在 3 到 30 个字符",
							trigger: "change"
						},
						// {
						// 	validator: (rule, value, callback) => {
						// 		checkCompanyNameUsable({companyName: value}).then(data => {
						// 			if (data) {
						// 				callback();
						// 			} else {
						// 				callback(new Error("公司名已存在!"));
						// 			}
						// 		});
						// 	}, trigger: "change"
						// }
					],
					forms: {
						type: "input",
						placeholder: "请输入公司名称",
						labelWidth: formItemLableWidth,
						span: 20,
						props: "companyName",
					}
				}
			},
			{
				label: {
					value: "公司所在地址",
					type: "text",
					width: labelWidth,
					span: 9
				},
				forms: {
					rules: [{
						required: true,
						message: "请选择省",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择省",
						labelWidth: formItemLableWidth,
						props: "provinceid",
						params: {
							value: "id",
							label: "name"
						}
					},

				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 5
				},
				forms: {
					rules: [{
						required: true,
						message: "请选择市",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择市",
						labelWidth: 0,
						props: "cityid",
						viewType: "show",
						params: {
							value: "id",
							label: "name"
						}
					},
				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 5
				},
				forms: {
					rules: [{
						required: true,
						message: "请选择区",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择区",
						labelWidth: 0,
						props: "regionid",
						viewType: "show",
						params: {
							value: "id",
							label: "name"
						}
					},
				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 5
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入详细地址",
							trigger: "change"
						},
						{
							min: 3,
							max: 40,
							message: "长度在 3 到 40 个字符",
							trigger: "change"
						},
					],
					forms: {
						type: "input",
						placeholder: "请输入详细地址",
						labelWidth: 0,
						props: "companyAddress",
						viewType: "show"
					},
				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					forms: {
						type: "slot",
						labelWidth: formItemLableWidth,
						props: "slot_map",
					},
				},
			},
			{
				label: {
					value: "注册资金",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入注册资金",
							trigger: "change"
						},
						{
							min: 3,
							max: 30,
							message: "长度在 3 到 30个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入注册资金",
						labelWidth: formItemLableWidth,
						props: "registeredCapital",
						span: 16,
					}
				}
			},
			{
				label: {
					value: "员工总数",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入员工总数", trigger: "change" },
						// { min: 1, max: 7, message: "长度在 1 到 7 个字符", trigger: "change" }
					],
					forms: {
						type: "input",
						placeholder: "请输入员工总数",
						labelWidth: formItemLableWidth,
						props: "employeeNum",
						span: 10,
					}
				}
			},
			{
				label: {
					value: "公司电话",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入公司电话号码",
							trigger: "change"
						},
						{
							validator: (rule, value, callback) => {
								if (checkPhoneType(value)) {
									callback();
								} else {
									callback(new Error("请输入正确的电话号码!"));
								}
							},
							trigger: "blur"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入公司电话号码",
						labelWidth: formItemLableWidth,
						props: "companyPhone",
						span: 16,
					}
				}
			},
			{
				label: {
					value: "电子邮箱",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入电子邮箱地址", trigger: "change" },
						{
							type: "email",
							message: "请输入正确的邮箱地址",
							trigger: "blur"
						},
						{
							min: 1,
							max: 40,
							message: "长度在 1 到 40 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入电子邮箱地址",
						labelWidth: formItemLableWidth,
						props: "companyEmail",
						span: 16,
					}
				}
			},
			{
				label: {
					value: "联系人姓名",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入联系人姓名",
							trigger: "change"
						},
						{
							min: 1,
							max: 10,
							message: "长度在 1 到 10 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入联系人姓名",
						labelWidth: formItemLableWidth,
						props: "contactName",
						span: 10,
					}
				}
			},
			{
				label: {
					value: "联系人电话",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入联系人电话",
							trigger: "change"
						},
						{
							validator: (rule, value, callback) => {
								if (checkCellphoneNumber(value)) {
									callback();
								} else {
									callback(new Error("请输入正确的电话号码!"));
								}
							},
							trigger: "blur"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入联系人电话",
						labelWidth: formItemLableWidth,
						props: "contactPhone",
						span: 10,
					}
				}
			},
		]
	},
	{
		title: "营业执照信息",
		forms: [{
				label: {
					value: "营业执照号",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入营业执照号",
							trigger: "change"
						},
						{
							min: 18,
							max: 20,
							message: "长度在 18 到 20 个字符",
							trigger: "blur"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入营业执照号",
						labelWidth: formItemLableWidth,
						props: "busLicNum",
						span: 10,
					}
				}
			},
			{
				label: {
					value: "法定经营范围",
					type: "text",
					width: labelWidth,
					span: 24,
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入法定经营范围",
							trigger: "change"
						},
						{
							min: 1,
							max: 800,
							message: "长度在 1 到 800 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "textarea",
						placeholder: "请输入法定经营范围",
						labelWidth: formItemLableWidth,
						props: "busScope",
						span: 24,
					}
				}
			},
			{
				label: {
					value: "营业执照电子版",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "fileupload",
						placeholder: "请上传营业执照扫描件",
						help_message: "支持JPG、JPEG、PNG，不超过5MB",
						labelWidth: formItemLableWidth,
						// props: "busLicPhoto",
						// imgs: "busLicPhotoImg",
						props: "busLicPhoto",
						imgs: "busLicPhotoURL",
						span: 10,
						params: {
							accept: ".jpg,.jpeg,.png",
							max: 10
						}
					}
				}
			},
			{
				label: {
					value: "公司类型", // todo
					type: "text",
					width: labelWidth,
					span: 24,
				},
				forms: {
					rules: [],
					forms: {
						type: "slot",
						placeholder: "",
						labelWidth: formItemLableWidth,
						props: "companyTypeNIC",
						span: 0,
					}
				}
			},
		]
	},
	{
		title: "法人信息",
		forms: [{
				label: {
					value: "法人名字",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入法人姓名",
							trigger: "change"
						},
						{
							min: 1,
							max: 10,
							message: "长度在 1 到 10 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入法人姓名",
						labelWidth: formItemLableWidth,
						props: "legalPersonName",
						span: 6,
					}
				}
			},
			{
				label: {
					value: "法人身份证号",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入法人身份证号", trigger: "change" },
						// { min: 1, max: 18, message: "长度在 1 到 18 个字符", trigger: "change" },
						// { validator: (rule, value, callback) => {
						// 	if(checkIdentityCardCode(value)) {
						// 		callback();
						// 	} else {
						// 		callback(new Error("请输入正确的身份证号码!"));
						// 	}
						// }, trigger: "blur" }
					],
					forms: {
						type: "input",
						placeholder: "请输入法人身份证号",
						labelWidth: formItemLableWidth,
						props: "legalPersonIdentityCard",
						span: 12,
					}
				}
			},
			{
				label: {
					value: "身份证电子版",
					type: "text",
					width: labelWidth,
					span: 14
				},
				forms: {
					rules: [],
					forms: {
						type: "fileupload",
						placeholder: "请上传身份证正面",
						help_message: "",
						labelWidth: formItemLableWidth,
						// props: "legalPersonIdentityPhoto",
						// imgs: "legalPersonIdentityPhotoImg",
						props: "legalPersonIdentityPhoto",
						imgs: "symbolV1URL",
						params: {
							accept: ".jpg,.jpeg,.png",
							max: 5
						}
					},
				}
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 10
				},
				forms: {
					rules: [],
					forms: {
						type: "fileupload",
						placeholder: "请上传身份证反面",
						help_message: "",
						labelWidth: 0,
						// props: "legalPersonIdentityPhotoB",
						// imgs: "legalPersonIdentityPhotoBImg",
						props: "legalPersonIdentityPhotoB",
						imgs: "symbolV2URL",
						params: {
							accept: ".jpg,.jpeg,.png",
							max: 5
						}
					},
				}
			},
		]
	},
	{
		title: "银行信息",
		forms: [{
				label: {
					value: "银行开户名",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入请输入开户银行名称", trigger: "change" },
						// { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "change" }
					],
					forms: {
						type: "input",
						placeholder: "请输入请输入开户银行名称",
						labelWidth: formItemLableWidth,
						props: "bankCardName",
						span: 6,
					}
				}
			},
			{
				label: {
					value: "银行账号",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入开户银行帐号", trigger: "change" },
						// { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "change" }
					],
					forms: {
						type: "input",
						placeholder: "请输入开户银行帐号",
						labelWidth: formItemLableWidth,
						props: "bankCardNum",
						span: 12,
					}
				}
			},
			{
				label: {
					value: "开户分行",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入开户银行分行", trigger: "change" },
						// { min: 3, max: 60, message: "长度在 3 到 60 个字符", trigger: "change" }
					],
					forms: {
						type: "input",
						placeholder: "请输入开户银行分行",
						labelWidth: formItemLableWidth,
						props: "bankCardCreateAddress",
						span: 12,
					}
				}
			},
		]
	},
	{
		title: "账号信息",
		forms: [{
				label: {
					value: "登录账号",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入公司电话号码",
							trigger: "change"
						},
						{
							min: 1,
							max: 11,
							message: "长度在 1 到 11 位数字",
							trigger: "change"
						},
						{
							validator: (rule, value, callback) => {
								if (checkCellphoneNumber(value)) {
									callback();
								} else {
									callback(new Error("请输入正确的电话号码!"));
								}
							},
							trigger: "change"
						},
						// {
						// 	validator: (rule, value, callback) => {
						// 		if (!checkCellphoneNumber(value) && value) {
						// 			value && callback(new Error("请输入合法的手机号码"));
						// 		}
						// 		callback();
						// 	}, trigger: "change"
						// },
						// {
						// 	validator: (rule, value, callback) => {
						// 		checkPhoneNumberUsable({phoneNumber: value}).then(data => {
						// 			if (data) {
						// 				callback();
						// 			} else {
						// 				callback(new Error("手机号已存在"));
						// 			}
						// 		});
						// 	}, trigger: "change"
						// }
					],
					forms: {
						type: "input",
						placeholder: "请输入手机号码系统登录账号",
						labelWidth: formItemLableWidth,
						props: "accountPhone",
						span: 12,
					}
				}
			},
			{
				label: {
					value: "登录密码",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入登录密码",
							trigger: "change"
						},
						{
							min: 6,
							max: 18,
							message: "长度在 6 到 18 位数字",
							trigger: "change"
						},
					],
					forms: {
						type: "password",
						placeholder: "请输入6-18位系统登录密码",
						labelWidth: formItemLableWidth,
						props: "accountPassword",
						span: 12,
					}
				}
			},
			{
				label: {
					value: "经营分类",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "select",
						placeholder: "请选择营分类",
						labelWidth: formItemLableWidth,
						props: "accountBusinessScope",
						params: {
							value: "key",
							label: "value"
						},
						span: 12,
					}
				}
			},
			{
				label: {
					value: "是否认证商家",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "select",
						placeholder: "请选择是否认证商家",
						labelWidth: formItemLableWidth,
						props: "authenticationStatus",
						data: [{
								value: 1,
								label: "是"
							},
							{
								value: 0,
								label: "否"
							},
						],
						params: {
							value: "value",
							label: "label"
						},
						span: 12,
					}
				}
			},
		]
	}
]
const supplierFormEdit2 = [{
		title: "公司及联系人信息",
		forms: [{
				label: {
					value: "公司名称",
					type: "text",
					width: labelWidth,
					span: 24,
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入公司名称",
							trigger: "change"
						},
						{
							min: 3,
							max: 30,
							message: "长度在 3 到 30 个字符",
							trigger: "change"
						},
						// {
						// 	validator: (rule, value, callback) => {
						// 		checkCompanyNameUsable({companyName: value}).then(data => {
						// 			if (data) {
						// 				callback();
						// 			} else {
						// 				callback(new Error("公司名已存在!"));
						// 			}
						// 		});
						// 	}, trigger: "change"
						// }
					],
					forms: {
						type: "autocomplete",
						placeholder: "请输入公司名称",
						labelWidth: formItemLableWidth,
						span: 24,
						props: "companyName",
					}
				}
			},
			{
				label: {
					value: "公司所在地址",
					type: "text",
					width: labelWidth,
					span: 9
				},
				forms: {
					rules: [{
						required: true,
						message: "请选择省",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择省",
						labelWidth: formItemLableWidth,
						props: "provinceid",
						params: {
							value: "id",
							label: "name"
						}
					},

				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 5
				},
				forms: {
					rules: [{
						required: true,
						message: "请选择市",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择市",
						labelWidth: 0,
						props: "cityid",
						viewType: "show",
						params: {
							value: "id",
							label: "name"
						}
					},
				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 5
				},
				forms: {
					rules: [{
						required: true,
						message: "请选择区",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择区",
						labelWidth: 0,
						props: "regionid",
						viewType: "show",
						params: {
							value: "id",
							label: "name"
						}
					},
				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 5
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入详细地址",
							trigger: "change"
						},
						{
							min: 3,
							max: 40,
							message: "长度在 3 到 40 个字符",
							trigger: "change"
						},
					],
					forms: {
						type: "input",
						placeholder: "请输入详细地址",
						labelWidth: 0,
						props: "companyAddress",
						viewType: "show"
					},
				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					forms: {
						type: "slot",
						labelWidth: formItemLableWidth,
						props: "slot_map",
					},
				},
			},
			{
				label: {
					value: "注册资金",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入注册资金",
							trigger: "change"
						},
						{
							min: 3,
							max: 30,
							message: "长度在 3 到 30 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入注册资金",
						labelWidth: formItemLableWidth,
						props: "registeredCapital",
						span: 16,
					}
				}
			},
			{
				label: {
					value: "员工总数",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入员工总数", trigger: "change" },
						{ min: 1, max: 30, message: "长度在 1 到 30 个字符", trigger: "change" }
					],
					forms: {
						type: "input",
						placeholder: "请输入员工总数",
						labelWidth: formItemLableWidth,
						props: "employeeNum",
						span: 10,
					}
				}
			},
			{
				label: {
					value: "公司电话",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入公司电话号码",
							trigger: "change"
						},
						{
							validator: (rule, value, callback) => {
								if (checkPhoneType(value)) {
									callback();
								} else {
									callback(new Error("请输入正确的电话号码!"));
								}
							},
							trigger: "blur"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入公司电话号码",
						labelWidth: formItemLableWidth,
						props: "companyPhone",
						span: 16,
					}
				}
			},
			{
				label: {
					value: "电子邮箱",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入电子邮箱地址", trigger: "change" },
						{
							type: "email",
							message: "请输入正确的邮箱地址",
							trigger: "blur"
						},
						{
							min: 1,
							max: 40,
							message: "长度在 1 到 40 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入电子邮箱地址",
						labelWidth: formItemLableWidth,
						props: "companyEmail",
						span: 16,
					}
				}
			},
			{
				label: {
					value: "联系人姓名",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入联系人姓名",
							trigger: "change"
						},
						{
							min: 1,
							max: 10,
							message: "长度在 1 到 10 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入联系人姓名",
						labelWidth: formItemLableWidth,
						props: "contactName",
						span: 10,
					}
				}
			},
			{
				label: {
					value: "联系人电话",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入联系人电话",
							trigger: "change"
						},
						{
							validator: (rule, value, callback) => {
								if (checkCellphoneNumber(value)) {
									callback();
								} else {
									callback(new Error("请输入正确的电话号码!"));
								}
							},
							trigger: "blur"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入联系人电话",
						labelWidth: formItemLableWidth,
						props: "contactPhone",
						span: 10,
					}
				}
			},
		]
	},
	{
		title: "营业执照信息",
		forms: [{
				label: {
					value: "营业执照号",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入营业执照号",
							trigger: "change"
						},
						{
							min: 18,
							max: 20,
							message: "长度在 18 到 20 个字符",
							trigger: "blur"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入营业执照号",
						labelWidth: formItemLableWidth,
						props: "busLicNum",
						span: 10,
					}
				}
			},
			{
				label: {
					value: "法定经营范围",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入法定经营范围",
							trigger: "change"
						},
						{
							min: 1,
							max: 800,
							message: "长度在 1 到 800 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "textarea",
						placeholder: "请输入法定经营范围",
						labelWidth: formItemLableWidth,
						props: "busScope",
						span: 24,
					}
				}
			},
			{
				label: {
					value: "营业执照电子版",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "fileupload",
						placeholder: "请上传营业执照扫描件",
						help_message: "支持JPG、JPEG、PNG，不超过5MB",
						labelWidth: formItemLableWidth,
						// props: "busLicPhotoURL",
						// imgs: "busLicPhotoURL",
						props: "busLicPhoto",
						imgs: "busLicPhotoURL",
						span: 10,
						params: {
							accept: ".jpg,.jpeg,.png",
							max: 10
						}
					}
				}
			},
			{
				label: {
					value: "公司类型",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "slot",
						placeholder: "",
						labelWidth: formItemLableWidth,
						props: "serverTypeNIC",
						span: 0,
					}
				}
			},
		]
	},
	{
		title: "法人信息",
		forms: [{
				label: {
					value: "法人名字",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "input",
						labelWidth: formItemLableWidth,
						props: "legalPersonName",
						span: 6,
					}
				}
			},
			{
				label: {
					value: "法人身份证号",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入法人身份证号", trigger: "change" },
						// { min: 1, max: 18, message: "长度在 1 到 18 个字符", trigger: "change" },
						// { validator: (rule, value, callback) => {
						// 	if(checkIdentityCardCode(value)) {
						// 		callback();
						// 	} else {
						// 		callback(new Error("请输入正确的身份证号码!"));
						// 	}
						// }, trigger: "blur" }
					],
					forms: {
						type: "input",
						placeholder: "请输入法人身份证号",
						labelWidth: formItemLableWidth,
						props: "legalPersonIdentityCard",
						span: 12,
					}
				}
			},
			{
				label: {
					value: "代理人名字",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "input",
						labelWidth: formItemLableWidth,
						props: "authRealityName",
						span: 6,
					}
				}
			},
			{
				label: {
					value: "代理人身份证号码",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "input",
						labelWidth: formItemLableWidth,
						props: "authIdNumber",
						span: 12,
					}
				}
			},	
			{
				label: {
					value: "人脸认证结果",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "slot",
						labelWidth: formItemLableWidth,
						props: "result",
						span: 6,
					}
				}
			},
			{
				label: {
					value: "代理人授权照片",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "slot",
						labelWidth: formItemLableWidth,
						props: "pic",
						span: 6,
					}
				}
			},
		]
	},
	{
		title: "银行信息",
		forms: [{
				label: {
					value: "银行开户名",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入请输入开户银行名称", trigger: "change" },
						// { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "change" }
					],
					forms: {
						type: "input",
						placeholder: "请输入请输入开户银行名称",
						labelWidth: formItemLableWidth,
						props: "bankCardName",
						span: 6,
					}
				}
			},
			{
				label: {
					value: "银行账号",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入开户银行帐号", trigger: "change" },
						// { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "change" }
					],
					forms: {
						type: "input",
						placeholder: "请输入开户银行帐号",
						labelWidth: formItemLableWidth,
						props: "bankCardNum",
						span: 12,
					}
				}
			},
			{
				label: {
					value: "开户分行",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入开户银行分行", trigger: "change" },
						// { min: 3, max: 60, message: "长度在 3 到 60 个字符", trigger: "change" }
					],
					forms: {
						type: "input",
						placeholder: "请输入开户银行分行",
						labelWidth: formItemLableWidth,
						props: "bankCardCreateAddress",
						span: 12,
					}
				}
			},
		]
	},
	{
		title: "账号信息",
		forms: [{
				label: {
					value: "登录账号",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "input",
						placeholder: "请输入手机号码系统登录账号",
						labelWidth: formItemLableWidth,
						props: "accountPhone",
						viewType: "show",
						span: 12,
					}
				}
			},
			{
				label: {
					value: "登录密码",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入登录密码",
							trigger: "change"
						},
						{
							min: 6,
							max: 18,
							message: "长度在 6 到 18 位数字",
							trigger: "change"
						},
					],
					forms: {
						type: "password",
						placeholder: "请输入6-18位系统登录密码",
						labelWidth: formItemLableWidth,
						props: "accountPassword",
						span: 12,
					}
				}
			},
			{
				label: {
					value: "经营分类",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "select",
						placeholder: "请选择营分类",
						labelWidth: formItemLableWidth,
						props: "accountBusinessScope",
						params: {
							value: "key",
							label: "value"
						},
						span: 12,
					}
				}
			},
			{
				label: {
					value: "是否认证商家",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "select",
						placeholder: "请选择是否认证商家",
						labelWidth: formItemLableWidth,
						props: "authenticationStatus",
						data: [{
								value: 1,
								label: "是"
							},
							{
								value: 0,
								label: "否"
							},
						],
						params: {
							value: "value",
							label: "label"
						},
						span: 12,
					}
				}
			},
		]
	}
]

const auditFormEdit = [{
		title: "公司及联系人信息",
		forms: [{
				label: {
					value: "公司名称",
					type: "text",
					width: labelWidth,
					span: 24,
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入公司名称",
							trigger: "change"
						},
						{
							min: 1,
							max: 30,
							message: "长度在 1 到 30 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入公司名称",
						labelWidth: formItemLableWidth,
						span: 20,
						props: "companyName",
					}
				}
			},
			{
				label: {
					value: "公司所在地址",
					type: "text",
					width: labelWidth,
					span: 10
				},
				forms: {
					rules: [{
						required: true,
						message: "请输入公司地址",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择省",
						labelWidth: formItemLableWidth,
						props: "provinceid",
						params: {
							value: "id",
							label: "name"
						}
					},

				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 4
				},
				forms: {
					rules: [{
						required: true,
						message: "请输入公司地址",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择市",
						labelWidth: 0,
						props: "cityid",
						viewType: "show",
						params: {
							value: "id",
							label: "name"
						}
					},
				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 4
				},
				forms: {
					rules: [{
						required: true,
						message: "请输入公司地址",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择区",
						labelWidth: 0,
						props: "regionid",
						viewType: "show",
						params: {
							value: "id",
							label: "name"
						}
					},
				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 6
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入详细地址",
							trigger: "change"
						},
						{
							min: 3,
							max: 40,
							message: "长度在 3 到 40 个字符",
							trigger: "change"
						},
					],
					forms: {
						type: "input",
						placeholder: "请输入详细地址",
						labelWidth: 0,
						props: "companyAddress",
						viewType: "show"
					},
				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					forms: {
						type: "slot",
						labelWidth: formItemLableWidth,
						props: "slot_map",
					},
				},
			},
			{
				label: {
					value: "注册资金",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入注册资金",
							trigger: "change"
						},
						{
							min: 3,
							max: 30,
							message: "长度在 3 到 30 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入注册资金",
						labelWidth: formItemLableWidth,
						props: "registeredCapital",
						span: 16,
					}
				}
			},
			{
				label: {
					value: "员工总数",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入员工总数", trigger: "change" },
						// { min: 1, max: 6, message: "长度在 1 到 6 个字符", trigger: "change" }
					],
					forms: {
						type: "input",
						placeholder: "请输入员工总数",
						labelWidth: formItemLableWidth,
						props: "employeeNum",
						span: 10,
					}
				}
			},
			{
				label: {
					value: "公司电话",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入公司电话号码",
							trigger: "change"
						},
						{
							min: 1,
							max: 13,
							message: "长度在 1 到 13 位数字",
							trigger: "change"
						},
						{
							validator: (rule, value, callback) => {
								if (checkPhoneType(value)) {
									callback();
								} else {
									callback(new Error("请输入正确的电话号码!"));
								}
							},
							trigger: "blur"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入公司电话号码",
						labelWidth: formItemLableWidth,
						props: "companyPhone",
						span: 16,
					}
				}
			},
			{
				label: {
					value: "电子邮箱",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入电子邮箱地址", trigger: "change" },
						{
							type: "email",
							message: "请输入正确的邮箱地址",
							trigger: "blur"
						},
						{
							min: 1,
							max: 40,
							message: "长度在 1 到 40 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入电子邮箱地址",
						labelWidth: formItemLableWidth,
						props: "companyEmail",
						span: 16,
					}
				}
			},
			{
				label: {
					value: "联系人姓名",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入联系人姓名",
							trigger: "change"
						},
						{
							min: 1,
							max: 10,
							message: "长度在 1 到 10 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入联系人姓名",
						labelWidth: formItemLableWidth,
						props: "contactName",
						span: 10,
					}
				}
			},
			{
				label: {
					value: "联系人电话",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入联系人电话",
							trigger: "change"
						},
						{
							validator: (rule, value, callback) => {
								if (checkCellphoneNumber(value)) {
									callback();
								} else {
									callback(new Error("请输入正确的电话号码!"));
								}
							},
							trigger: "blur"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入联系人电话",
						labelWidth: formItemLableWidth,
						props: "contactPhone",
						span: 10,
					}
				}
			},
		]
	},
	{
		title: "营业执照信息",
		forms: [
			// {
			// 	label: {
			// 		value: "营业执照号",
			// 		type: "text",
			// 		width: labelWidth,
			// 		span: 24
			// 	},
			// 	forms: {
			// 		rules: [
			// 			{required: true, message: "请输入营业执照号", trigger: "change"},
			// 			{min: 18, max: 20, message: "长度在 18 到 20 个字符", trigger: "blur"}
			// 		],
			// 		forms: {
			// 			type: "input",
			// 			placeholder: "请输入营业执照号",
			// 			labelWidth: formItemLableWidth,
			// 			props: "busLicNum",
			// 			span: 10,
			// 		}
			// 	}
			// },
			// {
			// 	label: {
			// 		value: "法定经营范围",
			// 		type: "text",
			// 		width: labelWidth,
			// 		span: 24
			// 	},
			// 	forms: {
			// 		rules: [
			// 			{required: true, message: "请输入法定经营范围", trigger: "change"},
			// 			{min: 1, max: 500, message: "长度在 1 到 500 个字符", trigger: "change"}
			// 		],
			// 		forms: {
			// 			type: "textarea",
			// 			placeholder: "请输入法定经营范围",
			// 			labelWidth: formItemLableWidth,
			// 			props: "busScope",
			// 			span: 24,
			// 		}
			// 	}
			// },
			{
				label: {
					value: "营业执照电子版",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "fileupload",
						placeholder: "请上传营业执照扫描件",
						help_message: "支持JPG、JPEG、PNG，不超过5MB",
						labelWidth: formItemLableWidth,
						props: "busLicPhoto",
						imgs: "busLicPhotoURL",
						span: 10,
						params: {
							accept: ".jpg,.jpeg,.png",
							max: 10
						}
					}
				}
			},
			{
				label: {
					value: "公司类型",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [],
					forms: {
						type: "slot",
						placeholder: "",
						labelWidth: formItemLableWidth,
						props: "serverTypeNIC",
						span: 0,
					}
				}
			},
		]
	},
	{
		title: "法人信息",
		forms: [{
				label: {
					value: "法人名字",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入法人姓名",
							trigger: "change"
						},
						{
							min: 1,
							max: 10,
							message: "长度在 1 到 10 个字符",
							trigger: "change"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入法人姓名",
						labelWidth: formItemLableWidth,
						props: "legalPersonName",
						span: 6,
					}
				}
			},
			{
				label: {
					value: "法人身份证号",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
						// { required: true, message: "请输入法人身份证号", trigger: "change" },
						// { min: 1, max: 18, message: "长度在 1 到 18 个字符", trigger: "change" },
						// { validator: (rule, value, callback) => {
						// 	if(checkIdentityCardCode(value)) {
						// 		callback();
						// 	} else {
						// 		callback(new Error("请输入正确的身份证号码!"));
						// 	}
						// }, trigger: "blur" }
					],
					forms: {
						type: "input",
						placeholder: "请输入法人身份证号",
						labelWidth: formItemLableWidth,
						props: "legalPersonIdentityCard",
						span: 12,
					}
				}
			},
			{
				label: {
					value: "身份证电子版",
					type: "text",
					width: labelWidth,
					span: 14
				},
				forms: {
					rules: [],
					forms: {
						type: "fileupload",
						placeholder: "请上传身份证正面",
						help_message: "",
						labelWidth: formItemLableWidth,
						// props: "legalPersonIdentityPhoto",
						props: "legalPersonIdentityPhoto",
						imgs: "symbolV1URL",
						params: {
							accept: ".jpg,.jpeg,.png",
							max: 5
						}
					},
				}
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 10
				},
				forms: {
					rules: [],
					forms: {
						type: "fileupload",
						placeholder: "请上传身份证反面",
						help_message: "",
						labelWidth: 0,
						// props: "legalPersonIdentityPhotoB",
						props: "legalPersonIdentityPhotoB",
						imgs: "symbolV2URL",
						params: {
							accept: ".jpg,.jpeg,.png",
							max: 5
						}
					},
				}
			},
		]
	},
	{
		title: "申请分类",
		forms: [{
			label: {
				value: "经营分类",
				type: "text",
				width: labelWidth,
				span: 10
			},
			forms: {
				rules: [{
					required: true,
					message: "请选择经营分类",
					trigger: "change"
				}, ],
				forms: {
					type: "select",
					placeholder: "请选择省",
					labelWidth: formItemLableWidth,
					props: "accountBusinessScope",
					params: {
						value: "key",
						label: "value"
					}
				},

			},
		}, ]
	},
];

/**
 * 活动模块表单
 */
const stageFormAdd = [{
		title: "基础模块",
		forms: [{
				label: {
					value: "活动标题",
					type: "text",
					width: labelWidth,
					span: 20,
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入活动标题",
							trigger: "blur"
						},
						{
							min: 3,
							max: 100,
							message: "长度在 3 到 100 个字符",
							trigger: "blur"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入活动标题",
						labelWidth: formItemLableWidth,
						span: 20,
						props: "title",
					}
				}
			},
			{
				label: {
					value: "活动开始时间",
					type: "text",
					width: labelWidth,
					span: 10
				},
				forms: {
					rules: [{
						required: true,
						message: "请输入活动开始时间",
						trigger: "change"
					},{
						validator: (rule, value, callback) => {
							let startDate = value;
							startDate= startDate.replace(new RegExp("-","gm"),"/");
							let startDateM = (new Date(startDate)).getTime(); //得到毫秒数
							if(startDateM < Date.now()) {
								callback(new Error("活动开始时间不能小于当前时间"));
							} else {
								callback();
							}
						},
						trigger: "blur"
					}],
					forms: {
						type: "date-picker",
						placeholder: "请选择活动开始时间",
						labelWidth: formItemLableWidth,
						props: "beginTime",
						params: {
							valueFormat: "yyyy-MM-dd HH:mm:ss",
							format: "yyyy-MM-dd HH:mm:ss",
						}
					},

				},
			},
			{
				label: {
					value: "主办方",
					type: "text",
					width: labelWidth,
					span: 10,
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入主办方名称",
							trigger: "blur"
						},
						{
							min: 3,
							max: 60,
							message: "长度在 3 到 60 个字符",
							trigger: "blur"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入主办方名称",
						labelWidth: formItemLableWidth,
						span: 20,
						props: "company",
					}
				}
			},
			{
				label: {
					value: "活动结束时间",
					type: "text",
					width: labelWidth,
					span: 10
				},
				forms: {
					rules: [{
						required: true,
						message: "请输入活动结束时间",
						trigger: "change"
					}, ],
					forms: {
						type: "date-picker",
						placeholder: "请选择活动结束时间",
						labelWidth: formItemLableWidth,
						props: "endTime",
						params: {
							valueFormat: "yyyy-MM-dd HH:mm:ss",
							format: "yyyy-MM-dd HH:mm:ss",
						}
					},

				},
			},
			{
				label: {
					value: "联系方式",
					type: "text",
					width: labelWidth,
					span: 10,
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入联系方式",
							trigger: "blur"
						},
						{
							min: 11,
							max: 11,
							message: "长度在 11 个字符",
							trigger: "blur"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入联系方式",
						labelWidth: formItemLableWidth,
						span: 20,
						props: "phone",
					}
				}
			},
			{
				label: {
					value: "报名结束时间",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
						required: true,
						message: "请输入报名结束时间",
						trigger: "change"
					}, ],
					forms: {
						type: "date-picker",
						placeholder: "请选择报名结束",
						labelWidth: formItemLableWidth,
						props: "enrollEndTime",
						span: 10,
						params: {
							valueFormat: "yyyy-MM-dd HH:mm:ss",
							format: "yyyy-MM-dd HH:mm:ss",
						}
					},

				},
			},
			{
				label: {
					value: "活动地址",
					type: "text",
					width: labelWidth,
					span: 9
				},
				forms: {
					rules: [{
						required: true,
						message: "请选择省",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择省",
						labelWidth: formItemLableWidth,
						props: "provinceId",
						params: {
							value: "id",
							label: "name"
						}
					},
				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 5
				},
				forms: {
					rules: [{
						required: true,
						message: "请选择市",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择市",
						labelWidth: 0,
						props: "cityId",
						viewType: "show",
						params: {
							value: "id",
							label: "name"
						}
					},
				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 6
				},
				forms: {
					rules: [{
						required: true,
						message: "请选择区",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择区",
						labelWidth: 0,
						props: "regionId",
						viewType: "show",
						params: {
							value: "id",
							label: "name"
						}
					},
				},
			},
			{
				label: {
					value: "详细地址",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
						required: true,
						message: "请输入详细地址",
						trigger: "blur"
					}, ],
					forms: {
						type: "input",
						placeholder: "请输入详细地址",
						labelWidth: formItemLableWidth,
						props: "address",
						viewType: "show",
						span: 18,
					}
				}
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					forms: {
						type: "slot",
						labelWidth: formItemLableWidth,
						props: "slot_map",
					},
				},
			},
			{
				label: {
					value: "活动海报",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [ {
						required: true,
						message: "请上传活动海报",
						trigger: "change"
					},],
					forms: {
						type: "slot",
						labelWidth: formItemLableWidth,
						props: "posterPic",
					},
				},
			},
			{
				label: {
					value: "活动类型",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
						required: true,
						message: "请输入活动类型",
						trigger: "change"
					},],
					forms: {
						type: "select",
						placeholder: "请输入活动类型",
						labelWidth: formItemLableWidth,
						props: "type",
						span: 16,
						params: {
							value: "id",
							label: "name"
						}
					}
				}
			},
			// {
			// 	label: {
			// 		value: "活动标签",
			// 		type: "text",
			// 		width: labelWidth,
			// 		span: 24
			// 	},
			// 	forms: {
			// 		rules: [{
			// 			required: true,
			// 			message: "请输入活动标签",
			// 			trigger: "blur"
			// 		},
			// 		{
			// 			validator: (rule, value, callback) => {
			// 				const arr = value.split(",")
			// 				const e = arr.filter(item => item.length > 5)
			// 				if(e.length) {
			// 					callback(new Error("单个标签最多输入5个字符"));
			// 				} else {
			// 					callback();
			// 				}
			// 			}
			// 		}],
			// 		forms: {
			// 			type: "slot",
			// 			labelWidth: formItemLableWidth,
			// 			props: "label",
			// 		}
			// 	}
			// },
			{
				label: {
					value: "主办方介绍",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [
					// 	{
					// 	required: true,
					// 	message: "请输入主办方介绍",
					// 	trigger: "change"
					// },
					{
						min: 1,
						max: 300,
						message: "长度不能超过 300 个字符",
						trigger: "blur"
					}],
					forms: {
						type: "textarea",
						placeholder: "请输入主办方介绍",
						labelWidth: formItemLableWidth,
						props: "introduction",
						span: 16,
						params: {
							rows: 9
						}
					}
				}
			},
			{
				label: {
					value: "参与人数",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
						required: true,
						message: "请输入活动人数",
						trigger: "change"
					},
					{
						validator: (rule, value, callback) => {
							const check = String(value).search(/^[0-9]*$/)
							if(check == -1) {
								callback(new Error("活动人数必须为数字值"));
							} else {
								callback();
							}
						}
					}],
					forms: {
						type: "input",
						placeholder: "请输入活动人数",
						labelWidth: formItemLableWidth,
						props: "num",
						span: 16,
						after: true,
						params: {
							afterType: "text",
							afterText: "人"
						}
					}
				}
			},
			// {
			// 	label: {
			// 		value: "",
			// 		type: "text",
			// 		width: labelWidth,
			// 		span: 24
			// 	},
			// 	forms: {
			// 		forms: {
			// 			type: "checkbox",
			// 			labelWidth: formItemLableWidth,
			// 			props: "contactPhone",
			// 			span: 10,
			// 			text: "公开发布，希望活动推广，所有人都可见"
			// 		}
			// 	}
			// },
		]
	},
	{
		title: "活动详情",
		forms: [{
			label: {
				value: "",
				type: "text",
				width: labelWidth,
				span: 24
			},
			forms: {
				forms: {
					type: "slot",
					labelWidth: formItemLableWidth,
					props: "slot_editor",
				},
			},
		}, ]
	},
	{
		title: "报名信息",
		forms: [{
			label: {
				value: "",
				type: "text",
				width: labelWidth,
				span: 24
			},
			forms: {
				forms: {
					type: "slot",
					labelWidth: formItemLableWidth,
					props: "slot_table",
				},
			},
		}, ]
	},
];

/**
 * 活动模块添加花絮表单
 */
const stageFormEnd = [{
		title: "基础模块",
		forms: [{
				label: {
					value: "活动标题",
					type: "text",
					width: labelWidth,
					span: 20,
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入活动标题",
							trigger: "blur"
						},
						{
							min: 3,
							max: 100,
							message: "长度在 3 到 100 个字符",
							trigger: "blur"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入活动标题",
						labelWidth: formItemLableWidth,
						span: 20,
						props: "title",
					}
				}
			},
			{
				label: {
					value: "活动开始时间",
					type: "text",
					width: labelWidth,
					span: 10
				},
				forms: {
					rules: [{
						required: true,
						message: "请输入活动开始时间",
						trigger: "change"
					}, ],
					forms: {
						type: "date-picker",
						placeholder: "请选择活动开始时间",
						labelWidth: formItemLableWidth,
						props: "beginTime",
						params: {
							valueFormat: "yyyy-MM-dd HH:mm:ss",
							format: "yyyy-MM-dd HH:mm:ss",
						}
					},

				},
			},
			{
				label: {
					value: "主办方",
					type: "text",
					width: labelWidth,
					span: 10,
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入主办方名称",
							trigger: "blur"
						},
						{
							min: 3,
							max: 60,
							message: "长度在 3 到 60 个字符",
							trigger: "blur"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入主办方名称",
						labelWidth: formItemLableWidth,
						span: 20,
						props: "company",
					}
				}
			},
			{
				label: {
					value: "活动结束时间",
					type: "text",
					width: labelWidth,
					span: 10
				},
				forms: {
					rules: [{
						required: true,
						message: "请输入活动结束时间",
						trigger: "change"
					}, ],
					forms: {
						type: "date-picker",
						placeholder: "请选择活动结束时间",
						labelWidth: formItemLableWidth,
						props: "endTime",
						params: {
							valueFormat: "yyyy-MM-dd HH:mm:ss",
							format: "yyyy-MM-dd HH:mm:ss",
						}
					},

				},
			},
			{
				label: {
					value: "联系方式",
					type: "text",
					width: labelWidth,
					span: 10,
				},
				forms: {
					rules: [{
							required: true,
							message: "请输入联系方式",
							trigger: "blur"
						},
						{
							min: 11,
							max: 11,
							message: "长度在 11 个字符",
							trigger: "blur"
						}
					],
					forms: {
						type: "input",
						placeholder: "请输入联系方式",
						labelWidth: formItemLableWidth,
						span: 20,
						props: "phone",
					}
				}
			},
			{
				label: {
					value: "报名结束时间",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
						required: true,
						message: "请输入报名结束时间",
						trigger: "change"
					}, ],
					forms: {
						type: "date-picker",
						placeholder: "请选择报名结束",
						labelWidth: formItemLableWidth,
						props: "enrollEndTime",
						span: 10,
						params: {
							valueFormat: "yyyy-MM-dd HH:mm:ss",
							format: "yyyy-MM-dd HH:mm:ss",
						}
					},

				},
			},
			{
				label: {
					value: "活动地址",
					type: "text",
					width: labelWidth,
					span: 9
				},
				forms: {
					rules: [{
						required: true,
						message: "请选择省",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择省",
						labelWidth: formItemLableWidth,
						props: "provinceId",
						params: {
							value: "id",
							label: "name"
						}
					},
				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 5
				},
				forms: {
					rules: [{
						required: true,
						message: "请选择市",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择市",
						labelWidth: 0,
						props: "cityId",
						viewType: "show",
						params: {
							value: "id",
							label: "name"
						}
					},
				},
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 6
				},
				forms: {
					rules: [{
						required: true,
						message: "请选择区",
						trigger: "change"
					}, ],
					forms: {
						type: "select",
						placeholder: "请选择区",
						labelWidth: 0,
						props: "regionId",
						viewType: "show",
						params: {
							value: "id",
							label: "name"
						}
					},
				},
			},
			{
				label: {
					value: "详细地址",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
						required: true,
						message: "请输入详细地址",
						trigger: "blur"
					}, ],
					forms: {
						type: "input",
						placeholder: "请输入详细地址",
						labelWidth: formItemLableWidth,
						props: "address",
						viewType: "show",
						span: 18,
					}
				}
			},
			{
				label: {
					value: "",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					forms: {
						type: "slot",
						labelWidth: formItemLableWidth,
						props: "slot_map",
					},
				},
			},
			{
				label: {
					value: "活动海报",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [ {
						required: true,
						message: "请上传活动海报",
						trigger: "change"
					},],
					forms: {
						type: "slot",
						labelWidth: formItemLableWidth,
						props: "posterPic",
					},
				},
			},
			{
				label: {
					value: "添加花絮",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [ {
						required: true,
						message: "请上传活动花絮",
						trigger: "change"
					},],
					forms: {
						type: "slot",
						labelWidth: formItemLableWidth,
						props: "titbits",
					},
				},
			},
			{
				label: {
					value: "活动类型",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
						required: true,
						message: "请输入活动类型",
						trigger: "change"
					},],
					forms: {
						type: "select",
						placeholder: "请输入活动类型",
						labelWidth: formItemLableWidth,
						props: "type",
						span: 16,
						params: {
							value: "id",
							label: "name"
						}
					}
				}
			},
			// {
			// 	label: {
			// 		value: "活动标签",
			// 		type: "text",
			// 		width: labelWidth,
			// 		span: 24
			// 	},
			// 	forms: {
			// 		rules: [{
			// 			required: true,
			// 			message: "请输入活动标签",
			// 			trigger: "blur"
			// 		},
			// 		{
			// 			min: 1,
			// 			max: 5,
			// 			message: "长度在 5 个字符",
			// 			trigger: "blur"
			// 		} ],
			// 		forms: {
			// 			type: "slot",
			// 			labelWidth: formItemLableWidth,
			// 			props: "label",
			// 		}
			// 	}
			// },
			{
				label: {
					value: "主办方介绍",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
						min: 1,
						max: 150,
						message: "长度在 150 个字符",
						trigger: "blur"
					}],
					forms: {
						type: "textarea",
						placeholder: "请输入主办方介绍",
						labelWidth: formItemLableWidth,
						props: "introduction",
						span: 16,
						params: {
							rows: 9
						}
					}
				}
			},
			{
				label: {
					value: "参与人数",
					type: "text",
					width: labelWidth,
					span: 24
				},
				forms: {
					rules: [{
						required: true,
						message: "请输入活动人数",
						trigger: "change"
					}, ],
					forms: {
						type: "input",
						placeholder: "请输入活动人数",
						labelWidth: formItemLableWidth,
						props: "num",
						span: 16,
						after: true,
						params: {
							afterType: "text",
							afterText: "人"
						}
					}
				}
			},
			// {
			// 	label: {
			// 		value: "",
			// 		type: "text",
			// 		width: labelWidth,
			// 		span: 24
			// 	},
			// 	forms: {
			// 		forms: {
			// 			type: "checkbox",
			// 			labelWidth: formItemLableWidth,
			// 			props: "contactPhone",
			// 			span: 10,
			// 			text: "公开发布，希望活动推广，所有人都可见"
			// 		}
			// 	}
			// },
		]
	},
	{
		title: "活动详情",
		forms: [{
			label: {
				value: "",
				type: "text",
				width: labelWidth,
				span: 24
			},
			forms: {
				forms: {
					type: "slot",
					labelWidth: formItemLableWidth,
					props: "slot_editor",
				},
			},
		}, ]
	},
	{
		title: "报名信息",
		forms: [{
			label: {
				value: "",
				type: "text",
				width: labelWidth,
				span: 24
			},
			forms: {
				forms: {
					type: "slot",
					labelWidth: formItemLableWidth,
					props: "slot_table",
				},
			},
		}, ]
	},
];


const state = {
	supplierFormAdd,
	supplierFormEdit,
	supplierFormEdit2,
	auditFormEdit,
	province: [],
	occupationOptions: [],
	stageFormAdd,
	activity_type_list: [],
	stageFormEnd
};

const actions = {
	GetCityData({
		commit
	}) {
		getProvinceList().then(data => {
			commit("SET_CITY_DATA_PROVINCE", data);
		});
	},
	/**
	 * 获取职业信息
	 */
	GetOccupationOptions({
		commit
	}) {
		getOccupationOptions().then(res => {
			// 去除空的子级选项
			
			const handle = (list) => {
				list.map(ele => {
					if (ele.occList.length) {
						handle(ele.occList);
					} else {
						delete ele.occList;
					}
				})
			};
			handle(res.data.result);
			commit("SET_OCCUPATION_OPTIONS", res.data.result);
		})
	},
	/**
	 * 获取活动类型列表数据
	 */
	GetActivityTypeList({
		commit
	}) {
		getActivityTypeList().then(res => {
			commit("SET_ACTIVITY_TYPE_LIST", res.data.data);
		})
	}
};

const mutations = {
	SET_CITY_DATA_PROVINCE: (state, data) => {
		state.province = data;
	},
	SET_OCCUPATION_OPTIONS: (state, data) => {
		state.occupationOptions = data;
	},
	SET_ACTIVITY_TYPE_LIST: (state, data) => {
		state.activity_type_list = data;
	}
};

export default {
	state,
	actions,
	mutations
};
