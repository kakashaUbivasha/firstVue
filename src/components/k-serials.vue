<template>
  <div class="k-serials">
    <h1 style="margin-bottom: 20px; text-align: center">Сериалы</h1>
    <a-select
        :title="genres"
        :options = 'categories'
        @select="sortedByCategories"
        :selected = selected
        class="v-select"
    />
    <a-select
        :title="yearsTitle"
        :options = 'years'
        @select="sortedByYears"
        :selected = selectedYear
        class="select-year"
    />
    <div class="k-serials-list">
  <k-serials-item
  v-for="serial in SERIALS"
  :films_docs="serial"
  />
    </div>
    <a-page
        :page="page"
        :total-page="totalPage"
        @changeNumber="changeNumber"
    />
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import kSerialsItem from "@/components/k-serials-item.vue";
import aSelect from '@/layout/a-select.vue'
import aPage from "@/layout/a-page.vue";
export default {
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
  components: {aPage, kSerialsItem,aSelect},
  computed:{
    ...mapGetters(['SERIALS'])
  },
  methods:{
    changeNumber(pageNumber){
      this.page=pageNumber
    },
    reworkPage(){
      this.GET_PAGE_VALUE(this.page)
    },
    sortedByCategories(category){
      this.selected = category.name
    },
    sortedByYears(year){
      this.selectedYear = year.name
    },
    ...mapActions(['GET_SERIALS','SET_CATEGORIES_TO_API','SET_YEARS_TO_API','GET_PAGE_VALUE'])
  },
  watch:{
  selected(){
    this.SET_CATEGORIES_TO_API(this.selected.toLowerCase())
    this.GET_SERIALS()
  },
    selectedYear(){
      this.SET_YEARS_TO_API(this.selectedYear)
      this.GET_SERIALS(this.selected)
    },
    page(){
      this.reworkPage()
      this.GET_SERIALS(this.selected)
    }
  },
  mounted() {
    this.selected = 'Выберите жанр'
    this.selectedYear='Выберите год'
    this.page=1
    this.reworkPage()
    this.GET_SERIALS(this.selected)
  }
}
</script>

<style lang="scss" scoped>
.k-serials-list{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 60px;
}
.k-serials{
  margin-top: 60px;
}
.v-select{
  z-index: 20;
  position: absolute;
  top: 200px;
  right: 100px;
}


</style>