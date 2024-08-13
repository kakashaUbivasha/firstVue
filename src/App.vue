<template>
  <div id="app" class="v-main-wrapper">
    <a-header></a-header>
    <welcome-modal/>
    <a-footer></a-footer>
    <router-view/>

  </div>
</template>


<script>

import aHeader from "@/layout/a-header.vue";
import aFooter from "@/layout/a-footer.vue";
import welcomeModal from "@/components/welcome-modal.vue";
export default {
components:{
  aFooter, aHeader,welcomeModal
},
}
</script>
<style lang="scss" scoped>
.v-main-wrapper{
  max-width: 1200px;
  margin: 0 auto;
  display: block;
}
</style>
