<template>
  <div class="header-wrap">
    <div class="breadcrumb-wrap">
      <a-icon
        class="trigger"
        :type="isCollapse ? 'menu-unfold' : 'menu-fold'"
        @click="toggleMenu"
      />
      <a-breadcrumb separator="/">
        <a-breadcrumb-item v-for="(item, index) of $route.matched" :key="index">
          <router-link :to="item.path">{{ item.meta.title }}</router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <a-dropdown>
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        {{ userName }} <a-icon type="down" />
      </a>
      <a-menu slot="overlay" @click="handleCommand">
        <!-- <a-menu-item key="1"> 修改登录密码 </a-menu-item> -->
        <a-menu-item key="2"> 退出登录 </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>
<script>
import { Icon, Breadcrumb, Dropdown, Menu } from 'ant-design-vue'
import local from '@/utils/local'
export default {
  components: {
    AIcon: Icon,
    ABreadcrumb: Breadcrumb,
    ABreadcrumbItem: Breadcrumb.Item,
    ADropdown: Dropdown,
    AMenu: Menu,
    AMenuItem: Menu.Item
  },
  data () {
    return {
      isCollapse: false,
      userName: '管理员'
    }
  },
  created () {
    this.$nextTick(() => {
      this.userName = local.get('mobile')
    })
  },
  methods: {
    // 切换隐藏显示左侧导航栏
    toggleMenu () {
      this.isCollapse = !this.isCollapse
      this.$store.commit('SWITCH_COLLAPSE')
    },
    // 点击下拉菜单选项
    handleCommand ({ key }) {
      switch (key) {
        case '2':
          this.$router.replace({ path: '/login' })
          // localStorage.removeItem('token')
          break
      }
    }
  }
}
</script>
<style lang="less" scoped>
.header-wrap {
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .breadcrumb-wrap {
    display: flex;
    align-items: center;
    .ant-breadcrumb {
      margin-left: 16px;
    }
  }
}
</style>
