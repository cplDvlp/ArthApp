<template>
  <div v-if="isDrizzleInitialized" id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <div class="section">
      <h2>Show the Accounts</h2>
      <drizzle-account units="Ether" :precision="2" />
    </div>

  <button @click="alert('Hello')">Free </button>
  <button @click="alert('Hello')">Connect Wallet</button>
<div class="section">
      <h2>Tutorial Token</h2>
      <Calculate />
    </div>

  </div>

  <div v-else>Loading...</div>

</template>

<script>
import TutorialToken from './TutorialToken'
import SimpleStorage from './SimpleStorage'
import ComplexStorage from './ComplexStorage'
import { mapGetters } from 'vuex'
import Calculate from './calculate.vue'

export default {
  name: 'app',
  components: {
    ComplexStorage,
    TutorialToken,
    SimpleStorage,
    Calculate
  },

  computed: mapGetters('drizzle', ['isDrizzleInitialized'])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: rgb(163, 163, 163);
}
</style>
