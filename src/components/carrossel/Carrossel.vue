<template>
 <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Carrousel',
  props: {
    msg: String,
  },

  data() {
    return {
      images: [
        'https://uplexis.com.br/wp-content/uploads/2021/04/Case-Divulgacao-Carrossel.png',
        'https://uplexis.com.br/wp-content/uploads/2019/10/bg-dossies.jpg',
        'https://uplexis.com.br/wp-content/uploads/2019/10/bg-uplink.jpg',
      ],
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

  },
  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./style.scss" lang="scss" scoped />
