<template>
  <div class="editor">
    <div class="row">
      <div class="col">
        <h3 class="text-start">РЕДАКТИРОВАНИЕ ИНФОРМАЦИИ</h3>
        <p>Японское название: {{anime.name_jp}} <span>редактировать</span></p>
        <p>Английское название: {{anime.name_en}} <span>редактировать</span></p>
        <p>Русское название: {{anime.name_ru}} <span>редактировать</span></p>
        <p>Статус: {{anime.status}} <span>редактировать</span></p>
        <p>Кол-во эпизодов: {{anime.name_ru}} <span>редактировать</span></p>
        <p>Студии: <span v-bind:class="'tags'" v-for="studio in anime.studios" :key="studio.id" :to="{name: 'animes', query: {studios: studio.name}}">{{studio.name}}</span> <span>редактировать</span></p>
        <p>Эпизодов вышло: {{anime.episodes_released}} <span>редактировать</span></p>
        <p>Продолжительность серии: {{anime.name_ru}} <span>редактировать</span></p>
        <p>Жанры: <span v-bind:class="'tags'" v-for="genreItem in anime.genres" :key="genreItem.id" :to="{name: 'animes', query: {genres: genreItem.name_en}}">{{genreItem.name_ru}}</span> <span>редактировать</span></p>
        <p>Возрастной рейтинг: {{anime.age_rating}} <span>редактировать</span></p>
        <p>Дата начала премьеры: {{anime.aired_on}} <span>редактировать</span></p>
        <p>Дата выхода: {{anime.released_on}} <span>редактировать</span></p>
      </div>
      <div class="col">
        <h3 class="text-start">ИСТОРИЯ ПРАВОК</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimeSettingsComponent",
  props: {
    anime: Object
  }
}
</script>

<style scoped>

</style>