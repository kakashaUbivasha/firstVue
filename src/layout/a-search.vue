<template>
  <div class="a-search">
    <div class="search-filed">
      <input
          class="a-header__input"
          placeholder="Введите название фильма"
          type="text"
          v-model="searchItem"
          @click="trandFound"
          @keyup.enter="search(searchItem)"
      >

      <div
          v-if="isDown"
          class="dawn__list"
      >
        <h4>В тренде</h4>
        <ul>

        <li class="dawn__list-li" v-for="top_film in TOP_FILMS" :key="top_film.id">
          <a target="_blank" :href="`https://www.kinopoisk.ru/series/${top_film.id}/`"><img class="dawn__list--img" :src="`${top_film.poster.url}`" alt=""></a>
          <a target="_blank" class="a--text"  :href="`https://www.kinopoisk.ru/series/${top_film.id}/`"><p class="dawn__list--title">{{top_film.name}}</p></a>
        </li>

      </ul>
      </div>

      <button class="search-button" >
        <i class="material-symbols-outlined" @click="search(searchItem)"> search</i>
      </button>
    </div>
  </div>

</template>

<script>
import {mapActions,mapGetters} from "vuex";
import axios from "axios";
export default {

data(){
  return{
    searchItem: '',
    isDown: false,
    searchResults: []
  }
},
  watch:{
  },
  computed:{
  ...mapGetters(['TOP_FILMS','SEARCH_ITEM','SEARCH_FILMS'])
  },
  methods:{
  ...mapActions(['GET_TOP_FILMS_FROM_API','GET_SEARCH_FILMS','GET_SEARCH_VALUE']),
    hideSelect(){
      this.isDown = false
    },
    search(value){
      this.GET_SEARCH_FILMS(value)
      this.GET_SEARCH_VALUE()
      let id = Date.now()
      this.$router.push({name: 'filmSearch', query:{'filmSearch': id}})

    },
    trandFound(){
    this.isDown = !this.isDown
      this.GET_TOP_FILMS_FROM_API()
    }
  },

  mounted() {


    document.addEventListener('click',this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style lang="scss" scoped>
h4{
  font-weight: 500;
  font-size: 18px;
}

.search-filed{
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  right: 200px;
}
.search-button{
  position: absolute;
  right: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
}
.a-header__input{
  background: white;
  outline: none;
  width: 600px;
  border: none;
}
.a-search{
  position: relative;
}
.dawn__list{
  top: 70px;
  width: 468px;
  background: #717179;
  position: absolute;
  z-index: 15;
  margin: 0;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px 0 20px 0;
  border-radius: 15px;
  white-space: nowrap;
  overflow: hidden;

}
.dawn__list-li{
  display: flex;
  text-align: center;
  margin-left: -30px;


}
.dawn__list--img{
  width: 32px;
  height: 48px;
  margin: 10px 0 0 0;
}
.dawn__list--title{
  text-align: center;
  margin-top: 20px;
  margin-left: 10px;
}
.a--text{
  color: inherit;
  padding-right: 100%;
}
.dawn__list-li:hover{
  background: rgba(255, 255, 255, .2);
}

</style>