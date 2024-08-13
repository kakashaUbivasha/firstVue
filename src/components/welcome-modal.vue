<template>
  <div v-if="isVisible" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <h1>Это мой первый проект на Vue.js</h1>
      <h1>В этом проекте широко использовалось две версии api кинопоиска</h1>
      <h1>Сейчас одна из версий перестала придоставлять картинки поэтому в разделах фильмы и сериалы есть только временная картинка</h1>
      <h1>Если же там снова есть картинки значит api снова стало предоставлять картинки</h1>
      <h1>Надеюсь вам понравится это приложение, остальные приложения можно посмотреть на моём <a target="_blank" href="https://github.com/kakashaUbivasha">github</a></h1>

      <button @click="closeModal">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    closeModal() {
      this.isVisible = false;
      localStorage.setItem('modalShown', 'true');
    },
    checkModalVisibility() {
      const modalShown = localStorage.getItem('modalShown');
      this.isVisible = !modalShown;
    },
  },
  mounted() {
    this.checkModalVisibility();
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Затемнение фона */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  width: 600px;
  height: 400px;
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
}

button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
