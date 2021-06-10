<template>
  <section class="home-wrap">
    <div class="row-wrap">
      <a-row>
        <a-col :span="8">
          <a-card hoverable class="card-wrap">
            <h3><small>¥</small>200,000</h3>
            <p>今日充值</p>
            <span>比昨日增加了 ￥10,000</span>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card hoverable class="card-wrap">
            <h3><small>¥</small>19,340</h3>
            <p>今日提现</p>
            <span>比昨日减少了 ￥ 10,000</span>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card hoverable class="card-wrap">
            <h3><small>¥</small>3,400</h3>
            <p>今日交易额</p>
            <span>比昨日减少了 ￥ 10,000</span>
          </a-card>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="8">
          <a-card hoverable class="card-wrap">
            <h3><small>¥</small>15,000</h3>
            <p>车厘子手续费</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card hoverable class="card-wrap">
            <h3><small>¥</small>219,340</h3>
            <p>提现总额</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card hoverable class="card-wrap">
            <h3><small>¥</small>22,100,500</h3>
            <p>充值总额</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <div class="charts-wrap">
      <div class="select-wrap">
        <h2>每月充值统计</h2>
        <div class="select-charts">
          <span>2020年工充值：¥74,238,987</span>
          <a-select default-value="1" style="width: 120px" @change="handleChange">
            <a-select-option value="1"> 近7日 </a-select-option>
            <a-select-option value="2"> 近1月 </a-select-option>
          </a-select>
        </div>
      </div>
      <echart ref="chart" :options="chartOptions" />
    </div>
  </section>
</template>

<script>
import Echart from '@/components/LineChart'
import { chartOptions } from '@/assets/data/options'
import { Row, Col, Card, Select } from 'ant-design-vue'
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
      chartOptions
    }
  },
  methods: {
    handleChange () {
      this.$refs.chart.drawLine()
    }
  }
}
</script>
<style lang="less" scoped>
.home-wrap {
  .card-wrap {
    width: 360px;
    margin: 0 auto 26px;
  }
}
</style>
