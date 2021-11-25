<template>
  <div>
    <div class="content">
      <div
        v-for="(category, index) in categories"
        v-bind:key="`category-${category.id}`"
      >
        <div
          :class="category.selected ? 'card card-active' : 'card'"
          @click="handleSelect(index)"
        >
          <fa :icon="category.icon" />
          <span>{{ category.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Category',
  data() {
    return {
      categories: [
        {
          selected: true,
          icon: 'globe',
          title: 'todos',
        },
        {
          selected: false,
          icon: 'briefcase',
          title: 'Profissional',
        },
        {
          selected: false,
          icon: 'landmark',
          title: 'Reguladores',
        },
        {
          selected: false,
          icon: 'tree',
          title: 'Sócio Ambiental',
        },
        {
          selected: false,
          icon: 'gavel',
          title: 'Júridico',
        },
        {
          selected: false,
          icon: 'ban',
          title: 'Listas Restritivas',
        },
        {
          selected: false,
          icon: 'globe-americas',
          title: 'Mídia / Internet',
        },
        {
          selected: false,
          icon: 'gem',
          title: 'Bens e Imóveis',
        },
        {
          selected: false,
          icon: 'male',
          title: 'Cadastro',
        },
        {
          selected: false,
          icon: 'piggy-bank',
          title: 'financeiro',
        },
      ],
    };
  },
  methods: {
    handleSelect(index) {
      const position = this.categories.findIndex(
        (category) => category.selected === true,
      );
      this.categories[position].selected = false;
      this.categories[index].selected = true;
    },
  },
};
</script>
<style src="./style.scss"  lang="scss" scoped />
