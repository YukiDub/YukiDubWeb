<template>
  <div class="col catalog-entry" v-on:click="active = !active" v-bind:class="{active: active}">
    <div class="poster-container">
      <img class="poster" v-lazy-load-img :data-src="poster_url" alt="poster">
      <span class="score">
        {{score}} <i class="bi bi-star-fill"></i>
      </span>
    </div>
    <div class="hover">
      <div class="d-flex align-items-start flex-column">
        <p class="title" :title="fullName">{{slicedName}}</p>
        <p>
          {{$t('type')}} : <router-link class="tags" v-for="type in type" v-bind:key="type.id" :to="type.url">{{type.name}} </router-link> <br/>
          {{studios ? $t('studios') + ": " : ""}} <router-link class="tags" v-for="studio in studios" v-bind:key="studio.id" to="#">{{studio.name}} </router-link> <br v-if="studios"/>
          {{$t('status')}} : <a href="#">{{$t('status_list.' + status)}}</a><br/>
          {{genres ? $t('genres') + ":" : ""}} <router-link v-if="genres" class="tags" v-for="genre in genres" v-bind:key="genre.id" :to="genre.url">{{genre['name_' + getLocale]}} </router-link>
        </p>
      </div>
      <div class="d-flex flex-column">
        <router-link class="button" type="button" :to="route">{{$t('view more')}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
      mounted() {
        this.normalizeName();
      },
      data(){
        return {
          fullName: "",
          slicedName: "",
          active: false,
        }
      },

      computed: mapGetters(['getLocale']),
      watch: {
        name:{
          handler(){
            this.normalizeName()
          },
          deep: true
        }
      },
      props: {
        "id":         Number,
        "route":       {
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
        "score":     {
          type: [Number, undefined],
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
    margin-bottom: 0.8vh;
  }
  .catalog-entry > .poster-container{
    position: relative;
    padding-bottom: 157.25%;
    height: 0;
    overflow: hidden;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
  }
  .catalog-entry >.hover>div>p{
    white-space: initial;
  }
  .catalog-entry >.hover>.d-flex.align-items-start.flex-column{
    height: 81%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .catalog-entry > .poster-container> .poster{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-width: 0;
    outline-width: 0;
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
    background: linear-gradient(to bottom, #181e25, #000000);
    opacity: 0.95;
    -moz-box-shadow:0 5px 5px rgba(0,0,0,0.3);
    -webkit-box-shadow:0 5px 5px rgba(0,0,0,0.3);
    box-shadow:0 5px 5px rgba(0,0,0,0.3);
    font-size: small;
    border-radius: 2.8%;
  }
  .catalog-entry > .hover > .d-flex > .button{
    border: none;
    text-align: center;
    color: var(--text-color);
    border-radius: 7px;
    padding: .5rem 2rem;
    background: var(--focus-color);
  }
  @media (max-width: 575px) {
    .catalog-entry:not(.active) .hover {
      pointer-events: none;
    }
  }
  .catalog-entry:hover .hover{
    display:block;
  }
  .catalog-entry > .poster-container> .score{
    z-index: 99999;
    position: absolute;
    right: 0;
    top: 0;
    color: aliceblue;
    padding: 0 2px 0 4px;
    background: #1f2631;
    font-size: 1rem;
  }
</style>
