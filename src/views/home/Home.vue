<template>
  <div class="home">
    <Category @event-category="handleCategory" />
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
          <div
            style="object-fit: fit"
            v-for="(plain, index) of plains"
            :key="index"
          >
            <Card :plain="plain" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      plains: [],
      categorySelected: 'todos',
    };
  },
  methods: {
    handleCategory(selected) {
      this.categorySelected = selected;
      this.plains = [];
      this.findCategory();
    },

    findCategory() {
      if (this.categorySelected === 'todos') {
        this.plains = Data;
      }
      // eslint-disable-next-line no-restricted-syntax
      for (const item of Data) {
        if (item.title === this.categorySelected) {
          this.plains.push(item);
        }
      }
    },

    filterItems(type) {
      if (Number(type) === 2) {
        this.plains.sort((a, b) => {
          if (a.createdAt < b.createdAt) {
            return 1;
          }
          if (a.createdAt > b.createdAt) {
            return -1;
          }
          return 0;
        });
      } else {
        this.plains.sort((a, b) => {
          const a1 = a.cost.replace(/\D+/g, '');
          const b1 = b.cost.replace(/\D+/g, '');
          if (a1 > b1) {
            return 1;
          }
          if (a1 < b1) {
            return -1;
          }
          return 0;
        });
      }
    },

  },
  watch: {
    filter() {
      const value = this.filter;
      this.filterItems(value);
    },
  },
  mounted() {
    this.findCategory();
  },
};
</script>

<style src="./style.scss"  lang="scss" scoped />
