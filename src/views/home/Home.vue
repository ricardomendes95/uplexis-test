<template>
  <div class="home">
    <Category />
    <div id="nav">
      <div class="content">
        <div class="select">
          <span>ORDENAR</span>
          <select v-model="filter">
            <option value="1">Preço</option>
            <option value="2">Lançamento</option>
          </select>
        </div>
        <div class="section">
          <div style="object-fit: fit;" v-for="(plain, index) of plains" :key="index">
            <Card :plain="plain" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import path from 'path';
import Category from '@/components/category/Category.vue';
import Card from '@/components/card/Card.vue';
import Data from '@/assets/mocks.json';

export default {
  name: 'Home',
  components: {
    Category,
    Card,
  },
  data() {
    return {
      filter: '1',
      plains: Data,
      teste: null,
    };
  },
  methods: {

  },
  watch: {
    filter() {
      console.log(this.filter);
    },
  },
  mounted() {
  },
};
</script>

<style src="./style.scss"  lang="scss" scoped />
