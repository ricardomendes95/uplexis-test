<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" :class="objectFit" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#"><fa icon="arrow-left" /> </a>
    <a class="next" @click="next" href="#"><fa icon="arrow-right" /></a>
  </div>
</template>

<script>
export default {
  name: 'Carrousel',
  props: {
    images: [],
    objectFit: String,
  },

  data() {
    return {
      timer: null,
      currentIndex: 0,
    };
  },
  mounted() {
    this.startSlide();
  },
  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 6000);
    },
    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    },
  },
  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped />
