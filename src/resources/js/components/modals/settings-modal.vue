<template lang="html">
  <div class="settings">
    <p class="mb-2">Выбор языка: </p>
    <select v-model="lang">
      <option value="en">{{ 'english' }}</option>
      <option value="ru">{{ 'русский' }}</option>
      <option value="jp">{{ '日本' }}</option>
    </select>
    <p class="mb-2 mt-3">Стиль сайта: </p>
    <select v-model="themes">
      <option v-for="theme in themes" :key="theme.id" :value="theme.id">{{theme.name}}</option>
      <option>Создать собственный стиль</option>
    </select>
    <p class="mt-1 mb-0">Можно создать до 3-ех собственных стилей</p>
  </div>
</template>

<script>
export default {
  name: 'settings-modal',
  computed: {
    themes: {
      get(){
        return [
          {
            id: 1,
            name: "Светлая тема",
            selected: false,
          },
          {
            id: 2,
            name: "Темная тема",
            selected: true,
          },
          {
            id: 3,
            name: "Черная тема",
            selected: false,
          },
        ]
      },
      set(id){
        console.log(" theme selected id: " + id)
      }
    },
    lang: {
      get() {
        return this.$store.getters.getLocale;
      },
      set(newValue) {
        this.$store.commit("updateLocale", newValue);
      }
    }
  }
};
</script>

<style scoped>
.settings > select{
  background: #212529;
  color: #fff;
  height: 3rem;
  width: 100%;
  border: none;
  border-left: 6px solid #3490dc;
  padding-left: 1rem;
}
</style>