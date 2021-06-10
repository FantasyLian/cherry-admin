// export const chartOptions = {
//   title: {
//     padding: [0, 100],
//     text: '充值统计',
//     textStyle: {
//       fontSize: 14,
//       color: '#333'
//     }
//   },
//   tooltip: { // 设置悬浮框的样式
//     trigger: 'axis',
//     confine: true
//   },
//   grid: { // 设置canvas构造内容的边距
//     left: '4%',
//     right: '4%',
//     bottom: '0',
//     containLabel: true
//   },
//   // x 坐标轴
//   xAxis: {
//     type: 'category',
//     axisLine: { // 坐标轴线
//       show: false // 默认显示，属性show控制显示与否
//     },
//     axisLabel: {
//       show: true,
//       textStyle: {
//         color: '#333'
//       }
//     },
//     splitLine: { show: false }, // 分隔线
//     axisTick: { // 轴上的齿度是否显示
//       alignWithLabel: true,
//       show: true
//     },
//     data: []
//   },
//   // y 坐标轴
//   yAxis: {
//     type: 'value',
//     name: '单位（元）',
//     textStyle: {
//       color: '#333'
//     },
//     axisTick: { // 轴上的齿度是否显示
//       show: false
//     }
//   },
//   series: [{
//     data: [],
//     type: 'line',
//     symbol: 'circle',
//     symbolSize: 10,
//     showAllSymbol: true,
//     itemStyle: {
//       normal: {
//         color: 'rgb(72, 118, 254)',
//         label: {
//           show: true,
//           position: 'top',
//           textStyle: {
//             color: 'rgb(72, 118, 254)'
//           }
//         }
//       }
//     }
//   }]
// }

export const chartOptions = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [150, 230, 224, 218, 135, 147, 260],
    type: 'line'
  }]
}
