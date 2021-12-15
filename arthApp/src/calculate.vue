<template>
  <div v-if="isDrizzleInitialized">
    <div>
      <h1>HAS LLEGADO CORRECTAMENTE</h1>
      <br>
      <input type="text" disabled>
      <br>
      <br>
      <br>
      <div>
        <row>
      <button>Boton 1</button>
      <button>Boton 2</button>
      <button>Boton 3</button>
        </row>
      </div>
    </div>
  </div>

  <div v-else>Loading...</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SimpleStorage',

  computed: mapGetters('drizzle', ['isDrizzleInitialized'])
}
</script>

<style></style>
