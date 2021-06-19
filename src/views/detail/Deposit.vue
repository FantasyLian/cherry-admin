<template>
  <div class="page-content">
    <a-form
      layout="inline"
      :form="form"
      class="search-wrap"
      @submit="handleSubmit"
    >
      <a-form-item label="账号：">
        <a-input
          placeholder="请输入要查询手机号"
          v-decorator="[
            'mobile',
            {
              rules: [{ required: false, message: 'Pleaseinput your nickname' }]
            }
          ]"
        />
      </a-form-item>
      <a-form-item label="类型：">
        <a-select default-value="" style="width: 120px" @change="handleChange">
          <a-select-option value=""> 全部 </a-select-option>
          <a-select-option value="1"> 订单收入 </a-select-option>
          <a-select-option value="4"> 提现支出 </a-select-option>
          <a-select-option value="12"> 转入钱包 </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="时间：">
        <a-date-picker
          :locale="locale"
          placeholder="请选择时间日期"
          show-time
          format="YYYY-MM-DD HH:mm:ss"
          @change="onChange"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit"> 查询 </a-button>
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
    </a-table>
  </div>
</template>
<script>
import { Form, Input, Button, Select, DatePicker, Table } from 'ant-design-vue'
import { columns } from '@/assets/data/deposit'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
import { getWithdrawal } from '@/api/index'

const dataTable = []
export default {
  name: 'Deposed',
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    AButton: Button,
    ASelect: Select,
    ASelectOption: Select.Option,
    ADatePicker: DatePicker,
    ATable: Table
  },
  data () {
    return {
      locale,
      dataTable,
      columns,
      type: '',
      date: '',
      mobile: '',
      form: this.$form.createForm(this, { name: 'deposit' })
    }
  },
  created () {
    this.getWithdrawalList()
  },
  methods: {
    async getWithdrawalList () {
      await getWithdrawal({
        type: this.type,
        mobile: this.mobile,
        date: this.date.split(' ')[0]
      }).then(({ code, data }) => {
        if (code === 200) {
          this.dataTable = data
        }
      })
    },
    // 选择日期
    onChange (date, dateString) {
      this.date = dateString
      // console.log()
    },
    // 选择状态
    handleChange (value) {
      this.type = value
      // console.log(`selected ${value}`)
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values)
          this.mobile = values.mobile
          this.getWithdrawalList()
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.search-wrap {
  margin-bottom: 20px;
  .ant-input-search {
    width: 520px;
  }
}
</style>
