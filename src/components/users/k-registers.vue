<template>
  <div class="k-registers">

    <div class="registers--form">
    <h3>Зарегистрироваться</h3>
   <form
       @submit.prevent="registers"
       class="reg--area"
   >
    <label for="fName">Имя:</label>
    <input
        v-model="register_user.name"
        class="reg--input"
        type="text"
        id="fName"
        placeholder="Введите имя сюда"
    >
    <label for="fPassword">Пароль:</label>
    <input
        v-model="register_user.password"
        class="reg--input"
        type="password"
        id="fPassword"
        placeholder="Введите пароль сюда"
    >
     <label for="fMail">Mail:</label>
     <input
         v-model="register_user.email"
         class="reg--input"
         type="email"
         id="fMail"
         placeholder="Введите mail сюда"
     >
     <label for="fPhone">Phone:</label>
     <input
         v-model="register_user.phone"
         class="reg--input"
         type="phone"
         id="fPhone"
         placeholder="Введите номер телефона"
     >
<!--    <label for="sPassword">Повторите пароль:</label>-->
<!--    <input v-model="password2" v-if="isRepeat" class="reg&#45;&#45;input" type="password" id="sPassword" placeholder="Введите пароль повторно сюда">-->
    <button
        type="submit"
        class="btn-to-form"
    >Зарегистрироваться</button>
   </form>
    <h3 class="link-to-autorization">Есть аккаунт? <router-link to="/autorization">Войти</router-link></h3>
  </div>
  </div>
</template>

<script>
import aSearch from '/src/layout/a-search.vue'
import {mapGetters,mapActions} from "vuex";

export default {
data(){
  return{
    register_user: {
    name:'',
    password:'',
    phone:'',
    email:''

    },
    // password2: '',
    // isRepeat: true
  }
},
  computed:{
  ...mapGetters(['FILMS'])
  },
  components:{
  aSearch
},
  methods:{
  ...mapActions(['GET_PRODUCTS_FROM_API','POST_REGISTER']),
    registers(){
      this.POST_REGISTER(this.register_user);
    }
  },

  mounted() {
  }
}
</script>

<style lang="scss" scoped>
*, *:before, *:after {
  box-sizing: border-box;
  font-family: Roboto;
  margin: 0;

}
.k-registers{

}
.backgroundColor{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
}
.registers--form{
  position: relative;
  z-index: 5;
  box-shadow: 0 0 8px 0 #bbbbbb;
  min-width: 400px;
  min-height: 450px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 1.5rem;

}
.reg--area{
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 1.25rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

}
.reg--input{
  width: 100%;
  margin-bottom: 20px;
  padding: 8px 0 10px 8px;
  border-radius: 10px;
  border: 1px #eaeaea solid;
}
.reg--input:focus{
  outline: none;
}
h3{
  font-weight: bold;
}
a{
  color: #7d30ea;
}
.btn-to-form{
  border: none;
  background: none;
  cursor: pointer;
  font-size: 15px;
}
.link-to-autorization{
  padding-bottom: 20px;
}
</style>