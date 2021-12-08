<!--
  - Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
  -
  - 23.7.2021
  -->

<template>
  <div class="anime" v-if="!loading">
    <div class="content-header">
      <div class="cover" v-bind:style="{ 'background-image': 'url(' + animeItem.poster.original + ')' }"></div>
      <div class="row-container">
        <div class="row-information">
          <div class="warp-poster">
            <div class="poster mx-auto" v-bind:style="{ 'background-image': 'url(' + animeItem.poster.original + ')' }"></div>
            <div class="buttons gap-2 d-flex justify-content-center pb-2">
              <div class="btn edit" title="редактировать" v-on:click="selectedComponent = editorComponent"><i class="bi bi-gear-fill"></i></div>
              <div class="btn favoured" v-bind:class="{selected: animeItem.anime_favoured}" title="добавить в избранное"><i class="bi bi-bookmark-star-fill"></i></div>
              <div class="btn watch">{{$t('watch')}}</div>
            </div>
          </div>
          <div class="right-block">
            <h1 class="text-sm-start">{{animeItem.name_en}} / {{animeItem.name_ru}}</h1>
            <div class="row mb-2 mt-sm-4 mt-md-0">
              <div class="col-auto">
                  <p>
                    <span>Японское название: {{animeItem.name_jp}} <br/></span>
                    {{$t('type')}}: <a href="#" v-for="typeItem in animeItem.type" v-bind:class="'tags'">{{typeItem.name}} </a><br/>
                    {{$t('status')}}: <a href="#"></a>{{$t('status_list.' + animeItem.status)}}<br>
                    <span v-if="animeItem.studios">Студия: <a href="#" v-for="studioItem in animeItem.studios">{{studioItem.name}} </a> <br/></span>
                    <span v-if="animeItem.episodes_released">Эпизоды: <span v-if="animeItem.episodes">{{animeItem.episodes}} \</span> {{animeItem.episodes_released}} <br></span>
                    <span v-if="animeItem.episode_duration">Продолжительность эпизода: {{animeItem.episode_duration}}<br></span>
                    <span v-if="animeItem.genres">
                      {{$t('genres')}}:
                      <router-link v-bind:class="'tags'" v-for="genreItem in animeItem.genres" :key="genreItem.id" :to="{name: 'animes', query: {genres: genreItem.name_en}}">{{genreItem['name_' + getLocale]}}</router-link>
                      <br/>
                    </span>
                    <span v-if="animeItem.age_rating">Возрастной рейтинг: {{animeItem.age_rating}} <br/></span>
                    <span v-if="animeItem.aired_on">Дата начала премьеры: {{new Date(animeItem.aired_on).toLocaleString('default', {year: 'numeric', month: 'long', day: 'numeric'})}}<br/></span>
                    <span v-if="animeItem.released_on">Дата выхода: {{new Date(animeItem.released_on).toLocaleString('default', {year: 'numeric', month: 'long', day: 'numeric'})}}<br/></span>
                    <span v-if="animeItem.shiki_score">Оценка на MyAnimeList: {{animeItem.shiki_score}} <br/></span>
                    <span>Оценка на Yuki: {{animeItem.score_info.rating}} <br/></span>
                  </p>
              </div>
              <div class="col-auto rating mx-auto my-auto">
                <p class="text-center">Рейтинг</p>
                <input type="radio" id="star-1" name="rating" value="1">
                <label for="star-1" title="Оценка «1»" class="star bi bi-star-fill"></label>
                <input type="radio" id="star-2" name="rating" value="2">
                <label for="star-2" title="Оценка «2»" class="star bi bi-star-fill"></label>
                <input type="radio" id="star-3" name="rating"  value="3">
                <label for="star-3" title="Оценка «3»" class="star bi bi-star-fill"></label>
                <input type="radio" id="star-4" name="rating"  value="4">
                <label for="star-4" title="Оценка «4»" class="star bi bi-star-fill"></label>
                <input type="radio" id="star-5" name="rating" value="5">
                <label for="star-5" title="Оценка «5»" class="star bi bi-star-fill"></label>
              </div>
            </div>
            <description
                :ru="animeItem.description_ru"
                :ru_source="animeItem.description_ru_source"
                :en="animeItem.description_en"
                :en_source="animeItem.description_en_source"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="content-footer">
      <component v-bind:is="selectedComponent" :anime="animeItem"/>
    </div>
  </div>
  <div class="anime" v-else>
    <div class="content-header loading">
      <div class="row-container">
        <div class="row-information">
          <div class="warp-poster">
            <div class="poster"></div>
            <button class="btn anime-container-btn">{{$t('watch')}}</button>
          </div>
          <div class="row">
            <h1 class="pt-3 text-sm-start">Идет загрузка</h1>
            <div class="col-12 col-lg-7">
              <p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import CharacterEntryComponent from "../components/СharacterEntryComponent";
