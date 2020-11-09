<template>
  <div>
    <ValidationProvider v-show="shouldShow" v-if="isValidate" :name="label" rules="required" v-slot="{ errors }">
      <van-field
        v-model="currentValue"
        readonly="readonly"
        :label="label"
        :name="name"
        input-align="right"
        :whichShow='whichshow'
        :required='required'
        right-icon="arrow"
        :placeholder="placeholder"
        :error-message="errors[0]"
        @click="popupShow"
      />
    </ValidationProvider>
    <van-field
        v-else-if="!isValidate"
        v-model="currentValue"
        readonly="readonly"
        :label="label"
        :name="name"
        input-align="right"
        v-show="shouldShow"
        :whichShow='whichshow'
        :required='required'
        right-icon="arrow"
        :placeholder="placeholder"
        @click="popupShow"
      />
    <van-popup v-model="isshowPopuptime" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        :type="type"
        :title="title"
        :min-date="minDate"
        :max-date="maxDate"
        :min-hour="minHour"
        :loading="loading"
        :confirm-button-text="confirmText"
        :cancel-button-text="cancelText"
        :visible-item-count="visibleCount"
        :filter="filter"
        :formatter="formatter"
        :show-toolbar="showToolbar"
        :item-height="itemHeight"
        :min-minute="minMinute"
        :max-minute="maxMinute"
        @change="onChange"
        @confirm="confirm"
        @cancel="cancel"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'dateValue',
    event: 'date-confirm'
  },
  props: {
    // header 的选择 0：显示全部，1：显示必填项，2：显示未填项
    whichshow: {
      type: [String ,Number],
      default: 0
    },
    isValidate: {
      type: Boolean,
      default: false
    },
    label:{
      default: '',
      type: String
    },
    placeholder:{
      default: '请选择',
      type: String
    },
    name: {
      type: String,
      default: ''
    },
    required:{
      type:Boolean,
      default:false
    },
    dateValue: {
      type: [String ,Date]
    },
    // 类型，可选值为 date time year-month
    type: {
      required: true,
      type: String
    },
    // 顶部栏标题
    title: {
      type: String,
      default: ''
    },
    // 是否显示顶部栏
    showToolbar: {
      type: Boolean,
      default: true
    },
    // 选项高度
    itemHeight: {
      type: Number,
      default: 44
    },
    // 可选的最小时间，精确到分钟
    minDate: {
      type: Date,
      default: () => {
        return new Date(1900, 0, 1)
      }
    },
    // 可选的最大时间，精确到分钟
    maxDate: {
      type: Date,
      default:  () => {
        return new Date(2050, 0, 1)
      }
    },
    // 可选的最小小时，针对 time 类型
    minHour: {
      type: Number,
      default: 0
    },
    // 可选的最大小时，针对 time 类型
    maxHour: {
      type: Number,
      default: 23
    },
    // 可选的最小分钟，针对 time 类型
    minMinute: {
      type: Number,
      default: 0
    },
    // 	可选的最大分钟，针对 time 类型
    maxMinute: {
      type: Number,
      default: 59
    },
    // 是否显示加载状态
    loading: {
      type: Boolean
    },
    // 确认按钮文字
    confirmText: {
      type: String,
      default: '确认'
    },
    // 取消按钮文字
    cancelText: {
      type: String,
      default: '取消'
    },
    // 可见的选项个数
    visibleCount: {
      type: Number,
      default: 5
    },
    // 选项过滤函数
    filter: {
      type: Function
    },
    // 选项格式化函数
    formatter: {
      type: Function,
      default: (type, value) => {
        if (type === 'year') {
          return `${value}年`;
        } else if (type === 'month') {
          return `${value}月`
        } else if (type === 'day') {
          return `${value}日`
        }
        return value
      }
    }
  },
  data() {
    return {
      currentValue: this.dateValue,
      currentDate: new Date(),
      isshowPopuptime: false,
      shouldShow: true
    }
  },
  watch: {
    whichshow(newVal, oldVal) {
      if (newVal === 0) {
        this.shouldShow = true
      } else if (newVal === 1) {
        if (this.required) {
          this.shouldShow = true
        } else {
          this.shouldShow = false
        }
      } else if (newVal === 2) {
        if (this.currentValue) {
          this.shouldShow = false
        } else {
          this.shouldShow = true
        }
      }
    },
  },
  methods: {
    popupShow() {
      this.isshowPopuptime = true
    },
    onChange(picker) {
      this.$emit('dateChange', picker)
    },
    confirm(val) {
      let addZore = (num) => {
        if (num < 10) {
          return '0' + num.toString()
        }
        return num
      }
      if (this.type === 'time') {
        if (!val) {
          val = '00:00'
        }
        this.currentValue = val
      } else if (this.type === 'year-month') {
        let year = val.getFullYear()
        let month = addZore(val.getMonth() + 1)
        this.currentValue = year+'-'+month
      } else if (this.type === 'date') {
        let year = val.getFullYear()
        let month = addZore(val.getMonth() + 1)
        let day = addZore(val.getDate())
        this.currentValue = year+'-'+month+'-'+day
      } else {
        let year = val.getFullYear()
        let month = addZore(val.getMonth() + 1)
        let day = addZore(val.getDate())
        let hour = addZore(val.getHours())
        let minute = addZore(val.getMinutes())
        this.currentValue = year+'-'+month+'-'+day+' '+hour+':'+minute
      }
      this.isshowPopuptime = false
      this.$emit('date-confirm', this.currentValue.replace(/-/g, ''), this.name)
    },
    cancel() {
      this.isshowPopuptime = false
      this.$emit('date-cancel')
    }
  }
}
</script>

<style lang="less" scoped>
  /deep/ .van-cell__value {
    margin-right: 10px
  }
</style>