<template>
  <div id="app">
    <h1>ARTHAPP</h1>
    <br />
    <router-link to="/Home">
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15%;
}
</style>
