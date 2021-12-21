<template>
  <div id="app">
    <div>
      <b-button size="lg" pill variant="outline-info">
        <router-link to="/Calculate" tag="div">
        Free
        </router-link>
      </b-button>
      <b-button size="lg" pill variant="outline-success" :disabled="showButton">
        <router-link to="/Calculate" tag="div">
          <div v-if="isDrizzleInitialized">Access</div>
          <div v-else>Connect Wallet</div>
        </router-link>
      </b-button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      showButton: this.isDrizzleInitialized,
    };
  },

  computed: mapGetters("drizzle", ["isDrizzleInitialized"]),
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