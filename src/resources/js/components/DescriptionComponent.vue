<template>
  <div class="full-description">
    <p>Описание:</p>
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">русское</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">английское</button>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        <p class="text">{{ru}}</p>
        <p>Автор:
          <a v-if="ru_source" :href="ru_source" class="author" target=»_blank>{{ru_source.split('/')[2]}}</a>
          <a v-else class="author">Автор неизвестен</a>
        </p>
      </div>
      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" v-if="en">
        <p class="text">{{en}}</p>
        <p>Автор:
          <a v-if="en_source" class="author" :href="en_source" target=»_blank>{{en_source.split('/')[2]}}</a>
          <a v-else class="author">Автор неизвестен</a>
        </p>
      </div>
      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" v-else>
        <p class="text">Нет описания на английском</p>
        <p class="author"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescriptionComponent",
  props: {
    en: String,
    en_source: String,
    ru: String,
    ru_source: String,
  }
}
</script>

<style scoped>
.full-description .text {
  height: 168px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.full-description .tab-pane {
  min-height: 230px;
}
</style>