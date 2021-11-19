<!--
  - Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
  -
  - 23.7.2021
  -->

<template>
   <div class="row">
     <div class="col-xs-12 col-md-4 order-2 order-md-1">
       <h6 class="p-title mb-4">Последняя активность</h6>
       <div class="col-12">
         <card-item
             v-for=     "activityItem in activity"
             v-bind:key= "activityItem.id"
             :title=     "activityItem.title"
             :text=      "activityItem.text"
             :users=     "activityItem.users"
         >
         </card-item>
         <div class="card ">
           <a href="#">Вся активность</a>
         </div>
       </div>
     </div>
     <div class="col order-1">
       <div class="row mb-2 mt-sm-4 mt-md-0">
         <div class="col-auto me-auto">
           <h6 class="p-title">Аниме с самыми высокими оценками</h6>
         </div>
         <div class="col-auto">
           <router-link to="/animes?=что-то_там" class="btn" type="button">Подробнее</router-link>
         </div>
       </div>
       <div class="entry-list ps-4 pe-4 pb-2">
         <div v-if="!loading" class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3 mt-0">
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
           ></catalog-entry>
         </div>
         <loading v-else></loading>
       </div>

       <div class="row mb-2 mt-4">
         <div class="col-auto me-auto">
           <h6 class="p-title"> Манга с самыми высокими оценками</h6>
         </div>
         <div class="col-auto">
           <button class="btn" type="button">Подробнее</button>
         </div>
       </div>
       <div class="entry-list mb-2" style="height: 494px;">
         <p class="text-center">РАЗДЕЛ НАХОДИТСЯ В РАЗРАБОТКЕ</p>
       </div>

     </div>
   </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: "index",

  mounted() {
    this.loadAnimesList(1, 12)
  },
  data(){
    return {
      loading: true,
      "activity": [
        {
          "title": "Написали комментарии",
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
          "title": "Посмотрели аниме",
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
