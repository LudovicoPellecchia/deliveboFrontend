<script>
import Navbar from './components/Navbar.vue';

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
    <img class="table-img" src="./assets/tableProva5.png" alt="">
  </div>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<style lang="scss">
.imgbg .table-img {
  object-fit: contain;
  min-width: 700px;
  width: 50%;
  max-width: 1035px;
  position: absolute;
  right: 0;
  z-index: -2;
  filter: drop-shadow(0 0 0.3rem rgb(0, 0, 0));

}




@media screen and (max-width: 992px) {
  .imgbg .table-img {
    max-width: 460px;
    width: 100%;
    min-width: 375px;

  }
}

</style>
