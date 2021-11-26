<template>
  <div class="app">
    <Carrossel :images="images" :objectFit="'cover'" />
    <router-view />
  </div>
</template>
<script>
import Carrossel from '@/components/carrossel/Carrossel.vue';

export default {
  name: 'app',
  components: {
    Carrossel,
  },
  data() {
    return {
      images: [
        'https://uplexis.com.br/wp-content/uploads/2021/04/Case-Divulgacao-Carrossel.png',
        'https://uplexis.com.br/wp-content/uploads/2019/10/bg-dossies.jpg',
        'https://uplexis.com.br/wp-content/uploads/2019/10/bg-uplink.jpg',
      ],
    };
  },
};
</script>
<style src="./assets/scss/index.scss" lang="scss" />
