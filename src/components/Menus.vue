<template>
  <a-menu theme="light" mode="inline" class="nav" :collapse="isCollapse" :default-selected-keys="[currentPath]">
    <a-menu-item key="1">
      <a-icon type="home" />
      <span>首页</span>
    </a-menu-item>
    <a-menu-item key="2">
      <a-icon type="order" />
      <span>订单</span>
    </a-menu-item>
    <a-menu-item key="3">
      <a-icon type="upload" />
      <span>明细</span>
    </a-menu-item>
    <a-menu-item key="4">
      <a-icon type="user" />
      <span>用户</span>
    </a-menu-item>
  </a-menu>
</template>

<script>
import { Menu, Icon } from 'ant-design-vue'
export default {
  props: ['isCollapse'],
  components: {
    AMenu: Menu,
    AMenuItem: Menu.Item,
    AIcon: Icon
  },
  data () {
    return {
      currentPath: location.pathname
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav {
  border: none;
}
</style>
