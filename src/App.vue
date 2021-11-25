<template>
<div class="app">
    <Carrossel/>
  <router-view/>
</div>
</template>
<script>
import Carrossel from '@/components/carrossel/Carrossel.vue';

export default {
  name: 'app',
  components: {
    Carrossel,
  },
};
</script>
<style src="./assets/scss/index.scss" lang="scss" />
