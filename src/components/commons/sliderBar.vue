<template>
    <div>
      <el-menu
      router
      unique-opened
      :default-active="onRouted"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

      <template v-for="item in items">
          <template v-if="item.hasOwnProperty('children')">
            <el-submenu :key="item.id" :index="item.index">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{item.label}}</span>
                </template>
                <el-menu-item v-for="subItem in item.children" :key="subItem.index" :index="subItem.index">
                    {{subItem.label}}
                </el-menu-item>
            </el-submenu> 
          </template>
          <template v-else>
            <el-menu-item :key="item.id" :index="item.index">
                <i :class="item.icon"></i>
                <span slot="title">{{item.label}}</span>
            </el-menu-item>
          </template>
      </template>
     </el-menu>
    </div>
</template>
<script>
export default {
  data () {
    return {
      filterText: '',
      items: [
        {
          id: 2,
          label: '自述',
          index: '/about',
          icon: 'el-icon-tickets'
        },
        {
          id: 1,
          label: '表格',
          index: 'home',
          icon: 'el-icon-menu',
          children: [{
            id: 5,
            label: '基础表格',
            index: 'phone'
          }]
        },
        {
          id: 21,
          label: '表单',
          index: 'form',
          icon: 'el-icon-document',
          children: [
            {
              id: 22,
              label: '基本表单',
              index: 'baseForm'
            },
            {
              id: 23,
              label: '编辑器',
              index: 'editor'
            }
          ]
        },
        {
          id: 24,
          label: '图表',
          index: '/charts',
          icon: 'el-icon-picture'
        },
        {
          id: 25,
          label: '拖拽排序',
          index: '/drag',
          icon: 'el-icon-picture'
        }
      ]
    }
  },
  watch: {
  },
  methods: {
    onClicked () {
      var val = '/about'
      this.$router.push(val)
    }
  },
  computed: {
    onRouted () {
      return this.$route.path.replace('/', '')
    }
  }

}
</script>

<style>
.el-menu{
    text-align: left;
    height: 100%;
}
.el-submenu .el-menu-item{
    padding-left: 60px;
}
.vouter-slider-bar{
    padding:10px 0;
    list-style-type: none;
}
.vouter-slider-bar > a{
    text-decoration:none;
}
.vouter-slider-bar > a:visited{
    color:black;
}
</style>

