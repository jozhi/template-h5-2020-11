<template>
  <div class='wt-table' ref='wtTable' >
    <div class='table-container'>
      <table class='table'>
        <tr class='title-line'>
          <th class='th' v-for='title in titles' :key='title.value'>{{ title.label }}</th>
        </tr>
        <tr v-for='(column, index) in columns' :key='index' class='tr'
          @click='choose(index)'>
          <td class='td' v-for='filterColumn in filterColumns[index]' :key='filterColumn'>
            {{ filterColumn }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columns: { // 表格内容, 是个数组, 包含着有数据的对象. 由后端返回生成.
      type: Array,
      default: () => []
    },
    titles: { // 标题. 一个数组包含系列对象, 每个对象都有两个属性: value, label.
    // 设置 value 和后端对应相同的字段名可以获取后端数据, 设置 label 给用户以显示相应的标题.
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      filterColumns: [],
      filterTitle: []
    }
  },
  methods: { // 选择相应项到表格中.
    choose(index) {
      console.log(index)
      this.$emit('choose', index)
    }
  },
  mounted() {
    if (this.columns.length === 0) {
      console.error('columns is not defined or it is an empty array')
    }
    if (this.titles.length === 0) {
      console.error('titles is not defined or it is an empty array')
    }
    for (let i = 0; i < this.columns.length; i++) {
      this.filterColumns.push([])
    }
    // console.log(this.titles)
    this.columns.forEach((column, index) => { // O(n³)的时间复杂度, 有点不太好, 后续可以考虑优化.
      this.titles.forEach(title => {
        for (let val in column) {
          if (val === title.value) {
            this.filterColumns[index].push(column[val])
          }
        }
      })
    })
    const { wtTable } = this.$refs
    const height = window.getComputedStyle(document.body).height
    wtTable.style.height = height
    // console.log(this.filterColumns)
  }
}
</script>

<style lang='less' scoped>
.wt-table {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 30vh;
  background: rgba(0, 0, 0, .25);

  .table-container {
    width: 100%;
    padding: 5px;
    max-height: 45vh;
    overflow: auto;
    background: #fff;

    .table {
      margin: 0 auto;
    }

    .title-line,
    .tr {
      border-bottom: 1px solid #aaa;
    }

    .th {
      font-weight: 700;
    }

    .tr:active {
      background: #ccc;
    }

    .td,
    .th{
      padding: 22px 30px;
      white-space: nowrap;
      text-align: center;
    }
  }
}
</style>