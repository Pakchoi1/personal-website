<template>
  <div id="app">
    <header>学习资料</header>
    <div class="content-wrapper">
      <router-view />
    </div>
    <footer>
      <div>浙ICP备19044627号-1</div>
      <div>@金壮 版权所有</div>
      <div>
        链接导航:
        <a href="http://beian.miit.gov.cn">工信部</a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrapper {
  flex: 1;
}

header {
  background-color: #434d57;
  width: 100vw;
  height: 100px;
  line-height: 100px;
  color: #fbfbfb;
}

footer {
  width: 100vw;
  height: 100px;
  background-color: #434d57;
  color: #fbfbfb;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    text-decoration: none;
    color: #fbfbfb;
  }
  a:hover {
    color: #399aeb;
  }
}
</style>
