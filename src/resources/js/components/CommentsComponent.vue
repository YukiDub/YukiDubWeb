<template>
  <div class="comments">
    <div class="header">
      <p class="title">Комментарии</p>
      <div class="buttons">
        <button class="button">Все</button>
        <button class="button">Популярные</button>
      </div>
    </div>
    <div class="content">
      <p class="text-center">Загрузить более старые комментарии</p>
      <div class="comment-item">
        <div class="header">
          <img src="/assets/images/avatars/default.png" alt="Admin">
          <p>Admin</p>
          <p class="date">10 минут назад</p>
        </div>
        <div class="comment">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, officiis tenetur? Iure, consectetur suscipit quos earum dolore dolorum expedita deserunt temporibus nulla nostrum nobis, dignissimos delectus id tempora?
            Ea, deserunt!
          </p>
        </div>
      </div>
      <div class="comment-item">
        <div class="header">
          <img src="/assets/images/avatars/default.png" alt="Admin">
          <p>Admin</p>
          <p class="date">3 минуты назад</p>
        </div>
        <div class="comment">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, officiis tenetur? Iure, consectetur suscipit quos earum dolore dolorum expedita deserunt temporibus nulla nostrum nobis, dignissimos delectus id tempora?
            Ea, deserunt!
          </p>
        </div>
      </div>
      <div class="comment-item">
        <div class="header">
          <img src="/assets/images/avatars/default.png" alt="Admin">
          <p>Admin</p>
          <p class="date">1 минуту назад</p>
        </div>
        <div class="comment">
          <p>
            Abnoba, ventus, et adgium. Abnoba, ventus, et adgium. Abnoba, ventus, et adgium. Abnoba, ventus, et adgium. Abnoba, ventus, et adgium. Abnoba, ventus, et adgium. Abnoba, ventus, et adgium. Abnoba, ventus, et adgium.
          </p>
        </div>
      </div>
    </div>
    <div class="send">
      <editor>

      </editor>
      <button type="button">
        Отправить
      </button>
    </div>
  </div>
</template>

<script>
import editor from './editor/EditorComponent'
export default {
  name: "CommentsComponent",
  components: {
    editor
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
.comments >.content > .comment-item > .header{
  display: flex;
  align-content: center;
  gap: 2rem;
  margin-bottom: 0.8rem;
}
.comments >.content > .comment-item > .header > p{
  margin-top: auto;
  margin-bottom: auto;
}
.comments >.content > .comment-item > .header > .date{
  margin-left: auto;
}
</style>