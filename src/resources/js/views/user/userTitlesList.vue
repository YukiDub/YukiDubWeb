<template>
  <div class="row user-tiles-list">
    <div class="titles col order-1">
      <div class="header">
        <p class="button back" v-on:click="$router.go(-1)"><i class="bi bi-arrow-left-short"></i>вернуться назад</p>
        <p class="p-title">Список аниме пользователя {{user.name}}</p>
        <div class="select-category">
          <select>
            <option value="anime">Аниме</option>
            <option value="anime">Манга</option>
            <option value="anime">Ранобэ</option>
          </select>
        </div>
      </div>
        <div class="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-5 mt-0 pt-1 ms-1 me-1 pb-4 g-3 mb-2">
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
      <pagination :last-page="animePagination.last_page" v-model:selected-page="page"/>
    </div>
    <filter-component class="col-0 col-lg-3 order-2"/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import pagination from '../../components/PaginationComponent';
import filterComponent from "../../components/AnimeFilterComponent";
export default {
  name: "userTitlesList",
  components: {
    filterComponent,
    pagination
  },
  mounted() {
    this.loadAnimesList(1)
  },
  methods: mapActions(['loadAnimesList']),
  computed: {
    ...mapGetters(['animeList', 'animePagination', 'getLocale']),
    //Пока что оставлю так, но потом всё это надо заменить на store
    user: {
      get: function() {
        //Что-то будет делать через стор и получать пользователя...
        return {
          id: 1,
          name: this.$route.params.name,
          avatar_url: ""
        }
      }
    }
  },
}
</script>

<style scoped>
  .user-tiles-list > .titles > .header{
    display: flex;
    justify-content: space-between;
  }
  .user-tiles-list > .titles > .header > .button.back{
    cursor: pointer;
    font-size: 1rem;
  }
  .user-tiles-list > .titles > .header > .select-category > select{
    background: #424755;
    border: none;
    font-size: 1rem;
    color: #fff;
    padding: 4px 14px 4px 14px;
  }
</style>