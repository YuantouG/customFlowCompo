/*
金额显示￥+金额绝对值+千分位过滤器,
 */
export function depoistTrans(number) {
    const _value = Math.abs(number);
    if(_value>= 10000){
        const _valuev = _value/10000;
        const _valuevv =Math.floor(_valuev * 100) / 100;
        return "￥"+_valuevv + '万元'
    }
    return "￥"+_value;
}

/*
金额显示￥+金额绝对值+千分位过滤器,
 */
export function moneyFilter(number) {
    const _value = Math.abs(number);
    if( number== '-1' || number == '0') return '面议'
    if(_value>= 10000){
        const _valuev = _value/10000;
        const _valuevv =Math.floor(_valuev * 100) / 100;
        return "￥"+_valuevv + '万元'
    }
    return "￥"+_value;
}

/*
把/符合替换成 、
 */
export function symbolReplace(number) {
    if(!number){
        return  '无';
    }
   let _number = number.split('/');
    _number.map((e,index) => {
       if(e ==''){
           _number.splice(index,1);
       }
   })
   return _number.join('/');
}
/*
空字符串显示无
 */
export function nullTonone(number) {
    if(number === null || number === ''){
        return  '无';
    }
   return number;
}

let list =[
    {name:'moneyFilter',fn:moneyFilter},
    {name:'symbolReplace',fn:symbolReplace},
    {name:'nullTonone',fn:nullTonone},
    {name:'depoistTrans',fn:depoistTrans},
]

export default {
    install(Vue,opt){
        list.forEach(item =>{
            Vue.filter(item.name,item.fn);
        });
    }
}