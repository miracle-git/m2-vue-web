<template>
  <div id="app" :key="layoutKey">
    <m2-layout
      :scope="scope"
      :navbar-menus="navbarMenus"
      :avatar-menus="avatarMenus"
      :sidebar-menus="sidebarMenus">
      <div slot="header-links">
        <m2-link to="/" :text="$t('button.exit')"/>
      </div>
    </m2-layout>
  </div>
</template>

<script>
  import { refresh, resize } from 'm2-vue'
  import { NAVBAR_MENUS, AVATAR_MENUS, SIDEBAR_MENUS } from 'config/app.conf'
  import http from 'utils/http'

  export default {
    name: 'app',
    mixins: [refresh, resize],
    data() {
      return {
        scope: 'oc',
        navbarMenus: {},
        avatarMenus: {},
        sidebarMenus: {}
      }
    },
    mounted() {
      this.$bus.$on('search', val => console.log(val))
      this.$bus.$on('avatar', val => console.log(val))
      http.proxy.get('./data.json').then(({ navbar, avatar, sidebar }) => {
        this.navbarMenus = { ...NAVBAR_MENUS, data: navbar }
        this.avatarMenus = { ...AVATAR_MENUS, data: avatar }
        this.sidebarMenus = { ...SIDEBAR_MENUS, data: sidebar }
      })
    }
  }
</script>

<style lang="less">
  @import "~assets/css/app.less";
</style>
