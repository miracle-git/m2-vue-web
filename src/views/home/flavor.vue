<template>
  <div class="home-flavor">
    <p class="btn-group">
      <el-dropdown size="medium" split-button type="success" @command="handleSwitchLang">
        {{$t('button.lang')}}
        <el-dropdown-menu slot="dropdown" class="switch-drop-menu">
          <el-dropdown-item command="zh-cn">{{$t('lang.zh')}}</el-dropdown-item>
          <el-dropdown-item command="en-us">{{$t('lang.en')}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown size="medium" split-button type="success" @command="handleSwitchTheme">
        {{$t('button.theme')}}
        <el-dropdown-menu slot="dropdown" class="switch-drop-menu">
          <el-dropdown-item command="skyblue"><span class="blue"></span>{{$t('theme.blue')}}</el-dropdown-item>
          <el-dropdown-item command="grassgreen"><span class="green"></span>{{$t('theme.green')}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </p>
    <p>
      <a href="https://github.com/miracle-git/m2" target="_blank">
        {{$t('message.click')}}
      </a>
      {{$t('message.learn')}}
    </p>
  </div>
</template>

<script>
  import { changeLang, changeTheme } from 'm2-vue'

  export default {
    name: 'home-flavor',
    methods: {
      // 切换语言
      handleSwitchLang(lang) {
        // 如果需要第三方站点配置多语言时才开启
        // changeLang(this, lang, 'M2APP')
        changeLang(this, lang)
      },
      // 切换主题
      handleSwitchTheme(theme) {
        changeTheme(this, theme)
      }
    }
  }
</script>
