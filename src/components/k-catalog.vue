<template>
  <div class="k-catalog">
    <div class="catalog-list">
      <k-catalog-item
          v-for="film in FILMS"
          v-bind:films_docs="film"
          @filmInfo="filmInfoCart"
      />
    </div>
    <div class="pageClicker">
    <span
        @click="page=1"
    >
      1
    </span>
    <span @click="page=2">
      2
    </span>
    <span @click="page=3">
      3
    </span>
  </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import kCatalogItem from './k-catalog-item.vue'
import aSwiper from '/src/layout/a-swiper.vue'
import aSelect from "@/layout/a-select.vue";
export default {
  data(){
    return{
      page: 1,
      totalPage:0
    }
  },
  components: {kCatalogItem, aSwiper},
  name:'k-catalog',
  computed:{
  ...mapGetters(['FILMS'])
  },
  methods: {
    sortedByCategories(category){
    this.selected = category.name
    },
    ...mapActions(['GET_PRODUCTS_FROM_API','GET_PAGE_VALUE','SET_CATEGORIES_TO_API']),
    search(){
  this.GET_PAGE_VALUE(this.page)
},
    filmInfoCart(filmId){
      this.$router.push({name: 'filmInfo', query:{'filmInfo': filmId}})
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()

  },
  watch:{
  page(){
    this.search()
    this.GET_PRODUCTS_FROM_API()
  },
    selected(){
      this.SET_CATEGORIES_TO_API(this.selected.toLowerCase())
    }
  }
}
</script>

<style lang="scss">
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
</style>