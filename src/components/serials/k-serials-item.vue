<template>
  <div>
    <div class="k-serial-item" >
      <a :href="`https://www.kinopoisk.ru/film/${films_docs.id}/`" target="_blank">
      <div class="cart-item">
        <img
            class="k-serials-item--img"
            src="/public/favicon.ico"
            @click="filmInfo"
        >
        <p class="v-catalog-item__name">{{  films_docs.name}}</p>
      </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'k-serial-item',
  props:{
    films_docs:{
      type: Object,
      default(){
        return{}
      }

    }
  },
  methods:{
    filmInfo(){
      this.$emit('filmInfo', this.films_docs.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.k-serial-item{
  margin: 0;
  padding: 0;
  max-width: 200px;
  gap: 20px;
}
.k-serials-item--img{
  display: grid;
  gap: 20px;
  width: 250px;
  height: 400px;
}
@media (max-width: 800px){
  .cart-item{
    width: 160px;
  }
}

</style>