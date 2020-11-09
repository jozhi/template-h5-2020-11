<template>
  <div class="retireSeniorTechnician">
    <!-- <Header @TabChange="TabChange"></Header> -->
    <ValidationObserver ref="form">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="数据脱敏示例" name="1">
          <VantInput label="身份证号码" name="insuranceNumber" disabled>{{ mockData.idCard ? $noPassByIdCard(mockData.idCard) : '--' }}</VantInput>
          <VantInput label="姓名" name="name" disabled>{{ mockData.name ? $noPassByName(mockData.name) : '--' }}</VantInput>
          <VantInput label="手机号码" name="phoneNumber" disabled>{{ mockData.phoneNumber ? $noPassByMobile(mockData.phoneNumber) : '--' }}</VantInput>
        </van-collapse-item>

        <van-collapse-item title="基本表单项校验" name="2">
          <VantSelect
            isValidate
            required
            label="select 选择框"
            v-model="demoForm.select"
            @change="selectChange"
            placeholder="请选择"
            :selfload="selectOption"
            valuekey="value"
            valuevalue="key"
          />
          <VantSelect v-model="demoForm.country" whichload="countryData" label="国籍地区" isLoadlocal placeholder="请选择" />

          <VantDatePicker required isValidate type="date" label="年月日选中" @date-confirm="selectDate2" v-model="demoForm.Date"></VantDatePicker>
          <VantDatePicker required isValidate type="year-month" :max-date="new Date()" label='年月选择' v-model="demoForm.beginYM"/>

          <VantInput isValidate required rules="idCard" label="证件号码" name="certNumber" v-model="demoForm.idCard" placeholder="请输入" @eventBlur="getMoreUserInfo" />
          <VantInput isValidate required rules="mobile" label="联系方式" name="mobilephone" v-model="demoForm.mobilephone" placeholder="请输入"/>

        </van-collapse-item>
      </van-collapse>
    </ValidationObserver>
    <div class="buttonhouse">
      <van-button type="info" @click="save">保存</van-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'employeeRegistration',
  data() {
    return {
      demoForm: {},
      mockData:{
        name:'张三丰',
        idCard:'642223197804261010',
        phoneNumber:'15888826288'
      },
      selectOption: [
        { key: '100', value: '企业职工' },
        { key: '111', value: '超龄人员' },
        { key: '112', value: '技校实习生' },
        { key: '113', value: '双边社保协定' },
        { key: '114', value: '疫情期间临聘人员' },
        { key: '115', value: '联防联控人员' },
        { key: '119', value: '农民工先行参保' },
        { key: '122', value: '港澳台单工伤' },
      ],
      
      activeNames: ['1', '2', '3'],


      isValidate: true,
    };
  },
  created() {
    // this.$dialog.alert({
    //   message:'res.resultDes'
    // })
    // this.$toast('提示内容');

  },
  methods: {
    selectChange(value) {
      console.log('selectChange',value);
    },
    selectDate2(value){
      console.log('选择了本次参保时间',value);
    },
    getMoreUserInfo(val){
      console.log('触发了证件号码更改输入框',val);
    },
    save() {
      if (!this.isValidate) {
        console.log('该人员不符合目前业务, 请重新确认');
        return;
      }
      this.$refs.form.validate().then((result) => {
        if (result) {
          console.log('do submit');
          this.$baseGet('/person/personSocialInsured/save', this.demoForm)
            .then((res) => {
              if (res.success) {
                console.log('success');
              } else {
                console.log('error');
              }
            })
            .catch((error) => console.log('error comes from save api: ' + error));
        } else {
          console.log('请完善页面信息!');
        }
      });
    },

    // TabChange(val) {
    //   console.log('TabChange:',val);
    //   this.activeNames = ['1', '2', '3'];
    // },
  },
};
</script>

<style lang="less" scoped>
.seeDetail {
  .detail {
    text-decoration: underline;
    color: #409eff;
  }
}
.buttonhouse {
  padding: 38px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.van-button--info {
  width: 250px;
  background: #1492ff;
  font-size: 16px;
}
</style>
