<template>
  <div class="tabs">
    <div class="nav justify-content-center anime-tab">
      <button type="button" @click="selectedTab = characterTab" v-bind:class="{'active': selectedTab === characterTab}">
        Персонажи
      </button>
      <button type="button" @click="selectedTab = authorsTab" v-bind:class="{'active': selectedTab === authorsTab}">
        Авторы
      </button>
      <button type="button" @click="selectedTab = relatedTab" v-bind:class="{'active': selectedTab === relatedTab}">
        Связанное
      </button>
      <button type="button">
        Похожее
      </button>
      <button type="button">
        Статистика
      </button>
    </div>
      <component v-bind:is="selectedTab"/>
  </div>
</template>

<script>
import characterTab from "../anime/AnimeCharactersComponent";
import authorsTab from "../anime/AnimeAuthorsComponent";
import relatedTab from "../anime/AnimeRelatedComponent";

export default {
  name: "AnimeMainComponent",
  components: {
    characterTab,
    authorsTab,
    relatedTab
  },
  data(){
    return {
      selectedTab: characterTab,
      characterTab: characterTab,
      authorsTab: authorsTab,
      relatedTab: relatedTab,
    }
  },
  props: {
    anime: Object
  }
}
</script>

<style scoped>
.tabs > .anime-tab {
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 1.2rem;
  font-weight: 600;
}
.tabs > .anime-tab > button{
  cursor: pointer;
  background: none;
  border: none;
  color: var(--text-color);
}
.tabs > .anime-tab > button.active::after {
  content: "";
  display: block;
  background: #009BEB;
  border-radius: 6px 5px 0 0;
  height: 4px;
}
</style>