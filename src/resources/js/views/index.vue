<!--
  - Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
  -
  - 23.7.2021
  -->

<template>
   <div>
     <div class="row mb-2 mt-sm-4 mt-md-0">
       <div class="col-auto me-auto">
         <h6 class="p-title">Сейчас на экранах</h6>
       </div>
       <div class="col-auto">
         <router-link to="/animes?=что-то_там" class="btn" type="button">{{$t('view more')}}</router-link>
       </div>
     </div>
     <div class="entry-list ps-4 pe-4 pb-2">
       <slider v-if="!loading">
         <template v-slot:items>
           <catalog-entry
               v-for=       "anime in animeList"
               v-bind:key=  "anime.id"
               :id=         "anime.id"
               :name=       "anime.name_ru"
               :type=       "anime.type"
               :genres=     "anime.genres"
               :poster_url= "anime.poster.preview"
               :status=     "anime.status"
               :studios=    "anime.studios"
               :route=      "{name: 'anime', params:{id: anime.id}}"
               :score=      "anime.shiki_score"
           />
         </template>
       </slider>
       <loading v-else></loading>
     </div>

     <div class="manga-slider">
       <div class="row mb-2 mt-4">
         <div class="col-auto me-auto">
           <h6 class="p-title"> Самая популярная выходящая манга</h6>
         </div>
         <div class="col-auto">
           <button class="btn" type="button">Подробнее</button>
         </div>
       </div>
       <div class="entry-list mb-4" style="height: 108px;">
         <p class="text-center">РАЗДЕЛ НАХОДИТСЯ В РАЗРАБОТКЕ</p>
       </div>
     </div>

     <div class="ranobe-slider">
       <div class="row mb-2 mt-4">
         <div class="col-auto me-auto">
           <h6 class="p-title"> Самое популярное выходящее ранобэ</h6>
         </div>
         <div class="col-auto">
           <button class="btn" type="button">Подробнее</button>
         </div>
       </div>
       <div class="entry-list mb-4" style="height: 108px;">
         <p class="text-center">РАЗДЕЛ НАХОДИТСЯ В РАЗРАБОТКЕ</p>
       </div>
     </div>

     <div class="row news">
       <div class="col-9">
         <p class="p-title">Новости</p>
         <div class="entry-list" style="height: 400px">

         </div>
       </div>
       <div class="col-3">
         <h6 class="p-title mb-4">Недавно вышедшие</h6>
         <div class="col-12">
           <card-item
               v-for=     "activityItem in activity"
               v-bind:key= "activityItem.id"
               :title=     "$t(activityItem.title)"
               :text=      "activityItem.text"
               :users=     "activityItem.users"
           >
           </card-item>
           <div class="card ">
             <a href="#">{{$t('all activity')}}</a>
           </div>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import slider from '../components/SliderComponent';
export default {
  name: "index",
  components:{
    slider
  },

  mounted() {
    this.loadAnimesList(1, 12)
  },
  data(){
    return {
      loading: true,
      "activity": [
        {
          "title": "wrote comments",
          "text":  "Re:Zero. Жизнь с нуля в альтернативном мире",
          "users":[
            {
              "id": 1,
              "name": "Admin",
              "avatar_ul": "/assets/images/avatars/default.png"
            },
            {
              "id": 2,
              "name": "Test",
              "avatar_ul": "/assets/images/avatars/default.png"
            },
          ]
        },
        {
          "title": "watched anime",
          "text":  "ToraDora!",
          "users":[
            {
              "id": 1,
              "name": "Admin",
              "avatar_ul": "/assets/images/avatars/default.png"
            },
          ]
        },
      ],
    }
  },

  watch: {
    animeList: {
      handler(animes){
        if(animes){
          this.loading = false;
        }
      }
    }
  },

  methods: mapActions(['loadAnimesList']),
  computed: mapGetters(['animeList'])
}
</script>

<style scoped>

</style>
