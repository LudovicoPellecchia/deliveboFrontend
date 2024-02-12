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
<!--   <div class="imgbg">
    <img class="table-img" src="./assets/tableProva5.png" alt="">
  </div> -->
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<style lang="scss">
/* .imgbg .table-img {
  object-fit: contain;
  max-width: 460px;
  width: 100%;
  min-width: 375px;
  position: absolute;
  right: 0;
  z-index: -2;
  filter: drop-shadow(0 0 0.3rem rgb(0, 0, 0));

} */



/* 
@media screen and (min-width:768px) {
  .imgbg .table-img {
    min-width: 533px;
    width: 517px;
    max-width: 100%;
  }
}
@media screen and (min-width:931px) {
  .imgbg .table-img {
    min-width: 593px;
    width: 517px;
    max-width: 100%;
  }
}

@media screen and (min-width: 1093px) {
  .imgbg .table-img {
    min-width: 700px;
    width: 50%;
    max-width: 1035px;

  }
} */
</style>
