<!--
  - Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
  -
  - 23.7.2021
  -->

<template>
  <div class="anime">
    <div class="content-header" v-if="!loading">
      <div class="cover" v-bind:style="{ 'background-image': 'url(' + '/storage/images/animes/original/8.jpg' + ')' }"></div>
      <div class="row-container">
        <div class="row-information">
          <div class="warp-poster">
            <div class="poster" v-bind:style="{ 'background-image': 'url(' + '/storage/images/animes/original/8.jpg' + ')' }"></div>
            <button class="btn anime-container-btn">Смотреть</button>
          </div>
          <div>
            <h1 class="text-sm-start">{{animeItem.name_en}} / {{animeItem.name_ru}}</h1>
            <div class="row mb-2 mt-sm-4 mt-md-0">
              <div class="col-auto me-auto">
                  <p>
                    Тип: <a href="#" v-for="typeItem in animeItem.type">{{typeItem.name}} </a><br/>
                    Статус: <a href="#"></a>{{animeItem.status}}<br>
                    <span v-if="animeItem.studios">Студия: <a href="#" v-for="studioItem in animeItem.studios">{{studioItem.name}} </a> <br/></span>
                    <span v-if="animeItem.episodes_released">Эпизоды: <span v-if="animeItem.episodes">{{animeItem.episodes}} \</span> {{animeItem.episodes_released}} <br></span>
                    <span v-if="animeItem.episode_duration">Продолжительность эпизода: {{animeItem.episode_duration}}<br></span>
                    <span v-if="animeItem.genres">
                      Жанры:
                      <router-link v-bind:class="'tags'" v-for="genreItem in animeItem.genres" :key="genreItem.id" :to="{name: 'animes', query: {genres: genreItem.name_en}}">{{genreItem.name_ru}}</router-link>
                      <br/>
                    </span>
                    <span v-if="animeItem.age_rating">Возрастной рейтинг: {{animeItem.age_rating}} <br/></span>
                    <span v-if="animeItem.aired_on">Дата начала премьеры: {{new Date(animeItem.aired_on).toLocaleString('default', {year: 'numeric', month: 'long', day: 'numeric'})}}<br/></span>
                    <span v-if="animeItem.released_on">Дата выхода: {{new Date(animeItem.released_on).toLocaleString('default', {year: 'numeric', month: 'long', day: 'numeric'})}}<br/></span>
                    <span v-if="animeItem.shiki_score">Оценка на MyAnimeList: {{animeItem.shiki_score}} <br/></span>
                  </p>
              </div>
              <div class="col-auto">
                <p>asd</p>
              </div>
            </div>

              <p>Описание:</p>
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">русское</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">английское</button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <p>{{animeItem.description_ru}}</p>
                  <p class="text-right">Автор: {{animeItem.description_ru_source}}</p>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <p>{{animeItem.description_en}}</p>
                  <p class="text-right">Автор: {{animeItem.description_en_source}}</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-header loading" v-else>
      <div class="cover" v-bind:style="{ 'background-image': 'url(' + '/storage/images/animes/original/8.jpg' + ')' }"></div>
      <div class="row-container">
        <div class="row-information">
          <div class="warp-poster">
            <div class="poster"></div>
            <button class="btn anime-container-btn">Смотреть</button>
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
export default {
  name: "index",

  data(){
    return {
      loading: true,
    }
  },
  mounted() {
    this.loadAnime(this.$route.params.id);
  },

  watch: {
    animeItem(animeItem){
      if(animeItem){
        this.loading = false;
      }
    }
  },

  computed: mapGetters(['animeItem']),
  methods: mapActions(['loadAnime'])

}
</script>

<style scoped>
.anime>.content-header>.cover {
  position: absolute;
  /*width: 100%;*/
  /*height: 718px;*/
  opacity: 0.1;
  left: 62px;
  top: 72px;
}
@media (max-width: 575px) {
  .anime>.content-header>.cover {
    left: 0;
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
    margin-right: 0
  }
}
.anime>.content-header>.row-container>.row-information>.warp-poster>.poster {
  width: 276px;
  height: 398px;
  background-position: 50%;
  background-size: cover;
  border-radius: 4px;
  margin-bottom: 15px;
  cursor: pointer;
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
