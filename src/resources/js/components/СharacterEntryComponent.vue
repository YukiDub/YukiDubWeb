<template>
  <div class="col ps-4 pe-4">
    <img :src="poster_url" class="img-thumbnail w-100" alt="Постер к аниме ...">
    <p class="text-center">{{name}}</p>
  </div>
</template>

<script>
export default {
  name: "CharacterEntryComponent",
  props: {
    name: String,
    poster_url: String,
  }
}
</script>

<style scoped>

</style>