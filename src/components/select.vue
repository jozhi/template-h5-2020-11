<template>
  <div class="select">
    <ValidationProvider v-show="shouldShow" v-if="isValidate" :name="label" rules="required" v-slot="{ errors }">
      <!-- <van-field
          readonly="readonly"
          :disabled="dis"
          :no="no"
          :value="name"
          :required='required'
          :whichShow='whichshow'
          :label="label"
          :placeholder="placeholder"
          :right-icon="myarrow"
          @click="openPopupselect"
          :error-message="errors[0]"
      /> -->
      <van-field
          readonly="readonly"
          :disabled="dis"
          :no="no"
          :value="name"
          :required='required'
          :label="label"
          :placeholder="placeholder"
          :right-icon="myarrow"
          @click="openPopupselect"
          :error-message="errors[0]"
      />
    </ValidationProvider>
    <van-field
          readonly="readonly"
          v-else-if="!isValidate"
          :disabled="dis"
          :no="no"
          :value="name"
          v-show="shouldShow"
          :required='required'
          :label="label"
          :placeholder="placeholder"
          :right-icon="myarrow"
          @click="openPopupselect"
      />
    <van-popup v-model="isshowPopupsleect" position="bottom">
      <van-picker
        :value-key='valuekey'
        show-toolbar
        :columns="columns"
        @cancel="isshowPopupsleect = false"
        @confirm="onConfirmselect"
      />
    </van-popup>
  </div>
</template>
<script>
import data from '../data/data'
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    valuekey:{
      type: String,
      default: 'text'
    },
    // header 的选择 0：显示全部，1：显示必填项，2：显示未填项
    // whichshow: {
    //   type: String || Number,
    //   default: 0
    // },
    // 是否禁止点击
    dis: {
      type: Boolean,
      default: false
    },
    // 是否显示右侧图标
    no: {
      type: Boolean,
      default: false
    },
    // 右侧图标名称或图片链接
    arrow: {
      type: String,
      default: 'arrow'
    },
    placeholder:{
      type:String,
      default:'请选择'
    },
    required:{
      type:Boolean,
      default:false
    },
    label:{
      type:String,
      default:''
    },
    checked:{
      type:String,
      default:''
    },
    //是否采用后端传值
    selfload: {
      type:Array,
      default: function() {
        return []
      }
    },
    //要加载的字典项
    whichload: {
      type:String,
      default: ''
    },
    isValidate: {
      type: Boolean,
      default: false
    },
    valuevalue: {
      type:String,
      default: 'value'
    },
    isLoadlocal: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      data:this.checked,
      name:'',
      columns: [],
      isshowPopupsleect:false,
      disclick: false,
      myarrow: 'arrow',
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
        if (this.checked) {
          this.shouldShow = false
        } else {
          this.shouldShow = true
        }
      }
    },
    selfload: {
      handler(newValue) {
        this.columns = newValue
        this.columns.forEach(element => {
          if (element[this.valuevalue] === this.checked) {
            this.name = element[this.valuekey]
          }
        });
      },
      deep: true
    },
    checked(val) {
      this.data = val
      this.columns.forEach(element => {
        if (element[this.valuevalue] === this.checked) {
          this.name = element[this.valuekey]
        }
      });
    }
  },
  created(){
    if (this.isLoadlocal) {
      this.columns = data[this.whichload]
      this.columns.forEach(element => {
        if (element[this.valuevalue] === this.checked) {
          this.name = element[this.valuekey]
        }
      });
    } else {
      this.columns = this.selfload
    }
    // if (this.dis === 'false') {
    //   this.disclick = false
    // } else {
    //   this.disclick = true
    // }
    if (this.no) {
      this.myarrow = ''
    } else {
      this.myarrow = this.arrow
    }
  },
  methods: {
    //打开下拉框
    openPopupselect() {
      if (!this.dis) {
        this.isshowPopupsleect = true
      } else {
        // Here is nothing
      }
    },
    //确认选择
    onConfirmselect(value) {
      this.name = value[this.valuekey]
      this.data = value[this.valuevalue]
      this.$emit('change', this.data)
      this.isshowPopupsleect = false
    },
  }
}
</script>
<style lang="less" scoped>
  /deep/.van-field__control{
    text-align: right;
  }
  /deep/.van-field__control:disabled{
    color: #323233;
  }
  /deep/ .van-cell__value {
    margin-right: 10px
  }
</style>