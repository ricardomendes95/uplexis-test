<template>
  <div class="container">
    <div class="card">
      <div class="body">
        <fa :icon="plain.icon" />
        <span>{{ plain.title }}</span>
        <p>
          {{ plain.description }}
        </p>
      </div>
      <div class="footer">
        <div>
          <span>{{ plain.cost }}</span>
          <router-link
            :to="{ name: 'KnowMore', params: { plainId: plain.id } }"
          >
            Saiba mais
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    plain: {},
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style src="./style.scss"  lang="scss" scoped />
