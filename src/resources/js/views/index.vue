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
           <button class="btn" type="button">{{$t('view more')}}</button>
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
           <button class="btn" type="button">{{$t('view more')}}</button>
         </div>
       </div>
       <div class="entry-list mb-4" style="height: 108px;">
         <p class="text-center">РАЗДЕЛ НАХОДИТСЯ В РАЗРАБОТКЕ</p>
       </div>
     </div>
     <div class="row">
       <div class="col-12 col-lg-9 mb-4 mb-lg-0 news">
         <p class="p-title">Новости</p>
         <div class="entry-list" style="height: 400px">
         </div>
       </div>
       <div class="col-12 col-lg-3 order-1 order-lg-0 ">
         <h6 class="p-title mb-4">Недавно вышедшие</h6>
         <div class="col-12">
           <card v-for="item in recentlyReleased" :key="item.id">
             <template v-slot:header>
               <p class="title">{{item.title}}</p>
               <p class="font-weight-bold ">{{item.released}}</p>
             </template>
             <template v-slot:footer>
               <a :href="item.url" class="title">
                 Смотреть
               </a>
             </template>
           </card>
           <div class="card ">
             <a href="#">{{$t('view more')}}</a>
           </div>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import slider from '../components/SliderComponent';
import card from '../components/ItemCardComponent';
export default {
  name: "index",
  components:{
    slider,
    card
  },

  mounted() {
    this.loadAnimesList(1, 12)
  },
  data(){
    return {
      loading: true,
      "recentlyReleased": [
        {
          url: "#",
          id:   2,
          title: 'Обновление аниме: "Девочка, которая видит это"',
          released: "Вышли новые эпизоды: 1, 2"
        },
        {
          url: "#",
          id:   3,
          title: 'Обновление аниме: "Восемьдесят шесть 2"',
          released: "Вышли новые эпизоды: 9,10"
        }
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
