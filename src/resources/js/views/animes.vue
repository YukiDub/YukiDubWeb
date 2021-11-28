<!--
  - Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
  -
  - 23.7.2021
  -->

<template>
  <div class="row">
    <div class="col order-1">
      <div class="row mb-2 mt-sm-4 mt-md-0">
        <div class="col-auto me-auto">
          <h6 class="p-title">{{$t('anime')}} - {{$tc('message.page', 1, { page: page, count: animePagination.last_page })}}</h6>
        </div>
        <div class="col-auto">
          <div class="btn" v-on:click="page = page > 1 ? page - 1 : 1"> < </div>
          <div class="btn" v-on:click="page = page < animePagination.last_page ? page + 1 : page"> > </div>
        </div>
      </div>
      <div class="entry-list">
        <div v-if="loading" class="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-5 mt-0 pt-1 ms-1 me-1 pb-4 g-3">
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
      </div>
    </div>
    <div id="filter-block" class="col-xs-12 col-md-3 order-2 d-none d-lg-block">
      <h6 class="p-title mb-3">{{$tc('filter', 2)}}</h6>
      <div class="col-12">
        <animeFilter @close="filterOnClick()">

        </animeFilter>
      </div>
    </div>
    <div class="btn-filter d-block d-lg-none" v-on:click="filterOnClick()">
      <i class="bi bi-filter-circle-fill"></i>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import animeFilter from '../components/AnimeFilterComponent';

export default {
  name: "index",

  components: {
    animeFilter,
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
    filterOnClick(){
      let filter = document.getElementById("filter-block")
      if(this.openFilter){
        this.openFilter = false;
        filter.classList.add('d-none')
      }
      else{
        this.openFilter = true;
        filter.classList.remove('d-none')
      }
    }
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

.btn-filter{
  position: fixed;
  width: 7rem;
  bottom: 3.5rem;
  right: -0.2rem;
  z-index: 4;
  filter: drop-shadow(2px 3px 8px rgba(0, 0, 0, 2.25));
}

.btn-filter > i{
  font-size: 4.5rem;
  color: aliceblue;
}
</style>