import MainComponent from "../components/anime/AnimeMainComponent";
import EditorComponent from "../components/anime/AnimeEditorComponent";
import description from "../components/DescriptionComponent";
export default {
  name: "index",
  components: {
    CharacterEntryComponent,
    MainComponent,
    EditorComponent,
    description
  },

  data(){
    return {
      loading: true,
      selectedComponent: MainComponent,
      editorComponent: EditorComponent
    }
  },
  mounted() {
    this.loadView();
  },

  watch: {
    animeItem(animeItem){
      if(animeItem){
        this.loading = false;
        this.$route.meta.title = animeItem.name_ru;
      }
    }
  },

  computed: mapGetters(['animeItem', 'getLocale']),
  methods: {
    ...mapActions(['loadAnime']),
    loadView(){
      if(this.animeItem.id === Number(this.$route.params.id)){
        this.loading = false;
      }
      else{
        this.loadAnime(this.$route.params.id);
      }
    }
  }

}
</script>

<style scoped>
.anime>.content-header>.cover {
  position: absolute;
  width: 100%;
  height: 688px;
  opacity: 0.1;
  left: 0;
  top: 72px;
  filter: drop-shadow(0px 4px 52px rgba(0, 0, 0, 0.25));
}
.anime>.content-header>.cover {
  min-height: 43.6rem;
}
@media (max-width: 1399px) {
  .anime>.content-header>.cover {
    display: none;
  }
}
.anime>.content-header>.row-container {
  min-height: 598px;
  margin: 0 auto;
  max-width: 1224px;
}
.anime>.content-header>.row-container>.row-information {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  z-index: 1
}
@media(max-width:769.98px) {
  .anime>.content-header>.row-container>.row-information {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }
}
.anime>.content-header>.row-container>.row-information>.right-block{
  width: 100%;
}
.anime>.content-header>.row-container>.row-information>.right-block .row > .rating > input {
  display: none;
}
.anime>.content-header>.row-container>.row-information>.right-block .row > .rating > input:checked + .star:hover,
.anime>.content-header>.row-container>.row-information>.right-block .row > .rating > input:checked + .star:hover ~ .star,
.anime>.content-header>.row-container>.row-information>.right-block .row > .rating > input:checked ~ .star:hover,
.anime>.content-header>.row-container>.row-information>.right-block .row > .rating > input:checked ~ .star:hover ~ .star,
.anime>.content-header>.row-container>.row-information>.right-block .row > .rating > label:hover ~ .star:checked ~ .star {
  color: #36b5f7;
  text-shadow: 1px 1px #36b5f7;
}
.anime>.content-header>.row-container>.row-information>.right-block .row > .rating > input.selected + .star,
.anime>.content-header>.row-container>.row-information>.right-block .row > .rating > input.selected + .star ~ .star,
.anime>.content-header>.row-container>.row-information>.right-block .row > .rating > input.selected ~ .star,
.anime>.content-header>.row-container>.row-information>.right-block .row > .rating > input.selected ~ .star ~ .star,
.anime>.content-header>.row-container>.row-information>.right-block .row > .rating > label:hover ~ .star ~ .star {
  color: #36b5f7;
  text-shadow: 1px 1px #36b5f7;
}
.anime>.content-header>.row-container>.row-information>.right-block .row > .rating > .star{
  font-size: 4rem;
  color: #FFFFFF;
}
.anime>.content-header>.row-container>.row-information>.right-block .row > .rating > .star:hover{
  cursor: pointer;
  color: #36b5f7;
}
.anime>.content-header>.row-container>.row-information>.warp-poster {
  margin-right: 40px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 276px;
  flex: 0 0 276px;
}
.anime-container-btn {
  width: 100%;
  height: 2.4rem;
}
@media(max-width:769.98px) {
  .anime>.content-header>.row-container>.row-information>.warp-poster {
    margin-right: 0;
  }
}
.anime>.content-header>.row-container>.row-information>.warp-poster>.poster {
  width: 300px;
  height: 429px;
  background-position: 50%;
  background-size: cover;
  border-radius: 4px;
  margin-bottom: 15px;
  cursor: pointer;
}
.anime>.content-header>.row-container>.row-information>.warp-poster>.buttons>.btn.favoured.selected{
  color: #3490dc;
}
@media(max-width:769.98px) {
  .anime>.content-header>.row-container>.row-information>.warp-poster>.poster{
    width: 349px;
    height: 500px;
  }
}
.anime>.content-header.loading > .row-container>.row-information>.warp-poster {
  width: 276px;
  height: 398px;
  background: #363944;
  box-shadow: 0 -200px 100px -120px #1f2631 inset;
  border-radius: 4px;
  animation: background 3s infinite alternate;
}
@keyframes background {
  50% {
    background: #1f2631;
    box-shadow: 0 -200px 100px -100px #363944 inset;
  }
  100% {
    background: #363944;
    box-shadow: 0 -200px 100px -100px #1f2631 inset;
  }
}
</style>
