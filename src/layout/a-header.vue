<template xmlns="http://www.w3.org/1999/html">
  <div class="a-header">
    <div class="burger-menu">

      <button @click="toggleMenu" class="burger-button" :class="{ 'opening': menuOpen }">
        <i
                      class="material-symbols-outlined menu"
                      v-if="!menuOpen"
                      key="menu"
                  >menu</i>
                    <i
                        class="material-symbols-outlined clear"
                        v-else
                        key="clear"
                    >clear</i>
      </button>
      <transition name="fade">
        <div v-if="menuOpen" class="overlay" @click="closeMenu"></div>
      </transition>
      <transition name="fade">
        <div v-if="menuOpen" class="menu-overlay">
          <div class="menu-list">
            <!-- Ваш список меню здесь -->
            <ul class="header_list">
              <li @click="menuOpen=!menuOpen" class="header-menu-li">
                <router-link to="/">
                  Домой
                </router-link>
              </li>
              <li @click="menuOpen=!menuOpen" class="header-menu-li">
                <router-link to="/films">
                Фильмы
              </router-link>
              </li>
              <li @click="menuOpen=!menuOpen" class="header-menu-li">
                <router-link to="/serials">
                  Сериалы
                </router-link>
              </li>
              <li @click="menuOpen=!menuOpen" class="header-menu-li">
                <router-link to="/catalog">
                  Топ 100
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>


<div class="another">

  <a-search/>
  <router-link class="autorization--btn--header" to="/autorization">
    <button
        class="cancel-button"
    >
      <i class="material-symbols-outlined" >person</i>
    </button>
  </router-link>
</div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {mapActions} from "vuex";
import aSearch from '/src/layout/a-search.vue'

export default {
  props:{
    results: ['Результат 1', 'Результат 2', 'Результат 3']
  },
components:{aSearch},
  data(){
    return{
      searchItem: '',
      showDropdown: false,
      menuOpen: false,
      items: [
        'home',
        'home',
        'home',
        'home',
      ]
    }
  },
  methods:{
    ...mapActions(
        ['GET_SEARCH_VALUE']
    ),
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    },
  computed:{
    ...mapGetters(['SEARCH_ITEM']),
  },
  mounted() {

  },
  beforeDestroy() {
  }
}
</script>

<style lang="scss">
.a-header{
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to left, #a3d8f4, #006400);
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  right: 100px;
  color: white;
  img{
    width: 50px;
  }


  .cancel-button{
    background: transparent;
    margin-left: 16px;
    border: none;
    cursor: pointer;
    text-align: center;
  }
}
.a-header__logo{
  max-width: 50px;
}
.a-header__input{
  padding: 8px 0 8px 16px;
  background: transparent;
  border: 1px solid black;
  border-radius: 15px;
  min-width: 300px;
  text-align: left;
  line-height: 2em;
}

.a-header__input::placeholder{
  color: #aeaeae;
  font-family: Roboto;
  font-size: 20px;
}
.another{
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
}
.autorization--btn--header{
  display: flex;
  justify-content: center;
  align-items: center;
}
.autorization--btn--header:hover{
  outline: none;
  background: transparent;
}
a{
  color: inherit;
  font-weight: 700;
}
.header_list{
  display: flex;
  flex-direction: column;
  font-size: 30px;
  list-style-type: none;
  justify-content: space-between;
  gap: 20px;
}
.burger-menu {
  position: relative;
}

.burger-button {
  cursor: pointer;
  transition: right 0.5s;
  background: transparent;
  border: none;
  z-index: 3;
  pointer-events: auto;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.clear{
  position: absolute;
  font-size: 70px;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 400px;
  background: #717179;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 20px;
}
.header-menu-li:hover{

  padding: 15px;
}
.opening {
  position: absolute;
  top: -50px;
  left: 380px;
  background: transparent;
}
.opening:active,
.opening:focus{
  background: transparent;
  border: none;
  outline: none;
}
.menu-list {
  width: 100%;
  padding: 20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}



</style>