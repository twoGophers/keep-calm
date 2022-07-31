<template>
  <section id="App">
    <header>
      <VHeader></VHeader>
    </header>
    <main>
      <VMain />
    </main>
    <footer>
      <VFooter></VFooter>
    </footer>
  </section>
</template>

<script>
import VHeader from './components/header/VHeader.vue';
import VFooter from './components/footer/VFooter.vue';
import VMain from './pages/VMain.vue';

export default {
  name: 'App',
  components: {
    VHeader,
    VFooter,
    VMain,
  },
}
</script>

<style lang="scss">
@import url('./assets/style/Reset.scss');
html {
  height: 100%;
}
body {
  background: #E5E5E5;
  min-height: 100%;
}

</style>
