<template>
  <section class="page-content">
    <div class="row-wrap">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card hoverable class="card-wrap">
            <h3><small>¥</small>{{ dashBoard.todayTotalRechargeAmount }}</h3>
            <p>今日充值</p>
            <p>比昨日增加了<small>¥</small> {{ dashBoard.todayRechargeAmountCompareYesterday }}</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card hoverable class="card-wrap">
            <h3><small>¥</small>{{ dashBoard.todayWithdrawal }}</h3>
            <p>今日提现</p>
            <p>比昨日减少了<small>¥</small> {{ dashBoard.todayWithdrawalCompareYesterday }}</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card hoverable class="card-wrap">
            <h3><small>¥</small>{{ dashBoard.todayTradeAmount }}</h3>
            <p>今日交易额</p>
            <p>比昨日减少了<small>¥</small> {{ dashBoard.todayTradeAmountCompareYesterday }}</p>
          </a-card>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card hoverable class="card-wrap">
            <h3><small>¥</small>{{ dashBoard.totalCharge }}</h3>
            <p>车厘子手续费</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card hoverable class="card-wrap">
            <h3><small>¥</small>{{ dashBoard.totalWithdrawal }}</h3>
            <p>提现总额</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card hoverable class="card-wrap">
            <h3><small>¥</small>{{ dashBoard.totalRechargeAmount }}</h3>
            <p>充值总额</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <div class="charts-wrap">
      <div class="select-wrap">
        <h2>每月充值统计</h2>
        <div class="select-charts">
          <span>{{this.year}}年人工充值：¥{{yearCharge}}</span>
          <a-select default-value="2021" v-model="year" class="select-filter" @change="handleChange">
            <a-select-option value="2021"> 2021年 </a-select-option>
            <a-select-option value="2022"> 2022年 </a-select-option>
            <a-select-option value="2023"> 2023年 </a-select-option>
            <a-select-option value="2024"> 2024年 </a-select-option>
            <a-select-option value="2025"> 2025年 </a-select-option>
          </a-select>
        </div>
      </div>
      <!-- 报表 -->
      <echart ref="chart" :options="options" />
    </div>
  </section>
</template>

<script>
import Echart from '@/components/LineChart'
import { chartOptions } from '@/assets/data/options'
import { Row, Col, Card, Select } from 'ant-design-vue'
import { getHomeInfo, getMonthRecharge } from '@/api/index'
export default {
  name: 'Home',
  components: {
    Echart,
    ARow: Row,
    ACol: Col,
    ACard: Card,
    ASelect: Select,
    ASelectOption: Select.Option
  },
  data () {
    return {
      chartOptions,
      options: {},
      dashBoard: {},
      year: '2021',
      yearCharge: 0
    }
  },
  created () {
    this.getHomeBarData()
    this.MonthRecharge()
  },
  methods: {
    handleChange (val) {
      this.year = val
      this.yearCharge = 0
      this.MonthRecharge()
    },

    async getHomeBarData () {
      await getHomeInfo().then(({ code, data }) => {
        if (code === 200) {
          this.dashBoard = data
        }
      })
    },

    async MonthRecharge () {
      await getMonthRecharge({ year: this.year }).then(({ code, data }) => {
        if (code === 200) {
          this.chartOptions.xAxis.data = data.map(item => item.yearMonth)
          this.chartOptions.series[0].data = data.map(item => item.recharge)
          this.options = this.chartOptions
          data.forEach(item => {
            this.yearCharge += item.recharge
          })
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.row-wrap {
  margin-bottom: 20px;
  .ant-row {
    margin-bottom: 20px;
  }
  .card-wrap {
    text-align: center;
    h3 {
      font-size: 20px;
      font-weight: bold;
      line-height: 27px;
      small {
        font-size: 14px;
        margin-right: 5px;
      }
    }
    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 25px;
      margin: 12px auto 30px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
.select-wrap {
  display: flex;
  justify-content: space-between;
  h2 {
    margin-bottom: 0;
  }
  .select-filter {
    width: 120px;
    margin-left: 10px;
  }
}
</style>
