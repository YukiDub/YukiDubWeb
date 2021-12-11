<template>
  <section class="comments">
    <div class="header">
      <p class="title">Комментарии</p>
      <div class="buttons">
        <button class="button">Все</button>
        <button class="button">Популярные</button>
      </div>
    </div>
    <div class="content" v-if="comments.length > 0">
      <p class="show-more" @click="moreComments">Загрузить более старые комментарии</p>
      <div class="comment-item" v-for="comment in comments" :key="comment.id">
        <div class="header">
          <router-link :to="{name: 'user.profile', params: {name: comment.user.name}}"><img src="/assets/images/avatars/default.png" alt="Admin"></router-link>
          <router-link class="username" :to="{name: 'user.profile', params: {name: comment.user.name}}">{{comment.user.name}}</router-link>
          <p class="date">{{comment.time}}</p>
        </div>
        <div class="comment">
          <p class="text">{{comment.text}}</p>
          <button class="button more" @click="more">Подробнее</button>
        </div>
      </div>
    </div>
    <div class="content" v-else>
      <p class="text-start">Комментарии не найдены.</p>
    </div>
    <div class="send">
      <editor/>
      <button type="button">
        Отправить
      </button>
    </div>
  </section>
</template>

<script>
import editor from './editor/EditorComponent'
export default {
  name: "CommentsComponent",
  components: {
    editor
  },
  props: {
    comments:{
      type: Array
    },
    clickMoreComments: {
      type: Function,
      default() {
        return function () {};
      }
    }
  },
  methods: {
    more(e){
      e.target.
      e.target.style.overflow = "auto"
    },
    moreComments: function (){
      this.clickMoreComments();
    }
  }
}
</script>

<style scoped>
.comments{
  background: var(--navigation-color);
  border-radius: 8px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
}
.comments > .header{
  display: flex;
  align-content: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--focus-color);
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  flex-wrap: wrap;
}
.comments > .header > .title{
  font-size: large;
  font-weight: bolder;
  margin-top: auto;
  margin-bottom: auto;
}
.comments > .header > .buttons{
  margin-top: auto;
  margin-bottom: auto;
}
.comments > .header > .buttons > .button{
  background: none;
  border: none;
  color: var(--focus-color);
  font-size: large;
  font-weight: 700;
}
.comments >.content > .show-more{
  text-align: center;
  cursor: pointer;
}
.comments >.content > .show-more:hover{
  color: var(--focus-color);
}
.comments >.content > .comment-item > .header{
  display: flex;
  align-content: center;
  gap: 2rem;
  margin-bottom: 0.8rem;
}
.comments >.content > .comment-item > .header > .username{
  margin-top: auto;
  margin-bottom: auto;
}
.comments >.content > .comment-item > .header > .date{
  margin-left: auto;
}
.comments >.content > .comment-item > .comment > .text{
  max-height: 113px;
  overflow: hidden;
}
.comments >.content > .comment-item > .comment > .button.more{
  border: none;
  background: none;
  color: aliceblue;
  padding: 0 0 0 14px;
}
</style>