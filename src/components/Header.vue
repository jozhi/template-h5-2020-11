<template>
<div v-if="false">
  <div class="top">
      <div class="header" style="z-index:99" v-if="false">
        <div class="back" @click="back">
          <van-icon name="arrow-left" color='rgb(24,148,255)' size='22'/>
          <span>返回</span>
        </div>
        <span class="title-content">{{$route.name}}</span>
      </div>
      <div class="navbar">
        <van-tabbar v-model="active" :fixed=false border @change='change'>
          <van-tabbar-item>显示全部</van-tabbar-item>
          <van-tabbar-item>显示必填项</van-tabbar-item>
          <van-tabbar-item>显示未填项</van-tabbar-item>
        </van-tabbar>
      </div>
  </div>
  <div class="fixedheight"></div>
</div>
</template>

<script>
export default {
  name: 'top',
  props: {
    title:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      active:0
    }
  },
  created(){
    // let self = this
    // dd.biz.navigation.setTitle({
    //   title: self.$route.name,
    //   onSuccess: function(data) {
    //     console.log(data,'settitle')
    //   },
    //   onFail: function(error) {
    //   }
    // })
  },
  methods:{
    back(){
      this.$router.push({
        path:'/'
      })
    },
    change(val){
      this.$emit('TabChange',val)
    }
  }
}
</script>
<style scoped lang="less">
  .fixedheight{
    width: 100%;
    height: 102px;
  }
  .top{
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
  }
  .header{
    background:#fff;
    padding: 0 15px;
    height: 88px;
    font-size: 32px;
    display: flex;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    .back{
      font-size: 26px;
      display: flex;
      justify-content:space-around;
      align-items: center;
      color: rgb(24,148,255);
    }
    .title-content{
      padding: 1px;
      max-width: 60%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-left: 42px;
    }
  }
  .navbar{
    padding: 23px 64px;
    /deep/ .van-tabbar{
      border-radius: 8px;
      height: 33px;
      .van-tabbar-item{
        font-size: 14px;
        position: relative;
        .van-tabbar-item__icon{
          position: absolute;
          width: 1px;
          height: 15px;
          background: rgb(206,206,206);
          right: 0;
        }
      }
      .van-tabbar-item:last-child{
        .van-tabbar-item__icon{
          background: rgba(206,206,206,0);
        }
      }
    }
  }
</style>
