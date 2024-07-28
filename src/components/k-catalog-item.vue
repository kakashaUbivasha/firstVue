<template>
  <div>
    <div class="k-catalog-item" >
      <div class="cart-item">
      <img
          class="v-catalog-item--img"
          :src="`${films_docs.posterUrl}`"
          @click="filmInfo"
      >
      <p class="v-catalog-item__name">{{  films_docs.nameRu}}</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'k-catalog-item',
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
  this.$emit('filmInfo', this.films_docs.filmId)
  }
}
}
</script>

<style lang="scss">
.k-catalog-item{
  margin: 0;
  padding: 0;
  max-width: 200px;
}
.v-catalog-item--img{
  width: 200px;
  min-height: 500px;
}
.cart-item{

}

</style>