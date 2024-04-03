<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"><!--背景颜色、字体颜色、选中的字体颜色-->

      <h3>{{ isCollapse ?'后台':'通用后台管理系统'}}</h3>
   <!--一级菜单的渲染-->
    <el-menu-item
    @click="clickMenu(item)"
      v-for="item in noChildren"
      :key="item.name"
      v-bind:index="item.name"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <!--i标签代表所渲染的图标-->
      <span slot="title">{{ item.label }}</span>
      <!--表示所渲染的文字内容信息-->
    </el-menu-item>
      <!--二级菜单的渲染-->
    <el-submenu v-for="item in hasChildren" :key="item.label" :index="1">  
      <!--将submenu数据由静态数据改为动态数据，key和index都要表述获取唯一的标识 -->
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span> <!--slot代表插槽，二级菜单可以镶嵌在一级菜单之下-->
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<!--设置样式语言为less，scope表示只作用于当前的页面-->
<style lang="less" scope>  
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  h3{
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //点击菜单
    clickMenu(item){
       console.log(item)
       //当页面的路由与跳转的路由不一致时才允许跳转，同时当前的路径是/home，并且跳转的路径是/时才会出问题，所以对后面情况进行取反
       //$route当前页面的路由，$router表示整个的router实例
       if(this.$route.path !==item.path && !(this.$route.path==='/home' &&(item.path==="/")))
       {
        this.$router.push(item.path)
        }
    }
  },
  computed: {
    //  没有子菜单
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
    //  有子菜单
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    }
  },
};
</script>
<style lang="less" scoped>
.el-menu{
  border-right: none;
}
</style>