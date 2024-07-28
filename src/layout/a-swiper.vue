<template>
  <div class="swiper-container">

    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img :src="`${FILMS.posterUrl}`" alt="Movie Poster">
        <h3>{{ FILMS.nameRu }}</h3>
      </div>
    </div>
    <!-- Добавьте пагинацию и навигацию, если необходимо -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import {mapGetters,mapActions} from "vuex";

export default {

  data() {
    return {
      movies: {
        type: Object,
        default(){
          return{}
      }, // ваш массив фильмов, полученных через API
    },

  }},
  mounted() {
    this.initSwiper();
    console.log(this.movies);
    this.GET_PRODUCTS_FROM_API();
  },
  computed:{
  ...mapGetters(['FILMS'])
  },

  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API']),
    initSwiper() {
      new Swiper('.swiper-container', {
        // Параметры Swiper
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
}

.swiper-slide img {
  max-width: 100%;
  max-height: 100%;
}
</style>