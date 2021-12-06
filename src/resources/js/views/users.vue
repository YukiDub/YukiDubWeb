<template>
  <div class="friends-page">
    <div class="header">
      <p class="button back" v-on:click="$router.go(-1)"><i class="bi bi-arrow-left-short"></i>вернуться назад</p>
      <p class="p-title">Друзья пользователя {{user.name}}</p>
    </div>
    <div class="content entry-list">
      <div class="friend" v-for="friend in friends.slice(0, 20)" :key="friend.id" :title="friend.name">
        <img class="avatar" src="/assets/images/avatars/default.png" :alt="friend.name">
        <div class="text-center">
          <router-link :to="{name: 'user.profile', params: {name: friend.name}}">{{friend.name}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "friends",
  mounted() {
    console.log(this.$route.name)
  },
  data(){
    return {
      user: {
        id: 1,
        name: this.$route.params.name,
        avatar_url: '/assets/images/avatars/default.png',
      },
      friends: [
        {
          id: 1,
          name: "test 1",
          avatar_url: '/assets/images/avatars/default.png',
        },
        {
          id: 2,
          name: "test 2",
          avatar_url: '/assets/images/avatars/default.png',
        },
        {
          id: 3,
          name: "test 3",
          avatar_url: '/assets/images/avatars/default.png',
        }
      ]
    }
  }
}
</script>

<style scoped>
.friends-page > .header{
  display: flex;
  align-items: center;
}
.friends-page > .header > .button.back{
  cursor: pointer;
  font-size: 1rem;
  flex: 1;
}
.friends-page>.content{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 12px;
  overflow: hidden;
}
.friends-page>.content .friend > .avatar{
  flex: 1 1 auto;
  width: 120px;
}
</style>