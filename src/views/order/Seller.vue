<template>
  <div class="page-content">
    <a-form>
      <a-form-item class="search-wrap">
        <a-input-search
          placeholder="请输入搜索的订单编号/手机账号"
          enter-button="搜索"
          :maxLength="100"
          size="large"
          @search="onSearch"
        />
      </a-form-item>
      <a-form-item>
        <span>状态：</span>
        <a-radio-group name="radioGroup" :default-value="0">
          <a-radio :value="0"> 全部 </a-radio>
          <a-radio :value="1"> 待打赏 </a-radio>
          <a-radio :value="2"> 出售中 </a-radio>
          <a-radio :value="3"> 交易成功 </a-radio>
          <a-radio :value="4"> 已取消 </a-radio>
        </a-radio-group>
      </a-form-item>
    </a-form>
    <a-table :columns="columns" :data-source="dataTable">
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
  </div>
</template>
<script>
import { Form, Input, Table, Radio } from 'ant-design-vue'
import { columns } from '@/assets/data/seller'

const dataTable = [
  {
    key: '1',
    orderId: '66576534567785',
    product: '宝石',
    sellerAccount: '134 8383 2831',
    createTime: '2020.06.25  18:34:12',
    tradingTime: '2020.06.25  18:34:14',
    account: '1961 9023',
    quantity: '100000000',
    unitPrice: '0.9',
    WGCAccount: '18575597667',
    totalPrice: '90,000,000',
    income: '80,000,000',
    status: '已完成'
  },
  {
    key: '2',
    orderId: '66576534567785',
    product: '宝石',
    sellerAccount: '134 8383 2831',
    createTime: '2020.06.25  18:34:12',
    tradingTime: '2020.06.25  18:34:14',
    account: '1961 9023',
    quantity: '100000000',
    unitPrice: '0.9',
    WGCAccount: '18575597667',
    totalPrice: '90,000,000',
    income: '80,000,000',
    status: '已完成'
  }
]
export default {
  name: 'Seller',
  components: {
    AForm: Form, AFormItem: Form.Item, AInputSearch: Input.Search, ATable: Table, ARadio: Radio, ARadioGroup: Radio.Group
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
