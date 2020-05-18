<template>
  <div id="app">
    <div id="nav">
        <router-link to="/AllResources">All Resources</router-link> | 
       <router-link to="/AllUsers">All Users</router-link> | 
      <router-link to="/Resource">Resource</router-link>
    </div>
  </div>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
