<template>
  <div id="myChart" class="echarts"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  props: {
    options: {
      type: Object
    }
  },
  data () {
    return {
      myChart: null
    }
  },
  beforeDestroy () {
    this.myChart.dispose()// 释放echarts实例
  },
  mounted () {
    this.drawLine()

    window.onresize = () => {
      this.myChart.resize()
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  },
  methods: {
    drawLine () {
      if (this.myChart === null) {
        this.myChart = echarts.init(document.querySelector('#myChart'))
      }
      this.myChart.setOption(this.options)
    }
  },
  watch: {
    isCollapse () {
      setTimeout(() => {
        this.myChart.resize()
      }, 300)
    },

    options: { // 监听的对象
      deep: true, // 深度监听设置为 true
      handler: function () {
        this.drawLine()
        this.myChart.resize()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.echarts {
  height: 400px;
}
</style>
