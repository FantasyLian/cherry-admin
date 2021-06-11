<template>
  <div class="page-content">
    <a-form :inline="true" class="search-wrap">
      <a-form-item>
        <a-input-search
          placeholder="请输入要查询的手机号"
          enter-button="搜索"
          :maxLength="100"
          size="large"
          @search="onSearch"
        />
      </a-form-item>
    </a-form>
    <a-table :columns="columns" :data-source="dataTable">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <div slot="auth" slot-scope="auth">
        <span v-if="auth === '1'" style="color: #1890ff"> 已认证 </span>
        <span v-else> 未认证 </span>
      </div>
    </a-table>
  </div>
</template>
<script>
import { Form, Input, Table } from 'ant-design-vue'
import { columns } from '@/assets/data/user'

const dataTable = [
  {
    key: '1',
    phoneNum: '18575597667',
    authentication: '1',
    nickname: '喵无忌',
    IDNumber: '134 8383 2831',
    sellTimes: '50',
    buyTimes: '0',
    orderIncome: '1,000.00',
    totalWithdraw: '500.00'
  },
  {
    key: '2',
    phoneNum: '18718920531',
    authentication: '0',
    nickname: '喵大爷',
    IDNumber: '134 8383 2831',
    sellTimes: '23',
    buyTimes: '1',
    orderIncome: '0.00',
    totalWithdraw: '0.00'
  }
]
export default {
  name: 'User',
  components: {
    AForm: Form, AFormItem: Form.Item, AInputSearch: Input.Search, ATable: Table
  },
  data () {
    return {
      dataTable,
      columns
    }
  },
  methods: {
    onSearch (value) {
      console.log(value)
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
