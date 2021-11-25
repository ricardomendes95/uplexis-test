<template>
  <div class="about">
    <h1>{{plainId}}</h1>
    <div class="body">
        <fa :icon="plain.icon" />
        <span>{{plain.title}}</span>
        <p>
          {{ plain.description }}
        </p>
      </div>
  </div>
</template>
<script>
import Data from '@/assets/mocks.json';

export default {
  name: 'KnowMore',
  props: ['plainId'],
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
      // const arr = Data;
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
