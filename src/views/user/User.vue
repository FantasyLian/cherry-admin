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
    <a-table
      :columns="columns"
      :data-source="dataTable"
      :rowKey="
        (record, index) => {
          return index
        }
      "
    >
      <a slot="name" slot-scope="text">{{ text }}</a>
      <div slot="auth" slot-scope="auth">
        <span v-if="auth === true" style="color: #1890ff"> 已认证 </span>
        <span v-else> 未认证 </span>
      </div>
      <div slot="mobileNo" slot-scope="mobileNo">
        <span> {{ mobileNo || '-' }} </span>
      </div>
      <div slot="certNo" slot-scope="certNo">
        <span> {{ certNo || '-' }} </span>
      </div>
      <div slot="sellCount" slot-scope="sellCount">
        <span> {{ sellCount || '-' }} </span>
      </div>
      <div slot="buyCount" slot-scope="buyCount">
        <span> {{ buyCount || '-' }} </span>
      </div>
      <div slot="totalOrderIncome" slot-scope="totalOrderIncome">
        <span> {{ totalOrderIncome || '-' }} </span>
      </div>
      <div slot="totalWithdrawal" slot-scope="totalWithdrawal">
        <span> {{ totalWithdrawal || '-' }} </span>
      </div>
    </a-table>
  </div>
</template>
<script>
import { Form, Input, Table } from 'ant-design-vue'
import { columns } from '@/assets/data/user'
import { getUserInfo } from '@/api/index'

const dataTable = []
export default {
  name: 'User',
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    AInputSearch: Input.Search,
    ATable: Table
  },
  data () {
    return {
      dataTable,
      columns
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    async getUserList (mobile) {
      await getUserInfo({
        mobile: mobile
      }).then(({ code, data }) => {
        if (code === 200) {
          this.dataTable = data
        }
      })
    },
    onSearch (value) {
      this.getUserList(value)
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
