<!--
  - Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
  -
  - 23.7.2021
  -->

<template>
  <div class="not-found">
    <img src="/assets/images/nya404.webp" alt="nya 404" class="img-fluid w-25 mb-4 mx-auto d-block">
    <h1>{{$t('message.404.title')}}</h1>
    <p class="text-center">{{$t('message.404.text')}}</p>
    <router-link to="/" class="btn d-block">{{$t('back home')}}</router-link>
  </div>
</template>

<script>
export default {
  name: "index",

  mounted() {
  },

  methods: {
  }

}
</script>
