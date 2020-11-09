<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
html,
body {
  touch-action: manipulation; // 解决双击会触发FastClick在控制台报错提示的问题。
  height: 100%;
	overflow: hidden;
  // padding-bottom: 60px;
}
body > #app{
	display: block;
	height: 100%;
	overflow-y: auto;
}
* {
	-webkit-overflow-scrolling: touch;
}
#app .van-collapse-item__title.van-collapse-item__title--expanded {
  background-color: #efeff4;
}
#app [class*="van-hairline"]:after {
  border-top: 1px solid #c8c7cc;
  border-bottom: 1px solid #c8c7cc;
}
.van-icon-notes-o {
  font-size: 22px !important;
}
//radio多个
.van-radio-group {
  .van-cell {
    flex-direction: row-reverse;
    .van-cell__title {
      margin-left: 12px;
    }
  }
}
// 显示未填选项
.isfile {
  display: flex !important;
}
.van-cell__title {
  font-size: 16px;
  font-weight: bold;
}
.van-field__label {
  font-size: 14px;
}
.van-collapse-item__wrapper .van-collapse-item__content {
  padding: 0;
  /deep/van-field__control {
    text-align: right;
    color: #000;
  }
  .van-field__label {
    min-width: 90px;
    width: 150px;
  }
}
.van-cell-group {
  .van-field {
    padding: 15px 15px;
  }
}
.van-collapse-item {
  .van-cell {
    padding: 16px 15px;
  }
}

.van-cell--required:before {
  display: none;
}
.van-cell--required .van-field__label span::after {
  color: #f44;
  font-size: 14px;
  content: "*";
}
.van-field__error-message {
  text-align: right !important;
}
.van-field__control:disabled {
  color: #000 !important;
}
img {
  content: normal !important;
}
</style>
