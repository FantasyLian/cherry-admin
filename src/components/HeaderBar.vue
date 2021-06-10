<template>
  <a-icon
    class="trigger"
    :type="isCollapse ? 'menu-unfold' : 'menu-fold'"
    @click="toggleMenu"
  />
</template>
<script>
import { Icon } from 'ant-design-vue'
export default {
  components: {
    AIcon: Icon
  },
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    toggleMenu () {
      this.isCollapse = !this.isCollapse
      this.$store.commit('SWITCH_COLLAPSE')
    }
  }
}
</script>
