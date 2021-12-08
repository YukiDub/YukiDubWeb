<template>
  <div class="characters-tab">
    <div class="characters pl-4" v-if="animeItem.characters.length !== 0">
      <h4 class="text-center text-md-start pb-3 pt-4">ГЛАВНЫЕ ГЕРОИ</h4>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5 g-3">
        <character-entry-component
            v-for="character in animeItem.characters"
            :key="character.id"
            :name="character.name_ru"
            :poster_url="'/storage/images/animes/preview/1.jpg'"
        />
      </div>
      <h4 class="text-center text-md-start pb-3 pt-4">ДРУГИЕ ПЕРСОНАЖИ</h4>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5 g-3">
      </div>
    </div>
    <div v-else class="characters pl-4">
      <p class="text-center mt-4">Персонажи для данного аниме не найдены</p>
      <img src="/assets/images/nya404.webp" alt="nya 404" class="img-fluid w-25 mx-auto d-block">
    </div>
  </div>
</template>

<script>
import characterEntryComponent from "../СharacterEntryComponent";
import {mapGetters} from 'vuex'
export default {
  name: "AnimeCharactersComponent",
  computed: mapGetters(['animeItem']),
  components: {
    characterEntryComponent
  }
}
</script>

<style scoped>

</style>