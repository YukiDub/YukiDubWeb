<!--
  - Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
  -
  - 23.7.2021
  -->

<template>
  <div class="row anime-list">
    <div class="col order-1">
      <p class="p-title mb-0 ps-3">Аниме</p>
       <div v-if="loading" class="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-5 mt-0 ms-1 me-1 pb-4 g-3">
         <catalog-entry
             v-for=       "anime in animeList"
             v-bind:key=  "anime.id"
             :id=         "anime.id"
             :name=       "anime['name_' + getLocale]"
             :type=       "anime.type"
             :genres=     "anime.genres"
             :poster_url= "anime.poster.preview"
             :status=     "anime.status"
             :studios=    "anime.studios"
             :route=      "{name: 'anime', params:{id: anime.id}}"
             :score=      "anime.shiki_score"
         ></catalog-entry>
       </div>
       <loading v-else></loading>
      <pagination :last-page="animePagination.last_page" v-model:selected-page="page"/>
    </div>
    <animeFilter class="col-0 col-lg-2 order-2"/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import animeFilter from '../components/AnimeFilterComponent';
import pagination from '../components/PaginationComponent';

export default {
  name: "index",

  components: {
    animeFilter,
    pagination
  },

  computed: mapGetters(['animeList', 'animePagination', 'getLocale']),

  mounted() {
    this.loadComponent();
    // this.bodyParams.genres = [];
    // console.log(this.bodyParams)
    // Array.observe(this.genresFilter, function(changes) {
    //   console.log(changes);
    // });
  },

  data(){
    return {
      openFilter: false,
      loading:      false,
      page:         this.$route.query.page ? Number(this.$route.query.page) : 1,
      genresFilter: [],
      statusFilter: [],
      bodyParams:   {
        'genres': [
            'josei'
        ]
      },
    }
  },

  watch: {
    page: {
      handler(){
        this.loading = false;
        this.loadAnimesList(this.page, 30);
        this.$router.replace({query: {page: String(this.page)}})
            .catch(ex => {})
      },
      deep: true
    },
    animeList: {
      handler(){
        this.loading = true;
      },
      deep:true
    }
  },

  methods: {
    loadComponent(){
      if(this.animePagination && Number(this.animePagination.current_page) === this.page){
        this.loading = true;
      }
      else{
        this.loadAnimesList(this.page, 30);
      }
    },
    ...mapActions(["loadAnimesList"]),
  }
  // methods: {
  //   loadPage(){
  //     let params = this.$route.query;
  //
  //     if(params.genres) this.genresFilter = params.genres.split(',');
  //     if(params.status) this.statusFilter = params.status.split(',');
  //
  //     console.log(this.genresFilter);
  //   },
  // },

}
</script>

<style scoped>

</style>
