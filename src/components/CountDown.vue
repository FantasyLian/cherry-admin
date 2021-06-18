<template>
  <a-button type="primary" class="count-down-btn" @click="fn">{{ context }}</a-button>
</template>
<script>
import { Button } from 'ant-design-vue'
export default {
  name: 'countDown',
  components: { AButton: Button },
  props: ['deftext', 'second', 'fn'],
  data () {
    return {
      time: 0,
      timer: null,
      canClick: true
    }
  },
  destroyed () {
    clearInterval(this.timer)
    this.timer = null
    console.log('定时器已销毁')
  },
  computed: {
    context () {
      return this.time > 0 ? this.time + '秒' : this.deftext
    }
  },
  methods: {
    countDown () {
      if (!this.canClick) return
      this.time = this.second
      this.canClick = false
      this.timer = setInterval(() => {
        this.time--
        if (this.time < 0) {
          clearInterval(this.timer)
          this.canClick = true
        }
      }, 1000)
    },
    stopCount () {
      clearInterval(this.timer)
      this.timer = null
      console.log('计时器停止')
    }
  }
}
</script>
<style lang="less" scoped>
.count-down-btn {
  width: 102px;
}
</style>
