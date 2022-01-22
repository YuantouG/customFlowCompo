/**
 * 身份证校验规则
 */
const IDVerificationRules = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/;

/**
 * 校验手机号码
 */
const cellphoneNumberRules = /^1[3456789]\d{9}$/;

/**
 * 校验固定电话
 */
const fixedTelephoneRules = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;

/**
 * 修改某个对象中所有的值
 * @param {object} obj
 */
export const ChangeObjectValue = (obj, value) => {
	for (let i in obj) {
		obj[i] = value;
	}
};

/**
 * 校验身份证号码
 * @param {string} code
 */
export const checkIdentityCardCode = (code) => {
	return IDVerificationRules.test(code);
};

/**
 * 校验移动电话类型
 * @param {string} phone
 */
export const checkCellphoneNumber = (phone) => {
	return cellphoneNumberRules.test(phone);
};

/**
 * 校验固定电话类型
 * @param {string} phone
 */
export const checkFixedTelephoneRules = (phone) => {
	return fixedTelephoneRules.test(phone);
};

/**
 * 校验是否是电话类型
 * @param {string} param
 */
export const checkPhoneType = (param) => {
	return checkCellphoneNumber(param) || checkFixedTelephoneRules(param);
};

/**
 * 判断字符串是否在数组内
 * @param list: array
 * @param params: string
 * @returns {boolean}
 */
export const ssInIt = (list, params) => {
	return list.indexOf(params) >= 0 && true;
};

/**
 * 设置本地存储
 * @param key {string}
 * @param value {string}
 */
export const setLocalStorage = (key, value) => {
	window.localStorage.setItem(key, value);
};

/**
 * 获取本地存储
 * @param key
 * @returns {string | null}
 */
export const getLocalStorage = (key) => {
	return window.localStorage.getItem(key);
};

/**
 * 删除本地存储
 * @param key {string | null}
 */
export const removeLocalStorage = (key) => {
	window.localStorage.removeItem(key);
};

export const getWindowInnerHeight  =() =>{
	if (window.innerHeight){
		let winHeight = window.innerHeight;
		return winHeight + 'px';
	}
}

/**
 * 通用弹窗提示函数
 * @param {} v 
 */
export const alphaAlert = (self, v, t) => {
	self.$message({
		showClose: true,
		message: v,
		type: t,
	});
}

/**
 * 通用正则参数
 */
export const exgExg = /[^\s0-9a-zA-Z\u4e00-\u9fa5\uf900-\ufa2d\x20\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b\uff01\uffe5\u2026\u2014\u3010\u3011\u2018\u2019\o~!@#$%^&*`_+-=\|\\\"\'\>\?]/ig;

/**
 * 通用正则装置
 */
export let pattern = new RegExp("[`~%!@#^=''?~！@#￥……&——‘”“'？*()（），,。.、-]");


/**
 * 文本正则校验函数
 * @param {} attr 
 * @param {*} name 
 * @param {*} len 
 */
export const proof = (attr, name, len) => {
	for(let i = 0; i < len; i++) {
		attr += name.substr(i, 1).replace(patternExtar,'').replace(' ', '');
	}
	return attr;
}

/**
 * 通用提示函数
 * @param {*} self 
 * @param {*} val 
 * @param {*} type 
 * @param {*} callback 
 */
export const toaster = (self, val, type, callback) => {
	self.$confirm(val, "提示", {
		confirmButtonText: "确定",
		cancelButtonText: "取消",
		type,
	}).then(() => {
		callback();
	}).catch(() => {});
}

export let patternExtar = new RegExp("[`~!@#$^&*%()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？↵\r\n]");

