<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {}
  },
  methods: {

  },
}
</script>

<template>
  <div class="imgbg">
    <img src="./assets/tableProva2.png" alt="">
  </div>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<style lang="scss">
.imgbg img {
  object-fit: contain;
  top: -77px;
  min-width: 375px;
  width: 100%;
  max-width: 709px;
  height: 100vh;
  position: absolute;
  right: 0;
  z-index: -2;
  filter: drop-shadow(0 0 0.3rem rgb(0, 0, 0));

}
</style>
