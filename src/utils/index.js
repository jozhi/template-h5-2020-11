import Vue from 'vue'


/** 与天正对接的 get 请求, 本地就调用本地的接口, 否则调用天正的接口.
* @param {string} url 接口路径.
* @param {Object} param 一个对象, 表示你要传的数据.
*/

export const baseGet = (url, param) => {
  return new Promise(function(resolve, reject) {
    Vue.prototype.$api.commonGet(url,param).then(res => {
      resolve(res)
      // if (!res.success) {
      //   Vue.prototype.$dialog.alert({
      //     message:res.resultDes
      //   })
      // }
    }).catch(res => {
      Vue.prototype.$toast({
        type:'error',
        message:'系统错误'
      })
    })
  });
}

/** 与天正对接的 post 请求, 本地就调用本地的接口, 否则调用天正的接口.
* @param {string} url 接口路径.
* @param {Object} param 一个对象, 表示你要传的数据.
*/

export const basePost = (url, param) => {
  return new Promise(function(resolve, reject) {
    Vue.prototype.$api.commonPost(url,param).then(res => {
      resolve(res)
    }).catch(res => {
      Vue.prototype.$toast({
        type:'error',
        message:'系统错误'
      })
    })
  });
}


/**
 * 
 * @param {*} str 
 * 名字脱敏处理
 */
export const noPassByName = str => {
  if (null !== str && str !== undefined){
    if (str.length <= 3){
      return '*' + str.substring(1,str.length);
    } else if (str.length > 3 && str.length <= 6){
      return '**' + str.substring(2,str.length);
    } else if (str.length > 6){
      return str.substring(0,2) + '****' + str.substring(6,str.length)
    }
  } else {
    return '';
  }
}

/**
 * 
 * @param {*} idStr 
 * 身份证号脱敏处理
 */
export const noPassByIdCard = idStr => {
  let charArr = idStr.split('')
  let result = charArr.reduce((arr, next, index)=>{
    ((index>0&&index<4)||(index>11&&index<17))?arr.push('*'):arr.push(next)
    return arr
  }, [])
  return result.join('')
}

/**
 * 
 * @param {*} idStr 
 * 手机号脱敏处理
 */
export const noPassByMobile = str => {
  if (null !== str && str !== undefined){
    var pat=/(\d{3})\d*(\d{4})/;
    return str.replace(pat,'$1****$2');
  } else {
    return '';
  }
}

/**
 * 
 * @param {*} idStr 
 * 银行卡脱敏处理
 */
export const noPassByBankNum = str => {
  if (null !== str && str !== undefined){
    var split = '';
    for (let i=0;i<str.length-10;i++){
      split += '*'
    }
    var pat=/^(\d{6})\d+(\d{4})$/;
    return str.replace(pat,'$1'+split+'$2');
  } else {
    return '';
  }
}