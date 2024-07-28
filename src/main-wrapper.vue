<template>
  <div class="v-main-wrapper">
    <router-view/>
  <a-header></a-header>
    <a-footer></a-footer>
  </div>
</template>

<script>
import aHeader from './layout/a-header.vue'
import aFooter from './layout/a-footer.vue'
export default {
  name: 'main-wrapper',
  components:{aHeader,aFooter},
}
</script>

<style lang="scss">
.v-main-wrapper{
  max-width: 1200px;
  margin: 0 auto;
  display: block;
}
</style>