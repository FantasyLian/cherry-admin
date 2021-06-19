<template>
  <a-layout class="container">
    <a-layout-sider v-model="isCollapse" :trigger="null" collapsible>
      <div class="logo">
        <img src="@/assets/images/logo.png" />
        <h1 v-show="!isCollapse">车厘子交易平台</h1>
      </div>
      <menus :isCollapse="isCollapse" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <header-bar />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view v-if="isRouterAlive" />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Menus from '@/components/Menus'
import HeaderBar from '@/components/HeaderBar'
import { Layout } from 'ant-design-vue'
export default {
  components: {
    Menus,
    HeaderBar,
    ALayout: Layout,
    ALayoutSider: Layout.Sider,
    ALayoutHeader: Layout.Header,
    ALayoutContent: Layout.Content
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  }
}
</script>
<style lang="less" scoped>
.container .ant-layout-sider {
  background-color: #fff;
}
.container .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.container .trigger:hover {
  color: #1890ff;
}

.logo {
  text-align: center;
  margin: 24px auto;
  img {
    width: 50px;
    height: 50px;
    background: rgba(216, 216, 216, 1);
    box-shadow: 0 2px 4px 0 rgba(255, 145, 139, 0.19);
    border-radius: 4px;
  }
  h1 {
    margin-top: 10px;
  }
}
.container .content {
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
  overflow: auto;
}
</style>
