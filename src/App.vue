<template>
  <div demo id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Transponders">Transponders</router-link> |
      <router-link to="/Cars">Cars</router-link> |
      <router-link to="/Races">Races</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@import '../src/styles/main.less';
</style>
