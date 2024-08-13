<template>
  <div class="k-film-info">



    <h1 class="k-film-info__name">{{  films.nameRu}}</h1>
    <div class="cart-item">
      <img
          class="k-film-info--img"
          :src="`${films.posterUrl}`"
      >
      <div>
      <h3>О ФИЛЬМЕ</h3>
        <div >
            <p
            >Жанр: {{joinedValues}}</p>

          <p>Рейтинг: {{films.rating}}</p>
          <p>Год: {{films.year}}</p>
          <a :href="`https://www.kinopoisk.ru/film/${films.filmId}/`" target="_blank">Больше информации</a>
        </div>
      </div>

    </div>
    <router-link to="/catalog">
      <i class="material-symbols-outlined" >
      arrow_back
    </i></router-link>



  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import aSelect from '/src/layout/a-select.vue'
export default {
  components:{
    aSelect
  },
  data(){
    return{

    }
  },
computed:{
  ...mapGetters(['FILMS']),
  films(){
    let result = {}
    let vm = this
    this.FILMS.map(item=>{
      if(item.filmId == vm.$route.query.filmInfo){
        result= item
      }
    console.log(item)
    })
    return result
  },
  joinedValues() {
    let valueArray = []
    let vm = this
    this.FILMS.map(i=>{
      if(i.filmId == vm.$route.query.filmInfo){
         i.genres.map(item=> {
           valueArray.push(item.genre)

        })

      }

    })
    console.log(valueArray)
    return valueArray.join(', ');

  },

},
  methods:{
  ...mapActions(['GET_PRODUCTS_FROM_API']),
    lolo(){
    console.log()
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    this.lolo()
  }
}
</script>

<style lang="scss" scoped>

.material-symbols-outlined{
  position: absolute;
  top: 10px;
  left: 10px;
}

a{
  color: #2c2d3a;
}
.k-film-info{
  padding: 50px;
  position: relative;
  box-shadow: 0 0 5px 0 #2c2d3a;
}
.k-film-info__name{
  text-align: center;
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 2rem;
}
.k-film-info--img{
  max-height: 500px;
}
.cart-item{
  display: flex;
  justify-content: space-between;
  width: 900px;
}
.lolo{
  display: flex;
  flex-direction: column;
}
</style>