<template>
  <a-menu
    theme="light"
    mode="inline"
    class="nav"
    :collapse="isCollapse"
    :default-selected-keys="[$route.path]"
    @select="selectMenuItem"
  >
    <template v-for="item in menuList">
      <a-sub-menu :key="item.pageUrl" v-if="item.children.length > 0">
        <span slot="title">
          <a-icon :type="item.icon" />
          <span>{{ item.title }}</span>
        </span>
        <a-menu-item v-for="subItem in item.children" :key="subItem.pageUrl">
          <router-link :to="subItem.pageUrl">
            {{ subItem.title }}
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item :key="item.pageUrl" v-else>
        <router-link :to="item.pageUrl">
          <a-icon :type="item.icon" />
          <span>{{ item.title }}</span>
        </router-link>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script>
import { Menu, Icon } from 'ant-design-vue'
import { menuList } from '@/assets/data/menu'
export default {
  props: ['isCollapse'],
  components: {
    AMenu: Menu,
    AMenuItem: Menu.Item,
    ASubMenu: Menu.SubMenu,
    AIcon: Icon
  },
  data () {
    return {
      menuList
    }
  },
  watch: {
    // 监听路由变化
    $route (e) {
      this.routes = e.matched.filter(items => items.meta.title)
      this.selectedKeys = [e.path]
    }
  },
  methods: {
    selectMenuItem (key) {
      this.$router.push({ path: key })
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
