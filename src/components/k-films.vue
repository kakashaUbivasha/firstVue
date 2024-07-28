<template>
  <div class="k-films">

    <p class="font-bold">привет мир</p>



    <h1  style="margin-bottom: 20px; text-align: center">Фильмы</h1>
    <a-select
        :title="genres"
        :options = 'categories'
        @select="sortedByCategories"
        :selected = selected
        class="a-select"
    />
    <a-select
        :title="yearsTitle"
        :options = 'years'
        @select="sortedByYears"
        :selected = selectedYear
        class="select-year"
    />
    <div class="k-films-list">
    <k-serials-item
    v-for="film in GET_FILMS"
    :films_docs = film
    />
    </div>

    <div class="mt-5 !important ">
      <paginate
          v-model="page"
          @click="reworkPage()"
          :next-text="'>'"
          :prev-text="'<'"
          :page-range="2"
          :margin-pages="2"
          :page-count="totalPage"

          :container-class="'flex items-center !important'"
          :page-class="'paginate_button !important  p-2 !important rounded-lg!important border border-light_purple mx-1 h-8 w-8 cursor-pointer flex items-center justify-center bg-light_purple text-white'"
      />
    </div>
  </div>
</template>

<script>
import aSelect from "@/layout/a-select.vue";
import kSerialsItem from '@/components/k-serials-item.vue'
import {mapActions, mapGetters} from "vuex";
import aPage from '@/layout/a-page.vue'
import Paginate from "vuejs-paginate-next";

export default {
  components: {aSelect, kSerialsItem,aPage,Paginate},
  data(){
    return{
      page: 1,
      totalPage: 12,
      categories: [
        {name:'Драма', value:'dr'},
        {name:'Комедия', value:'cm'},
        {name:'Криминал', value:'cm'},
        {name:'Аниме', value:'cm'},
        {name:'Мелодрама', value:'cm'},
      ],
      selected: 'Выберите жанр',
      genres: 'Жанры',
      yearsTitle: 'Год выхода',
      years: [
        {name:'2023', value:'1'},
        {name:'2022', value:'2'},
        {name:'2021', value:'3'},
        {name:'2020', value:'4'},
        {name:'2019', value:'5'},
      ],
      selectedYear: 'Выберите год'
    }
  },
  methods:{
    changeNumber(pageNumber){
      this.page=pageNumber
    },
    sortedByCategories(category){
      this.selected = category.name
    },
    sortedByYears(year){
      this.selectedYear = year.name
    },
    ...mapActions(['SET_CATEGORIES_TO_API','GET_FILMS_FROM_API','SET_YEARS_TO_API','GET_PAGE_VALUE']),
    reworkPage(){
      this.GET_PAGE_VALUE(this.page)
    }
  },
  computed:{
    ...mapGetters(['GET_FILMS'])
  },
  watch:{
    selected(){
      this.SET_CATEGORIES_TO_API(this.selected.toLowerCase())
      this.GET_FILMS_FROM_API()
    },
    selectedYear(){
      this.SET_YEARS_TO_API(this.selectedYear)
      this.GET_FILMS_FROM_API(this.selected)
    },
    page(){
      this.reworkPage()
      this.GET_FILMS_FROM_API(this.selected)
    }
  },
  mounted() {
    this.selected = 'Выберите жанр'
    this.page=1
    this.reworkPage()
    this.selectedYear='Выберите год'
    this.GET_FILMS_FROM_API(this.selected)
  }
}
</script>

<style lang="scss">
.a-select{
  z-index: 20;
  position: absolute;
  top: 200px;
  right: 100px;
}
.k-films-list{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 60px;
}
.k-films{
  margin-top: 60px;
  margin-bottom: 60px;
}
.select-year{
  position: absolute;
  top: 300px;
  z-index: 10;
}
</style>