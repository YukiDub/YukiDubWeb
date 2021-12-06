<template>
  <div class="navigation">
    <router-link :to="{name: 'home'}" class="logo nav-icon" title="Главная" aria-current="page">
      <i class="bi bi-house-fill"></i>
    </router-link>
    <div class="menu-buttons">
      <div class="main-buttons">
        <router-link
            :to="{name: 'animes'}"
            title="Аниме"
            :class="{'router-link-exact-active router-link-active': $route.name ==='anime'}"
        >
          <div class="icon-inline button-link play">
            <i class="bi bi-play-fill"></i>
          </div>
        </router-link>
        <a href="#" class="" title="Манга">
          <div class="icon-inline button-link manga">
            <i class="bi bi-book-fill"></i>
          </div>
        </a>
        <router-link
            :class="{'router-link-exact-active router-link-active': $route.name ==='user.titles' || $route.name === 'user.friends' || $route.name === 'user.profile'}"
            :to="{name: 'users'}" title="Пользователи">
          <div class="icon-inline button-link users">
            <i class="bi bi-people-fill"></i>
          </div>
        </router-link>

        <a href="#" class="" title="Новости"><div class="wrapper-news"><div class="new"></div><div class="icon-inline button-link about"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path fill="#797C84" fill-rule="evenodd" d="M16.797 0C17.461 0 18 .579 18 1.295v14.779C18 17.138 17.185 18 16.205 18H1.19C.54 18 0 17.427 0 16.72V5.143h2.4v8.353c0 .347.268.647.598.647H3.6V1.295C3.6.58 4.147 0 4.803 0h11.994zm-5.386 12.857H7.79c-.33 0-.589.288-.589.643 0 .345.264.643.589.643h3.622c.33 0 .589-.288.589-.643 0-.345-.264-.643-.589-.643zm2.4-2.571H7.789c-.316 0-.589.288-.589.643 0 .344.264.642.59.642h6.02c.317 0 .59-.287.59-.642 0-.345-.264-.643-.59-.643zm0-6.429H7.789c-.316 0-.589.282-.589.63V8.37c0 .354.264.631.59.631h6.02c.317 0 .59-.282.59-.63V4.487c0-.354-.264-.63-.59-.63z"></path>
        </svg>
        </div></div></a>
      </div>

      <div class="other-buttons">
        <div class="button" @click="showModal">
          <div class="icon-inline settings">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19">
        <path fill="#797C84" fill-rule="nonzero" d="M15.73 10.078c0-.275.091-.55.091-.916 0-.367 0-.642-.091-.916l1.924-1.558c.183-.183.183-.366.091-.55l-1.832-3.206c-.092-.092-.275-.183-.55-.092l-2.29.916c-.458-.366-1.008-.641-1.558-.916L11.15.458C11.241.183 10.966 0 10.783 0H7.118c-.183 0-.458.183-.458.366L6.293 2.84c-.55.183-1.008.55-1.557.916L2.537 2.84c-.275-.091-.458 0-.641.183L.063 6.23c-.091.092 0 .366.184.55L2.17 8.246c0 .274-.091.55-.091.916s0 .641.091.916L.247 11.635c-.184.184-.184.367-.092.55l1.832 3.207c.092.091.275.183.55.091l2.29-.916c.458.367 1.008.641 1.558.916l.366 2.382c0 .184.184.367.458.367h3.665c.183 0 .458-.183.458-.367l.367-2.382c.55-.275 1.099-.55 1.557-.916l2.29.916a.44.44 0 0 0 .55-.183l1.833-3.207c.091-.183.091-.458-.092-.55l-2.107-1.465zm-6.78 2.29c-1.74 0-3.206-1.466-3.206-3.206 0-1.741 1.465-3.207 3.206-3.207 1.74 0 3.207 1.466 3.207 3.207 0 1.74-1.466 3.206-3.207 3.206z"></path>
      </svg>
      </div></div></div>
    </div>
  </div>
</template>

<script>

import settingsModal from '../components/modals/settings-modal'
export default {
    methods:{
      showModal(){
        this.$modals.open({
          title: this.$t('basic site settings'),
          center: true,
          component: settingsModal
        })
      }
    }
}
</script>

<style>
  .router-link-exact-active.router-link-active > i{
    color: #3490dc;
  }
  .router-link-exact-active.router-link-active > .icon-inline > i{
    color: #3490dc;
  }
  .router-link-exact-active.router-link-active > .icon-inline > svg{
    color: #3490dc;
  }
</style>