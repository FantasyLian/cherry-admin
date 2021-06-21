<template>
  <div class="page-content">
    <a-form>
      <a-form-item class="search-wrap">
        <a-input-search placeholder="请输入搜索的订单编号/手机账号" enter-button="搜索" :maxLength="100" size="large" @search="onSearch" />
      </a-form-item>
      <a-form-item>
        <span>状态：</span>
        <a-radio-group name="radioGroup" :default-value="''" @change="onRadioChange">
          <a-radio value=""> 全部 </a-radio>
          <a-radio :value="1"> 待打赏 </a-radio>
          <a-radio :value="2"> 出售中 </a-radio>
          <a-radio :value="3"> 交易成功 </a-radio>
          <a-radio :value="0"> 已取消 </a-radio>
        </a-radio-group>
      </a-form-item>
    </a-form>
    <a-table :columns="columns" :data-source="dataTable" :rowKey="
        (record, index) => {
          return index;
        }
      ">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <template slot="finishTime" slot-scope="finishTime">
        <span>{{ finishTime || '-'}}</span>
      </template>
    </a-table>
  </div>
</template>
<script>
import { Form, Input, Table, Radio } from 'ant-design-vue'
import { columns } from '@/assets/data/seller'
import { getSellerOrder } from '@/api'

export default {
  name: 'Seller',
  components: {
    AForm: Form, AFormItem: Form.Item, AInputSearch: Input.Search, ATable: Table, ARadio: Radio, ARadioGroup: Radio.Group
  },
  data () {
    return {
      dataTable: [],
      columns,
      keywords: '',
      status: ''
    }
  },
  mounted () {
    this.initList()
  },
  methods: {
    onSearch (value) {
      this.initList(value, this.status)
    },
    onRadioChange (e) {
      const status = e.target.value.toString()
      this.initList('', status)
    },
    async initList (words, status) {
      await getSellerOrder({ queryVal: words, status: status }).then(({ code, data }) => {
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
