<template>
  <div class="col catalog-entry">
    <div>
      <img class="img-fluid" :src="poster_url" width="224px" alt="poster">
    </div>
    <div class="hover">
      <div class="d-flex align-items-start flex-column" style="height: 200px;">
        <p class="title" :title="fullName">{{slicedName}}</p>
        <p>
          Тип: <router-link class="tags" v-for="type in type" v-bind:key="type.id" :to="type.url">{{type.name}} </router-link> <br/>
          {{studios ? "Студия:" : ""}} <router-link class="tags" v-for="studio in studios" v-bind:key="studio.id" to="#">{{studio.name}} </router-link> <br v-if="studios"/>
          Статус: <a href="#">{{status}}</a><br/>
          {{genres ? "Жанры:" : ""}} <router-link v-if="genres" class="tags" v-for="genre in genres" v-bind:key="genre.id" :to="genre.url">{{genre.name_en}} </router-link>
        </p>
      </div>
      <div class="d-flex flex-column" style="height: 200px;">
        <router-link class="btn" type="button" :to="'/animes/' + id">Подробнее</router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      mounted() {
        this.normalizeName()
      },
      data(){
        return {
          fullName: "",
          slicedName: "",
        }
      },

      props: {
        "id":         Number,
        "link":       {
          type: [Object, undefined],
          default: null
        },
        "name":       String,
        "status":     String,
        "type":       Array,
        "genres":     Array,
        "poster_url": String,
        "studios":    {
          type: [Array, undefined],
          default: undefined
        },
        "rating":     {
          type: [Array, undefined],
          default: undefined
        }
      },

      methods: {
        normalizeName() {
          this.fullName = this.name;
          if (this.name.length > 29){
            this.slicedName = this.name.slice(0,29) + '...';
          }
          else{
            this.slicedName = this.name;
          }
        }
      }
    }
</script>

<style>
  .catalog-entry .hover .title {
    font-size: medium;
    font-weight: bold;
    color: #FFFFFF;
    margin-bottom: 0.8vh;
  }
  .catalog-entry img {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
    height: 272px;
  }
  .catalog-entry {
    position:relative;
  }
  .catalog-entry .hover {
    display:none;
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    padding: .8rem;
    background: linear-gradient(to bottom, #101217, #1F232E);
    opacity: 0.95;
    -moz-box-shadow:0 5px 5px rgba(0,0,0,0.3);
    -webkit-box-shadow:0 5px 5px rgba(0,0,0,0.3);
    box-shadow:0 5px 5px rgba(0,0,0,0.3);
    font-size: small;
    border-radius: 2.8%;
  }
  .catalog-entry:hover .hover{
    display:block;
  }
  /* Small devices (landscape phones, 576px and up) */
  @media (max-width: 1300px) {
    .catalog-entry img {
      height: auto;
    }
  }
</style>
