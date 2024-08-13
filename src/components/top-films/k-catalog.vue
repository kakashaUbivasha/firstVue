<template>
  <div class="k-catalog" v-if="!IS_LOADING">
    <h1 class="items-center justify-center flex m-10 font-bold text-4xl text-inherit title">ТОП 250 ФИЛЬМОВ</h1>
    <div class="catalog-list">

      <k-catalog-item
          v-for="film in FILMS"
          v-bind:films_docs="film"
          @filmInfo="filmInfoCart"
          class="cursor-pointer"
      />
    </div>
    <div class="mt-5 flex mx-auto paginate">
      <paginate
          v-model="page"
          @click="reworkPage()"
          :next-text="nextText"
          :prev-text="prevText"
          :page-range="3"
          :margin-pages="2"
          :page-count="totalPage"
          :container-class="'flex items-center p-2'"
          :page-class="'paginate_button text-black rounded-lg border border-light_purple mx-1 h-8 w-8 cursor-pointer flex items-center justify-center '"
      />
    </div>
  </div>
  <div v-else>
    <loading/>
    <div class="mt-[200px] text-center uppercase font-bold text-3xl">
      загрузка
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import kCatalogItem from './k-catalog-item.vue'
import aSwiper from '/src/layout/a-swiper.vue'
import aSelect from "@/layout/a-select.vue";
import Paginate from "vuejs-paginate-next";
import Loading from "@/layout/loading.vue";
export default {
  data(){
    return{
      page: 1,
      totalPage:13,
      nextText: `<span class="material-symbols-outlined cursor-pointer">
arrow_forward_ios
</span>`,
      prevText:`<span class="material-symbols-outlined cursor-pointer">
arrow_back_ios_new
</span>`,
    }
  },
  components: {Loading, Paginate, kCatalogItem, aSwiper},
  name:'k-catalog',
  computed:{
  ...mapGetters(['FILMS','IS_LOADING'])
  },
  methods: {
    reworkPage(){
      this.GET_PAGE_VALUE(this.page)
    },
    sortedByCategories(category){
    this.selected = category.name
    },
    ...mapActions(['GET_PRODUCTS_FROM_API','GET_PAGE_VALUE','SET_CATEGORIES_TO_API']),
    filmInfoCart(filmId){
      this.$router.push({name: 'filmInfo', query:{'filmInfo': filmId}})
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    this.page=1
    this.reworkPage()
  },
  watch:{
  page(){
    this.reworkPage()
    this.GET_PRODUCTS_FROM_API()
  },
    selected(){
      this.SET_CATEGORIES_TO_API(this.selected.toLowerCase())
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog-list{
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4,1fr);
}
.k-catalog{
  margin: 0 auto;
  padding-top: 40px;
}
.pageClicker{
  text-align: center;
  margin: 20px 0 20px 0;
}
@media (max-width: 1000px) {
  .catalog-list{
    grid-template-columns: repeat(2, 1fr);
    margin-left: 5em;
  }
  .paginate{
    margin-left: 5em;
  }
}
@media (max-width: 650px) {
  .catalog-list{
    grid-template-columns: repeat(1, 1fr);
    margin-left: 10em;
  }
  .paginate{
    margin-left: 6em;
  }
}
@media (max-width: 560px){
 .title{
   font-size: 25px !important;;
 }
  .catalog-list{
    margin-left: 5em;
  }
  .paginate{
    margin-left: 1em;
  }
}
</style>