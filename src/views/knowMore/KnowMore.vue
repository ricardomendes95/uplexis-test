<template>
  <div class="container">
    <div >
      <router-link to="/" ><fa icon="chevron-left" /></router-link>
      <h1>{{ plain.title }}</h1>
    </div>
    <div class="carrossel">
          <Carrossel :images="plain.images || []" :objectFit="'contain'" />
    </div>
    <p>
      {{ plain.description }}
    </p>
    <div class="footer">
      <span>R$ <span>{{plain.cost?.replace('R$', "")}}</span></span>
      <button>Habilitar</button>
    </div>
  </div>
</template>
<script>
import Data from '@/assets/mocks.json';
import Carrossel from '@/components/carrossel/Carrossel.vue';

export default {
  name: 'KnowMore',
  props: ['plainId'],
  components: {
    Carrossel,
  },
  data() {
    return {
      plain: {
        icon: 'globo',
      },
      plains: Data,
    };
  },
  methods: {
    findPlain() {
      this.plains.map((plain) => {
        if (plain.id === Number(this.plainId)) {
          this.plain = plain;
        }
        return null;
      });
    },
  },
  mounted() {
    this.findPlain();
  },
};
</script>
<style src="./style.scss" lang="scss" scoped />
