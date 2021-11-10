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

          <div class="row">
            <h1 class="pt-3 text-sm-start">{{animeItem.name_en}} / {{animeItem.name_ru}}</h1>
            <div class="col-12 col-lg-7">
              <p>
                Тип: <a href="#" v-for="typeItem in animeItem.type">{{typeItem.name}} </a><br/>
                Статус: <a href="#"></a>{{animeItem.status}}<br>
                <span v-if="animeItem.studios">Студия: <a href="#" v-for="studioItem in animeItem.studios">{{studioItem.name}} </a> <br/></span>
                <span v-if="animeItem.episodes_released">Эпизоды: <span v-if="animeItem.episodes">{{animeItem.episodes}}\</span> {{animeItem.episodes_released}} <br></span>
                <span v-if="animeItem.episode_duration">Продолжительность эпизода: {{animeItem.episode_duration}}<br></span>
                <span v-if="animeItem.genres">
                  Жанры:
                  <router-link v-for="genreItem in animeItem.genres" :key="genreItem.id" :to="{name: 'animes', query: {genres: genreItem.name_en}}">{{genreItem.name_ru}}</router-link>
                  <br/>
                </span>
                <span v-if="animeItem.age_rating">Возрастной рейтинг: {{animeItem.age_rating}} <br/></span>
                <span v-if="animeItem.aired_on">Дата начала премьеры: {{animeItem.aired_on}}<br/></span>
                <span v-if="animeItem.released_on">Дата выхода: {{animeItem.released_on}}<br/></span>
                <span v-if="animeItem.shiki_score">Оценка на MyAnimeList: {{animeItem.shiki_score}} <br/></span>
              </p>
            </div>

            <div class="col-12 col-lg-2 rating">
              <p>Рейтинг</p>
              <svg width="386" height="68" viewBox="0 0 386 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M342.085 21.1159L351.094 3.267C351.267 2.90793 351.538 2.60466 351.875 2.39171C352.212 2.17877 352.602 2.0647 353 2.0625C353.755 2.0625 354.51 2.46263 354.918 3.267L363.927 21.1159L384.132 23.9869C384.635 24.066 385.096 24.3165 385.436 24.696C385.777 25.0755 385.976 25.5608 386 26.07C386.028 26.409 385.98 26.7499 385.859 27.0677C385.737 27.3854 385.546 27.6718 385.299 27.9056L370.766 41.7491L374.19 61.2604C374.512 63.0877 372.705 64.5191 371.113 63.7024L353 54.3964L334.895 63.7024C334.706 63.8008 334.503 63.8703 334.293 63.9086C332.887 64.1561 331.538 62.8609 331.818 61.2604L335.242 41.7491L320.714 27.9056C320.489 27.6916 320.31 27.4336 320.189 27.1476C320.067 26.8617 320.006 26.5539 320.008 26.2432C320.009 25.8044 320.129 25.3739 320.355 24.9975C320.517 24.7255 320.739 24.4935 321.003 24.3186C321.267 24.1437 321.567 24.0303 321.881 23.9869L342.085 21.1159ZM353 49.6114C353.33 49.6114 353.66 49.6856 353.957 49.8424L369.162 57.6551L366.299 41.3325C366.232 40.9568 366.258 40.5702 366.375 40.2069C366.492 39.8436 366.697 39.5148 366.971 39.2494L378.959 27.8231L362.244 25.4471C361.898 25.3949 361.57 25.2595 361.288 25.0526C361.005 24.8457 360.777 24.5734 360.623 24.2591L353.008 9.16988L353 9.18225V49.6073V49.6114Z" fill="white"/>
                </g>
                <g clip-path="url(#clip1)">
                  <path d="M14.8998 63.7024C13.3076 64.5192 11.5008 63.0878 11.8226 61.2604L15.2463 41.7492L0.71393 27.9057C-0.643195 26.6104 0.0621798 24.2427 1.8813 23.9869L22.0856 21.1159L31.0946 3.26705C31.9072 1.6583 34.1058 1.6583 34.9184 3.26705L43.9274 21.1159L64.1317 23.9869C65.9508 24.2427 66.6562 26.6104 65.2991 27.9057L50.7667 41.7492L54.1904 61.2604C54.5122 63.0878 52.7054 64.5192 51.1132 63.7024L33.0003 54.3964L14.8957 63.7024H14.8998Z" fill="white"/>
                </g>
                <g clip-path="url(#clip2)">
                  <path d="M94.8998 63.7024C93.3076 64.5192 91.5008 63.0878 91.8226 61.2604L95.2463 41.7492L80.7139 27.9057C79.3568 26.6104 80.0622 24.2427 81.8813 23.9869L102.086 21.1159L111.095 3.26705C111.907 1.6583 114.106 1.6583 114.918 3.26705L123.927 21.1159L144.132 23.9869C145.951 24.2427 146.656 26.6104 145.299 27.9057L130.767 41.7492L134.19 61.2604C134.512 63.0878 132.705 64.5192 131.113 63.7024L113 54.3964L94.8957 63.7024H94.8998Z" fill="white"/>
                </g>
                <g clip-path="url(#clip3)">
                  <path d="M254.9 65.7024C253.308 66.5192 251.501 65.0878 251.823 63.2604L255.246 43.7492L240.714 29.9057C239.357 28.6104 240.062 26.2427 241.881 25.9869L262.086 23.1159L271.095 5.26705C271.907 3.6583 274.106 3.6583 274.918 5.26705L283.927 23.1159L304.132 25.9869C305.951 26.2427 306.656 28.6104 305.299 29.9057L290.767 43.7492L294.19 63.2604C294.512 65.0878 292.705 66.5192 291.113 65.7024L273 56.3964L254.896 65.7024H254.9Z" fill="white"/>
                </g>
                <g clip-path="url(#clip4)">
                  <path d="M174.9 65.7024C173.308 66.5192 171.501 65.0878 171.823 63.2604L175.246 43.7492L160.714 29.9057C159.357 28.6104 160.062 26.2427 161.881 25.9869L182.086 23.1159L191.095 5.26705C191.907 3.6583 194.106 3.6583 194.918 5.26705L203.927 23.1159L224.132 25.9869C225.951 26.2427 226.656 28.6104 225.299 29.9057L210.767 43.7492L214.19 63.2604C214.512 65.0878 212.705 66.5192 211.113 65.7024L193 56.3964L174.896 65.7024H174.9Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="66" height="66" fill="white" transform="translate(320)"/>
                  </clipPath>
                  <clipPath id="clip1">
                    <rect width="66" height="66" fill="white"/>
                  </clipPath>
                  <clipPath id="clip2">
                    <rect width="66" height="66" fill="white" transform="translate(80)"/>
                  </clipPath>
                  <clipPath id="clip3">
                    <rect width="66" height="66" fill="white" transform="translate(240 2)"/>
                  </clipPath>
                  <clipPath id="clip4">
                    <rect width="66" height="66" fill="white" transform="translate(160 2)"/>
                  </clipPath>
                </defs>
              </svg>

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
.anime>.content-header>.row-container>.row-information>.row > p {
  font-weight: normal;
  color: #ffff;
}


.anime>.content-header>.row-container>.row-information>.row > .rating {
  margin: -5rem;
}

.anime>.content-header>.row-container>.row-information>.row > .rating > p {
  margin-left: 10rem;
  font-weight: bold;
  font-size: 1.2rem;
}

.anime>.content-header>.cover:after {
  content: " ";
  z-index: 0;
  /*position: absolute;*/
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(36%, rgba(35, 40, 51, 0)), color-stop(58%, rgba(35, 40, 51, .9)), color-stop(66%, #232833));
  background-image: linear-gradient(180deg,rgba(35, 40, 51, 0) 36%, rgba(35, 40, 51, .9) 58%, #353944 66%);}

.anime>.content-header>.row-container {
  min-height: 598px;
  margin: 0 auto;
  max-width: 1224px;
  position: relative;
  /*padding: 161px 15px 0 30px*/
}

@media(max-width:1199.98px) {
  .anime>.content-header>.row-container {
    /*padding: 161px 15px 0 15px*/
  }
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
  position: relative
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
  position: relative
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
