<template>
  <div class="navbar">
    <!-- sidebar抽屉按钮 -->
    <div class="sidebar-switch">
      <i class="fa fa-caret-square-o-right" aria-hidden="true"></i>
    </div>

    <a-breadcrumb separator="/">
      <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
      <a-breadcrumb-item><a href="/login">登录</a> </a-breadcrumb-item>
    </a-breadcrumb>

    <a-dropdown class="nav-menu">
      <div class="avatar-wrapper">
        <span>管理员</span>
      </div>
      <template #overlay>
        <a-menu>
          <a-menu-item command="a">用户设置</a-menu-item>
          <a-menu-item command="a">退出登陆</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
    <a-dropdown class="nav-menu">
      <div class="avatar-wrapper">
        <span>消息</span>
      </div>
      <template #overlay>
        <a-menu>
          <a-menu-item command="a">通知:xxx</a-menu-item>
          <a-menu-item command="a">进度:xxx</a-menu-item>
          <a-menu-item command="a">待办:xxx</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  white-space: nowrap;
  height: 64px;
}
.sidebar-switch {
  width: 30px;
  padding: 1 1px;
  float: left;
  cursor: pointer;
  i {
    font-size: 22px;
    line-height: 64px;
  }
}
.ant-breadcrumb {
  float: left;
  line-height: 64px;
}
.nav-menu {
  float: right;
  margin-right: 20px;
  cursor: pointer;
  height: 64px;
  line-height: 64px;
  white-space: nowrap;
}
.nav-menu.avatar-wrapper .nav-menu.mail {
  display: flex;
  align-items: center;
}
</style>
