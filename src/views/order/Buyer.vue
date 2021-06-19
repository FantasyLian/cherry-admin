<template>
  <div class="page-content">
    <a-form :inline="true" class="search-wrap">
      <a-form-item>
        <a-input-search placeholder="请输入搜索的订单编号/手机账号" enter-button="搜索" :maxLength="100" size="large" @search="onSearch" />
      </a-form-item>
    </a-form>
    <a-table :columns="columns" :data-source="dataTable" :rowKey="(record, index) => { return index }">
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
  </div>
</template>
<script>
import { Form, Input, Table } from 'ant-design-vue'
import { columns } from '@/assets/data/buyer'
import { getBuyerOrder } from '@/api'
export default {
  name: 'Buyer',
  components: {
    AForm: Form, AFormItem: Form.Item, AInputSearch: Input.Search, ATable: Table
  },
  data () {
    return {
      dataTable: [],
      columns,
      keywords: ''
    }
  },
  mounted () {
    this.initList()
  },
  methods: {
    onSearch (value) {
      this.initList(value)
    },
    async initList (words) {
      await getBuyerOrder({ queryVal: words }).then(({ code, data }) => {
        if (code === 200) {
          this.dataTable = data
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.search-wrap {
  text-align: center;
  .ant-input-search {
    width: 520px;
  }
}
</style>
