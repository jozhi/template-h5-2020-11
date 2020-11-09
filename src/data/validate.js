import Vue from 'vue'
import { ValidationProvider, extend, localize, ValidationObserver } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules' // 验证规则导入
// import CN from 'vee-validate/dist/locale/zh_CN.json' // 加载语言包


extend('required', required)
extend('email', email)
localize('zh_CN', {
  name: 'zh_CN',
  names: {
    // contacterName: '社保经办人姓名'
  },
  messages: {
    // your messages.
    _default: (field) => `${field}无效`,
    after: (field, [target]) => `${field}必须在${target}之后`,
    alpha_dash: (field) => `${field}能够包含字母数字字符、破折号和下划线`,
    alpha_num: (field) => `${field}只能包含字母数字字符`,
    alpha_spaces: (field) => `${field}只能包含字母字符和空格`,
    alpha: (field) => `${field}只能包含字母字符`,
    before: (field, [target]) => `${field}必须在${target}之前`,
    between: (field, [min, max]) => `${field}必须在${min}与${max}之间`,
    confirmed: (field, [confirmedField]) =>
      `${field}不能和${confirmedField}匹配`,
    credit_card: (field) => `${field}格式错误`,
    date_between: (field, [min, max]) => `${field}必须在${min}和${max}之间`,
    date_format: (field, [format]) => `${field}必须符合${format}格式`,
    decimal: (field, [decimals = '*'] = []) =>
      `${field}必须是数字，且能够保留${
        decimals === '*' ? '' : decimals}位小数`,
    digits: (field, [length]) =>
      `${field}必须是数字，且精确到${length}位数`,
    dimensions: (field, [width, height]) =>
      `${field}必须在${width}像素与${height}像素之间`,
    email: (field) => `${field}不是一个有效的邮箱`,
    ext: (field) => `${field}不是一个有效的文件`,
    image: (field) => `${field}不是一张有效的图片`,
    included: (field) => `${field}不是一个有效值`,
    integer: (field) => `${field}必须是整数`,
    ip: (field) => `${field}不是一个有效的地址`,
    length: (field, [length, max]) => {
      if (max) {
        return `${field}长度必须在${length}到${max}之间`
      }
      return `${field}长度必须为${length}`
    },
    max: (field, [length]) => `${field}不能超过${length}个字符`,
    max_value: (field, [max]) => `${field}必须小于或等于${max}`,
    mimes: (field) => `${field}不是一个有效的文件类型`,
    min: (field, [length]) => `${field}必须至少有${length}个字符`,
    min_value: (field, [min]) => `${field}必须大于或等于${min}`,
    excluded: (field) => `${field}不是一个有效值`,
    numeric: (field) => `${field}只能包含数字字符`,
    regex: (field) => `${field}格式无效`,
    required: (field) => `请输入${field}`,
    url: (field) => field + '不是一个有效的url'
  }
})
// 手机号码验证
extend('mobile', {
  message: () => `请输入正确的手机号码`,
  validate: value => value.length === 11 && /^(((13[0-9]{1})|(14[57]{1})|(15[012356789]{1})|(17[03678]{1})|(18[0-9]{1})|(19[89]{1})|(16[6]{1}))+\d{8})$/.test(value)
})
//社会保证号码校验
extend('idCard', {
  message: () => `请输入正确的身份证`,
  validate: value => value.length === 18 && /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)
})
//身份证号码校验
extend('IsIdCard', {
  message: () => `请输入正确的身份证号码`,
  validate: value => value.length === 18 && /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)
})
//金额校验
extend('money', {
  message: () => `请输入正确的金额`,
  validate: value => /^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/.test(value)
})
//金额校验
extend('salary', {
  message: () => `申报工资格式不正确！`,
  validate: value => /^(([1-9]{1}\d*)|(0{1}))(\.\d{0,2})?$/.test(value)
})
extend('wageScale', {
  message: () => `请输入正确的基数比例`,
  validate: value => /^(([1-9]{1}\d*)|(0{1}))(\.\d{1,2})?$/.test(value)
})
//校验银行账号长度
extend('moneyCard', {
  message: () => `银行账号长度有误`,
  validate: value => value.length <= 12
})
// 设置
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)