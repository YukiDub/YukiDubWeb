<template>
  <div class="profile">
    <div class="header" v-if="!loading">
      <div class="row">
        <div class="order-last order-lg-0 col-12 col-lg-2 header">
          <div class="friends mb-3">
            <p class="text-center">Друзья</p>
            <div class="list empty" v-if="friends.length === 0">
              <p>У пользователя пока что нет друзей</p>
              <p><i class="bi bi-person-x-fill"></i></p>
            </div>
            <div v-else class="list">
              <div class="friend" v-for="friend in friends.slice(0, 20)" :key="friend.id" :title="friend.name">
                <img class="avatar" src="/assets/images/avatars/default.png" :alt="friend.name">
                <div class="hover">
                  <router-link :to="{name: 'user.profile', params: {name: friend.name}}" class="text">подробнее</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="communities mb-3">
            <p class="text-center">Сообщества</p>
            <div class="list empty" v-if="community.length === 0">
              <p>Пользователь ещё не вступал ни в одно из сообществ</p>
              <p><i class="bi bi-x-lg"></i></p>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-7 footer mb-4 mb-lg-0">
          <div class="row">
            <img :src="user.avatar_url" :alt="user.name" class="img-fluid avatar mx-auto mb-4">
            <h1 class="user-name">{{user.name}}</h1>
            <div class="status-block">
              <p class="text-center m-0">Сейчас в сети </p>
            </div>
            <div class="buttons">
              <a href="#" title="Друзья">
                <i class="bi bi-people-fill"></i>
              </a>
              <a href="#" title="Сообщения">
                <i class="bi bi-envelope"></i>
              </a>
              <a href="#" title="Настройки">
                <i class="bi bi-gear-fill"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 history mb-4 mb-lg-0">
          <div class="box-background">
            <p class="text-center">История</p>
          </div>
          <div class="history-item" v-for="historyItem in history" :key="historyItem.id">
            <div class="col-3">
              <img :src="historyItem.image_url" :alt="historyItem.title">
            </div>
            <div class="col information">
              <p class="title"> {{historyItem.title}} </p>
              <p class="action"> {{ historyItem.action }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header loading" v-else>
      <div class="row">
        <div class="order-last order-lg-0 col-12 col-lg-2 header">
          <div class="friends mb-3">
            <div class="box-background">
              <p class="text-center">Друзья</p>
            </div>
            <div class="list">
              <div class="friend" v-for="n in 22">
                <div class="avatar"></div>
              </div>

            </div>
          </div>
          <div class="communities mb-3">
            <div class="box-background">
              <p class="text-center">Сообщества</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-7 footer mb-4 mb-lg-0">
          <div class="row">
            <div class="mx-auto mb-4 avatar"></div>
            <h1 class="user-name">идет загрузка</h1>
            <p class="text-center">идет загрузка <i class="bi bi-check"></i></p>
            <div class="buttons">
              <a href="#" title="Друзья">
                <i class="bi bi-people-fill"></i>
              </a>
              <a href="#" title="Сообщения">
                <i class="bi bi-envelope"></i>
              </a>
              <a href="#" title="Настройки">
                <i class="bi bi-gear-fill"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 history mb-4 mb-lg-0">
          <div class="box-background">
            <p class="text-center">История</p>
          </div>
          <div class="history-item" v-for="i in 3"></div>
        </div>
      </div>
    </div>

    <section class="content">
      <div class="stats row">
        <div class="col-7">
          <div class="graph">

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "userProfile",
  beforeRouteUpdate(to, from, next){
    this.loading = true;
    next()
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
          name: 'Test1',
          avatar_url: '',
        },
        {
          id: 2,
          name: 'Test2',
          avatar_url: '',
        },
        {
          id: 3,
          name: 'Test3',
          avatar_url: '',
        },
        {
          id: 4,
          name: 'Test4',
          avatar_url: '',
        },
        {
          id: 5,
          name: 'Test5',
          avatar_url: '',
        },
        {
          id: 6,
          name: 'Test6',
          avatar_url: '',
        },
        {
          id: 7,
          name: 'Test7',
          avatar_url: '',
        },
        {
          id: 9,
          name: 'Test9',
          avatar_url: '',
        },
        {
          id: 10,
          name: 'Test10',
          avatar_url: '',
        },
        {
          id: 11,
          name: 'Test11',
          avatar_url: '',
        },
        {
          id: 12,
          name: 'Test12',
          avatar_url: '',
        },
        {
          id: 13,
          name: 'Test13',
          avatar_url: '',
        },
        {
          id: 14,
          name: 'Test14',
          avatar_url: '',
        },
        {
          id: 15,
          name: 'Test15',
          avatar_url: '',
        },
        {
          id: 16,
          name: 'Test16',
          avatar_url: '',
        },
        {
          id: 17,
          name: 'Test17',
          avatar_url: '',
        },
        {
          id: 18,
          name: 'Test18',
          avatar_url: '',
        },
        {
          id: 19,
          name: 'Test19',
          avatar_url: '',
        },
        {
          id: 20,
          name: 'Test20',
          avatar_url: '',
        },
        {
          id: 21,
          name: 'Test21',
          avatar_url: '',
        },
        {
          id: 22,
          name: 'Test22',
          avatar_url: '',
        }
      ],
      community: [

      ],
      history: [
        {
          id:        1,
          title:     'Атака тиатнов 3. Часть 2',
          action:    'просмотрена 1 серия',
          date:      '',
          image_url: '/storage/images/animes/preview/15.jpg'
        },
        {
          id:        2,
          title:     'Атака тиатнов 3. Часть 2',
          action:    'просмотрена 2 серия',
          date:      '',
          image_url: '/storage/images/animes/preview/16.jpg'
        },
        {
          id:        3,
          title:     'Атака тиатнов 3. Часть 2',
          action:    'просмотрена 3 серия',
          date:      '',
          image_url: '/storage/images/animes/preview/17.jpg'
        },
      ],
      loading: false,

    }
  }
}
</script>

