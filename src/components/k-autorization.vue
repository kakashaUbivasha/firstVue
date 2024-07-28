<template>
  <div class="k-autorization">
    <div class="autorization--form">
      <h3>Авторизация</h3>
      <form class="reg--area">
        <label for="fName">Имя:</label>
        <input v-model="name" class="reg--input" type="text" id="fName" placeholder="Введите имя">
        <label for="fPassword">Пароль:</label>
        <input v-model="password" class="reg--input" type="password" id="fPassword" placeholder="Введите пароль">
        <button class="btn-to-form">Войти</button>
      </form>
      <h3>Нет аккаунта? <router-link to="/register">Зарегистрироваться</router-link></h3>
    </div></div>

</template>

<script>
export default {
  data(){
    return{
      name: '',
      password: ''
    }
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
.autorization--form{
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
</style>