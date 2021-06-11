<template>
  <div class="page-content">
    <a-form
      layout="inline"
      :form="form"
      class="search-wrap"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input placeholder="请输入要查询手机号" />
      </a-form-item>
      <a-form-item>
        <a-date-picker :locale="locale"
          placeholder="请选择时间日期"
          v-decorator="['date-time-picker', config]"
          show-time
          format="YYYY-MM-DD HH:mm:ss"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit"> 查询 </a-button>
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
import { Form, Input, Button, DatePicker, Table } from 'ant-design-vue'
import { columns } from '@/assets/data/balance'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
const dataTable = [
  {
    key: '1',
    phoneNum: '18575597667',
    nickname: '喵无忌',
    rechargeMoney: '3,200',
    source: '直充',
    createTime: '2020.06.20  15:22:38'
  },
  {
    key: '2',
    phoneNum: '18718920531',
    nickname: '喵大爷',
    rechargeMoney: '3,200',
    source: '提现金额充值',
    createTime: '2020.06.25  18:34:12'
  }
]
export default {
  name: 'Balance',
  components: {
    AForm: Form, AFormItem: Form.Item, AInput: Input, AButton: Button, ADatePicker: DatePicker, ATable: Table
  },
  data () {
    return {
      locale,
      dataTable,
      columns,
      config: {
        rules: [{ type: 'object', required: true, message: '选择日期时间!' }]
      }
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'time_related_controls' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, fieldsValue) => {
        if (err) return
        const values = {
          ...fieldsValue,
          'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss')
        }
        console.log('Received values of form: ', values)
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