<style scoped>
.profile>.header{
  background: var(--block-color);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.21);
  margin-bottom: 2.6rem;
}
.profile>.header>.row>.header>.friends>.list.empty,
.profile>.header>.row>.header>.communities>.list.empty{
  text-align: center;
}
.profile>.header>.row>.header>.friends>.list{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 8rem;
  overflow: hidden;
}
.profile>.header>.row>.header>.friends>.list > .friend > .avatar{
  flex: 1 1 auto;
  margin: 0 1px 2px 2px;
  width: 3.66rem;
}
.profile>.header>.row>.header>.friends>.list > .friend{
  position: relative;
}
.profile>.header>.row>.header>.friends>.list > .friend:hover .hover{
  display: block;
}
.profile>.header>.row>.header>.friends>.list > .friend > .hover{
  display: none;
  position: absolute;
  left: 1px;
  top: 0;
  right: 0;
  bottom: 0;
  font-size: 0.6rem;
  background: black;
  width: 60px;
  height: 60px;
  border-radius: 70%;
  opacity: 86%;
}
.profile>.header>.row>.header>.friends>.list > .friend > .hover > .text{
  text-align: center;
  color: #FFFFFF;
  position: relative;
  top: 38%;
  left: 8%;
}
.profile>.header>.row>.footer>.row>.avatar{
  height: 112px;
  width: 132px;
}
.profile>.header>.row>.footer>.row>.status-block{
  width: 32%;
  margin-left: 34%;
  margin-bottom: 1.4rem;
}
.profile>.header>.row>.footer>.row>.buttons{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.profile>.header>.row>.footer>.row>.buttons > a{
  margin-right: 1rem;
}
.profile>.header>.row>.footer>.row>.buttons > a > i{
  font-size: 1.6rem;
  color: #afafaf;
}
.profile>.header>.row>.footer>.row>.buttons > a > i:hover{
  color: #22acf2;
}
.profile>.header>.row>.footer>.row>.user-name{
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  color: #AFAFAF;
  margin-bottom: 1.4rem;
}
.history>.history-item{
  display: flex;
  border-radius: 6px;
  padding: .4rem;
  margin-bottom: 0.6rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.18));
}
.history>.history-item>div>img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: fill;
  margin-top: 3%;
}
.history>.history-item >.information>.action{
  text-align: center;
  font-size: 0.8rem;
}
.history>.history-item>.information>.title{
  text-align: center;
  font-weight: 600;
  margin: 0;
}
.profile>.header.loading>.row>.header>.friends>.list>.friend>.avatar{
  background: #363944;
  box-shadow: 0 -200px 100px -120px #1f2631 inset;
  border-radius: 50%;
  animation: loading 3s infinite alternate;
  height: 62px;
  width: 62px;
}
.profile>.header.loading>.row>.footer>.row>.avatar{
  background: #363944;
  box-shadow: 0 -200px 100px -120px #1f2631 inset;
  border-radius: 50%;
  animation: loading 3s infinite alternate;
  height: 107px;
  width: 107px;
}
.profile>.header.loading>.row>.history>.history-item{
  background: #363944;
  box-shadow: 0 -200px 100px -120px #1f2631 inset;
  animation: loading 3s infinite alternate;
  height: 27%;
  width: 100%;
}
@keyframes loading {
  50% {
    background: #1f2631;
    box-shadow: 0 -200px 100px -100px #363944 inset;
  }
  100% {
    background: #363944;
    box-shadow: 0 -200px 100px -100px #1f2631 inset;
  }
}
</style>