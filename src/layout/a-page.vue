<template>
  <div class="a-page">
  <div
      class="page"
      v-for="pageNumber in totalPage"
      :key="pageNumber"
      :class="{
        'current_page': page===pageNumber
      }"
      @click="changeNumber(pageNumber)"
  >{{pageNumber}}</div>
  </div>
<!--  <div class="mt-5">-->
<!--    <paginate-->
<!--    class="page"-->
<!--      v-for="pageNumber in totalPage"-->
<!--      :key="pageNumber"-->
<!--      :class="{-->
<!--        'current_page': page===pageNumber-->
<!--      }"-->
<!--        @click=changeNumber(pageNumber)-->
<!--        :next-text="'>'"-->
<!--        :prev-text="'<'"-->
<!--        :page-range="1"-->
<!--        :margin-pages="1"-->
<!--        :page-count="totalPage"-->
<!--    :container-class="'flex!important items-center'"-->
<!--    :page-class="'paginate_button p-2 rounded-lg border border-light_purple mx-1 h-8 w-8 cursor-pointer flex items-center justify-center bg-light_purple text-white'"-->
<!--    />-->
<!--  </div>-->
</template>

<script>
import {mapActions} from "vuex";
import Paginate from "vuejs-paginate-next";
import '@/assets/base.css'
export default {
  props:{
    page: {
      type: Number,
      default: 1
    },
    totalPage:{
      type: Number,
      default: 0
    }
  },
  methods:{
    changeNumber(pageNumber){
    this.$emit('changeNumber',pageNumber)
    },
  },
components:{Paginate},
}
</script>

<style lang="scss">
.a-page{
  display: flex;
  margin-top: 15px;
  margin-right: 100px;
}
.page{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  border-radius: 8px;
  transition: background-color .1s ease;
}
.current_page{
  color: #fff;
  background: #1f1f1f;
}
</style>