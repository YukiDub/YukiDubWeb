<template>
  <div class="card">
    <div class="row ">
      <div class="col mx-auto ">
        <p class="title">{{title}}</p>
        <p class="font-weight-bold ">{{text}}</p>
      </div>
    </div>
    <div class="users d-flex" v-if="users">
      <div class="avatar" v-for="user in users">
        <router-link :title="'Перейти в профиль пользователя ' + user.name" :to="'/users/' + user.id"><img class="img-fluid" :src="user.avatar_ul" alt="avatar-img"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      mounted() {
          console.log('Catalog entry component mounted.')
          console.log(this.users)
      },
      props: {
        "title": String,
        "text":  String,
        "users": {
          type: [Array, null],
          default: null
        },
        "url": {
          type: [String, null],
          default: null
        }
      },
    }
</script>


<style>

</style>
