<template>

  <div class="k-film-search" v-for="film in SEARCH_FILMS">
    <a :href="`https://www.kinopoisk.ru/film/${film.filmId}/`" target="_blank">
    <div class="k-film-search--item">
    <img class="k-film-search--img" :src="`${film.posterUrl}`" alt="film image">
    <div class="k-film-search--info">
    <h1><span v-if="film.nameRu">{{`${film.nameRu}`}}</span> {{film.nameEn}}</h1>
      <div class="more__info">
    <p>Рейтинг: {{film.rating}}</p>
    <p>Год выхода: {{film.year}}</p>
        <div class="lolo1">
          <p>Жанр:</p>
        <div
            v-for="genre in film.genres"
        >
      <p
          v-for="genreName in genre"
      >{{genreName}}</p></div></div>
      <a :href="`https://www.kinopoisk.ru/film/${film.filmId}/`" target="_blank">Больше информации</a>
      </div>
    </div>

  </div>
    <p>{{film.description}}</p>
    </a>
  </div>

  <div v-if="!SEARCH_FILMS.length" class="">
    <p class="error_message">Ошибка! Проверьте корректность введённого названия!)</p>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
computed:{
  ...mapGetters(['SEARCH_FILMS']),


},
methods:{

},


mounted() {
  console.log(this.SEARCH_FILMS.length)

}

}
</script>

<style lang="scss" scoped>
.k-film-search{
  font-family: Roboto;
  padding: 5px;
  box-shadow: 0 0 8px 0 #006400;
  margin-bottom: 20px;
  margin-top: 50px;
}
.k-film-search--item{
  width: 900px;
  display: flex;
  gap: 238px;

}
.k-film-search--img{
  width: 200px;

}
.more__info{
  display: flex;
  flex-direction: column;
  justify-content: left;
}
.error_message{
  font-size: 30px;
  font-family: Roboto;
}
.lolo1{
  display: flex;
  gap: 5px;
}
.lolo2{
  display: flex;
  flex-direction: column;
}
</style>