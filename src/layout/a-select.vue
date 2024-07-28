<template>
  <div class="a-select">
    <h3 class="font-bold">{{title}}</h3>
    <div class="title"
         @click="areOptionsVisible = !areOptionsVisible"
    >
      <p>{{selected}}</p>
      <i class="material-symbols-outlined">swap_vert</i>
    </div>

    <div
        class="options"
        v-if="areOptionsVisible"
    >
      <p
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          class="categories-name"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'a-select',
  props:{
    options: {
      type: Array,
      default(){
        return []
      }
    },
    selected:{
      type: String,
      default: ''
    },
    title:{
      type: String,
      default: ''
    }
  },
  data(){
    return{
      areOptionsVisible: false
    }
  },
  computed:{

  },
  methods:{
    selectOption(option){
      this.$emit('select', option)
      this.areOptionsVisible = false
    },
    hideSelect(){
      this.areOptionsVisible = false
    }
  },
  mounted() {
    document.addEventListener('click',this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style lang="scss">
.a-select{
  position: relative;
  width: 300px;
  margin-bottom: 100px;
}
.a-select p{
  margin: 0;
}
.options{
  border: solid 1px #eaeaea;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  background: #f6f7fa;
  padding-top: 10px;
  padding-bottom: 8px;
  z-index: 20;
}
.title{
  border: solid 1px #eaeaea;
  cursor: pointer;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
}

.options p:hover{
  background-color: #e7e7e7;
  cursor: pointer;
}
.categories-name{
  font-size: 18px;
  padding-left: 15px;
  padding-bottom: 8px;
}
</style>