<template>
  <div class="page-header">
    <div class="logo ms-4 d-none d-xl-flex">
      <router-link :to="{name: 'home'}" aria-current="page">
        {{title}}
      </router-link>
    </div>
    <div class="header-search ml-2">
      <label class="search-line">
        <input placeholder="ПОИСК" type="search" class="text-center search-box">
      </label>
    </div>

    <div class="user-wrapper">
      <div v-if="isAuth" class="header-user-panel">
        <div class="header-drop xs-drop">
          <div class="icon-inline">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path fill="#797C84" d="M9 0c4.95 0 9 4.05 9 9s-4.05 9-9 9-9-4.05-9-9 4.05-9 9-9zm-.15 4.5a.75.75 0 0 0-.75.75V10a.5.5 0 0 0 .5.5h4.24a.66.66 0 0 0 0-1.32H9.6V5.25a.75.75 0 0 0-.75-.75z"></path>
            </svg>
          </div>
          <div class="history drop-menu">
            <div class="drop-menu-body">
              <div class="header">Уведомления о новых сериях</div>
              <div class="body">
                <div class="empty">Новых серий пока нет.</div>
              </div>

            </div>
          </div>
        </div>
        <div class="header-drop xs-drop">
          <div class="icon-inline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18">
              <path fill="#797C84" fill-rule="evenodd" d="M8 18c-1.354 0-2.5-.7-2.5-2h5c0 1.3-1.146 2-2.5 2zm5.996-7c0 1.5 2.004 1.5 2.004 2.5 0 .5 0 1.5-2.104 1.5H1.984C0 15 0 14 0 13.5c0-1 1.984-1 2-2.5V8c0-4 2.097-6.5 5-6.9V1c0-.6.5-1 1-1s1 .4 1 1v.1c2.903.4 4.996 2.9 4.996 6.9v3z"></path>
            </svg>
          </div>

          <div class="notifications drop-menu">
            <div class="drop-menu-body">
              <div class="header">Уведомления</div>
              <div class="body">

              </div>
            </div>
          </div>
        </div>
        <div class="header-drop user-drop">
          <a class="avatar">
            <img src="/assets/images/avatars/default.png" :alt="getUserLogin.name">
          </a>
          <div class="header-user-menu drop-menu">
            <router-link class="line" :to='{name: "userProfile", params: {name: getUserLogin.name}}'>Мой профиль</router-link>
            <a href="#" class="line">
              Друзья
            </a>
            <a href="#" class="line">
              Сообщения
            </a>
            <a href="#" class="line">
              Настройки
            </a>
            <a href="#" class="line">
              Модерация
            </a>
            <a v-on:click="logout()" class="line">
              Выйти
            </a>
          </div>
        </div>
        <div class="backdrop"></div>
        <div class="substrate"></div>
      </div>
      <a v-else class="button-auth" v-on:click="auth()">
        <span>Авторизация</span>
        <div class="icon-inline">
          <svg width="17px" height="18px" viewBox="0 0 17 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path d="M8.125,9.81818188 C16.25,9.81818188 16.25,14.2363637 16.25,16.5272728 C16.25,17.6727274 15.925,18.0000001 13.975,18.0000001 L2.4375,18.0000001 C0.4875,18.0000001 5.5067062e-14,17.6727274 5.5067062e-14,16.5272728 L0.000729394906,16.1872748 C0.0162898196,13.7002532 0.36380597,9.81818188 8.125,9.81818188 Z M8.125,3.99680289e-14 C9.91992544,3.99680289e-14 11.375,1.36363583 11.375,4.09090912 C11.375,6.81818241 9.91992544,8.18181824 8.125,8.18181824 C6.33007456,8.18181824 4.875,6.81818241 4.875,4.09090912 C4.875,1.36363583 6.33007456,3.99680289e-14 8.125,3.99680289e-14 Z" id="Combined-Shape" fill="#797C84"></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
    export default {
      name: "PageHeaderComponent",
      data() {
        return {
          title:"ГЛАВНАЯ",
          user: {

          }
        }
      },
      computed: mapGetters(['getUserLogin', 'isAuth']),
      mounted() {

      },
      methods: {
        ...mapActions(['login', 'logout']),
        auth(){
          let popup = window.open('/auth/login', 'Авторизация');
          popup.addEventListener("message", (e)=>{
            setTimeout(()=>{
              popup.addEventListener("message", (e)=>{
                this.login({
                  access_token: e.data.access,
                  refresh_token: e.data.refresh
                })
              })
            }, 20000)
          })
        }
      },
      watch: {
        $route(to, from) {
          this.title = to.meta.headerName.toUpperCase();
        }
      }

    }
</script>


<style>
.page-header >.logo{
  width: 4vh;
}
</style>
