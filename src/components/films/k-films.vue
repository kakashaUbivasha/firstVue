<template>
  <div class="k-films" v-if="!IS_LOADING">
    <h1 class="font-bold text-4xl title"  style="margin-bottom: 20px; text-align: center">Фильмы</h1>
    <div class="a-selects">
      <a-select
          :title="genres"
          :options = 'categories'
          @select="sortedByCategories"
          :selected = selected
      />
      <a-select
          :title="yearsTitle"
          :options = 'years'
          @select="sortedByYears"
          :selected = selectedYear
      />
    </div>

    <div class="k-films-list">
    <k-serials-item
    v-for="film in GET_FILMS"
    :films_docs = film
    />


    </div>

    <div class="mt-5 flex paginate wphone">
      <paginate
          v-model="page"
          @click="reworkPage()"
          :next-text="nextText"
          :prev-text="prevText"
          :page-range="3"
          :margin-pages="5"
          :page-count="totalPage"
          :container-class="'flex items-center'"
          :page-class="'paginate_button text-black  p-2 rounded-lg border border-light_purple mx-1 h-8 w-6 cursor-pointer flex items-center justify-center '"
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
import aSelect from "@/layout/a-select.vue";
import kSerialsItem from '@/components/serials/k-serials-item.vue'
import {mapActions, mapGetters} from "vuex";
import aPage from '@/layout/a-page.vue'
import Paginate from "vuejs-paginate-next";
import Loading from "@/layout/loading.vue";

export default {
  components: {aSelect, kSerialsItem,aPage,Paginate,Loading},
  data(){
    return{
      nextText: `<span class="material-symbols-outlined cursor-pointer">
arrow_forward_ios
</span>`,
      prevText:`<span class="material-symbols-outlined cursor-pointer">
arrow_back_ios_new
</span>`,
      page: 1,
      totalPage: 5,
      categories: [
        { name: 'Всё', value: 'Всё', value1: '' },
        { name: 'Драма', value: 'Драма', value1: '8' },
        { name: 'Комедия', value: 'Комедия', value1: '6' },
        { name: 'Криминал', value: 'Криминал', value1: '3' },
        { name: 'Мелодрама', value: 'Мелодрама', value1: '4' }
      ],
      selected: 'Выберите жанр',
      selected1: '',
      genres: 'Жанры',
      yearsTitle: 'Год выхода',
      years: [
        {name:'2023', value:'1'},
        {name:'2022', value:'2'},
        {name:'2021', value:'3'},
        {name:'2020', value:'4'},
        {name:'2019', value:'5'},
      ],
      selectedYear: 'Выберите год',
      isLoading: false,
    }
  },
  methods:{
    changeNumber(pageNumber){
      this.page=pageNumber
    },
    sortedByCategories(category){
      this.selected = category.value
      this.selected1 = category.value1
    },
    sortedByYears(year){
      this.selectedYear = year.name
    },
    ...mapActions(['SET_CATEGORIES_TO_API','GET_FILMS_FROM_API','SET_YEARS_TO_API','GET_PAGE_VALUE','GET_LOADING_STATUS']),
    reworkPage(){
      this.GET_PAGE_VALUE(this.page)
    }
  },
  computed:{
    ...mapGetters(['GET_FILMS','IS_LOADING','ALL_PAGES'])
  },
  watch:{
    selected1(){
      this.SET_CATEGORIES_TO_API(this.selected1.toLowerCase())
      this.GET_FILMS_FROM_API(this.selected1.toLowerCase())

    },
    selectedYear(){
      this.SET_YEARS_TO_API(this.selectedYear)
      this.GET_FILMS_FROM_API(this.selected1)
    },
    page(){
      this.reworkPage()
      this.GET_FILMS_FROM_API(this.selected1)
    },
    ALL_PAGES(){
      this.totalPage = this.ALL_PAGES
    }
  },
  mounted() {

    this.selected = 'Выберите жанр'
    this.page=1
    this.reworkPage()
    this.selectedYear='Выберите год'
    this.GET_FILMS_FROM_API(this.selected1)
  }
}
</script>

<style lang="scss" scoped>
.a-selects{
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 1em;
  width: 200px;
}
.k-films-list{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 5em;
}
.k-films{
  margin-top: 60px;
  margin-bottom: 60px;
}

.active{
  background: #181818;
  color: white;
}
@media (max-width: 1300px) {
  .a-select{
    width: 200px;
    right: 1em;
  }
}
@media(max-width: 1026px){
  .k-films-list{
    gap: 1em;
  }
}
@media (max-width: 900px) {
  .a-selects{
    right: 1em;
    margin-right: 0;
  }
}
@media (max-width: 650px){
  .k-films-list{
    margin-left: 25%;
    grid-template-columns: repeat(1,1fr);
    gap: 5em;
  }

}
@media (max-width: 500px){
  .a-selects{
    top: 7em;
    display: flex;
    flex-direction: row;
    left: 0;
  }
  .k-films-list{
    margin-top: 50px;
  }
  .title{
    margin-top: 50%;
  }
}
  @media (max-width: 390px) {
    .a-select{
      right: 30px;
    }
    .title{
      margin-top: 70%;
    }
  }

</style>