<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
  },
});
</script>

<style scoped>
#app {
  background-color: #fcffff;
  color: #005187;
  font-family: 'Segoe UI', sans-serif;
}
main {
  padding: 2rem;
}

</style>

<style>
body {
  margin: 0;
}
</style>