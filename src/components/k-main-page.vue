<template>
  <div class="k-main-page ">
    <h3 class="k-main-page__title">
      Свежие новинки!
    </h3>
    <div class="swiper_users__setting select-none">
    <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
      delay: 4500,
      disableOnInteraction: false,
    }"
        :pagination="{
      clickable: false,
    }"
        :navigation="false"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide  v-for="film in TREND_FILMS">
        <a class="my-swiper-slide" :href="`https://www.kinopoisk.ru/film/${film.kinopoiskId}/`" target="_blank">
        <img class="k-main-page--img" :src="`${film.posterUrl}`" alt="">
        <p class="k-main-page--text" >{{film.nameRu}}</p>
        </a>
      </swiper-slide>
    </swiper>
  </div>


  </div>
</template>

<script >
import kCatalog from './top-films/k-catalog.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import {mapActions, mapGetters} from "vuex";
export default {
  name: 'k-main-page',
  components: {kCatalog,Swiper,SwiperSlide},
  setup() {
    return {
      modules: [Autoplay,],
    };
  },
  computed:{
    ...mapGetters(['TREND_FILMS']),
  },
  methods:{
    ...mapActions(['GET_TREND_FILMS'])
  },
data(){
  return{
    backgroundImageUrl: ''
  }
},
  watch:{
  },
  mounted() {
    this.GET_TREND_FILMS()
  }
}
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;

}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.my-swiper-slide{
  box-shadow: 0 0 5px 0 #2c2d3a;
  padding-bottom: 12px;

}
.swiper-button-next::after{
  content: '';
}
.swiper-button-prev:after{
  content: '';
}
.swiper_users__setting{

}
.k-main-page--img__slider{
  max-width: 200px;
}
.k-main-page--text{

  color: black;
  font-weight: 700;


}
.k-main-page--img {
  max-width: 100%; /* Изображение должно масштабироваться в пределах контейнера */
  height: 600px; /* Поддержание пропорций изображения */
}
.k-main-page__title{
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  margin-bottom: 20px;
}
@media (max-width: 1024px) {
  .k-main-page{
    margin-top: 25%;
  }
}
@media (max-width: 550px){
  .k-main-page--img{
    height: 400px;
  }
  .k-main-page{
    margin-top: 50%;
  }
}
</style>