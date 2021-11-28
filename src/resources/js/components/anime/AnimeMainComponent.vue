<template>
  <div class="tabs">
    <div class="nav justify-content-center" id="anime-tab" role="tablist">
      <button class=" active" id="nav-characters-tab" data-bs-toggle="tab" data-bs-target="#nav-characters" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Персонажи</button>
      <button class="" id="nav-staff-tab" data-bs-toggle="tab" data-bs-target="#nav-staff" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Авторы</button>
      <button class="" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Отзывы</button>
    </div>
    <div class="tab-content" id="anime-tabContent">
      <div class="tab-pane show active" id="nav-characters" role="tabpanel" aria-labelledby="nav-characters-tab">
        <div class="characters pl-4" v-if="anime.characters.length !== 0">
          <h4 class="text-center text-md-start pb-3 pt-4">ГЛАВНЫЕ ГЕРОИ</h4>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5 g-3">
            <character-entry-component
                v-for="character in anime.characters"
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
      <div class="tab-pane" id="nav-staff" role="tabpanel" aria-labelledby="nav-staff-tab">
        авторы
      </div>
      <div class="tab-pane" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
        отзыввы
      </div>
    </div>
  </div>
</template>

<script>
import CharacterEntryComponent from "../СharacterEntryComponent";

export default {
  components: {
    CharacterEntryComponent,
  },
  name: "AnimeMainComponent",
  props: {
    anime: Object
  }
}
</script>

<style scoped>
#anime-tab > button {
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 1.2rem;
  font-weight: 600;
  margin-right: 14px;
}
#anime-tab > button.active::after {
  content: "";
  display: block;
  background: #009BEB;
  border-radius: 6px 5px 0px 0px;
  width: 108px;
  height: 4px;
}
</style>