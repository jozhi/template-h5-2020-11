<template >
<div>
  <ValidationProvider v-show="shouldShow" v-if="isValidate" :name="label" :rules="`required|${rules}`" v-slot="{ errors }">
    <van-field
      :value="value"
      :placeholder="placeholder"
      :label="label"
      border
      :required="required"
      input-align="right"
      :whichShow='whichshow'
      :type="type"
      :name="name"
      :error-message="errors[0]"
      :disabled="disabled"
      :clearable="clearable"
      @input="changeValue"
      @blur="onBlur(value)"
      @focus="onFocus(value)"
      @click="onClick"
    >
    <div slot="" >
        <slot></slot>
      </div>
    </van-field>
</ValidationProvider>
  <van-field
      v-else-if="!isValidate"
      v-model="inputvalue"
      :value="value"
      :date="date"
      :placeholder="placeholder"
      :label="label"
      border
      v-show="shouldShow"
      :required="required"
      input-align="right"
      :whichShow='whichshow'
      :type="type"
      :name="name"
      :disabled="disabled"
      :clearable="clearable"
      @input="changeValue"
      @blur="onBlur(value)"
      @focus="onFocus(value)"
      @click="onClick"
    >
      <div slot="button">
        <slot></slot>
      </div>
    </van-field>
</div>
</template>
<script>
// import data from '../data/data';
export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    // header 的选择 0：显示全部，1：显示必填项，2：显示未填项
    whichshow: {
      type: [String , Number],
      default: 0
    },
    date: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    isFilter: {
      type: Boolean,
      default: false
    },
    isValidate: {
      type: Boolean,
      default: false
    },
    rules: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      inputvalue: this.value,
      // filterValue: this.value,
      shouldShow: true
    };
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
        if (this.value) {
          this.shouldShow = false
        } else {
          this.shouldShow = true
        }
      }
    },
    value(val) {
      this.inputvalue = this.value
      if (this.date) {
        if (val.length > 6) {
          this.inputvalue = val.slice(0, 4) + '-' + val.slice(4, 6) + '-' + val.slice(6)
        } else {
          this.inputvalue = val.slice(0, 4) + '-' + val.slice(4, 6)
        }
      }
    },
    // value(newValue) {
    //   if (this.isFilter) {
    //     data[this.name].forEach(element => {
    //       if (element.value === newValue) {
    //         this.inputvalue = element.text;
    //       }
    //     });
    //   } else {
    //     this.inputvalue = newValue;
    //   }
    // },
    deep: true
  },
  created() {
    // // console.log(this.type);
    // if (this.isFilter) {
    //   data[this.name].forEach(element => {
    //     if (element.value === this.value) {
    //       this.inputvalue = element.text;
    //     }
    //   });
    // } else {
    //   this.inputvalue = this.value;
    // }
  },
  methods: {
    changeValue(val) {
      this.$emit('input',val)
      // console.log('changeValue',val);
      // if (this.isFilter) {
      //   this.$emit('input-message', this.filterValue, this.name);
      // } else {
      //   this.$emit('input-message', val, this.name);
      // }
    },
    onBlur(val) {
      // console.log(val);
      
      // if (this.isFilter) {
      //   this.$emit('input-message', this.filterValue, this.name);
      // } else {
      // console.log(val)
      
      this.$emit('eventBlur', val, this.name);
      this.$emit('input-message', val, this.name);
      // }
    },
    onFocus(val) {
      // if (this.isFilter) {
      //   this.$emit('input-message', this.filterValue, this.name);
      // } else {
      //   this.$emit('input-message', val, this.name); 
      // }
    },
    onClick(){
      // this.$emit('on-click', this.inputvalue, this.name); 
    }
  }
};
</script>