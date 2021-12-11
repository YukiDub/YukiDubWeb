<template>
  <vue-editor v-model="text" id="editor"/>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  name: "EditorComponent",
  components: {
    VueEditor
  },
  data(){
    return {
      text: ""
    }
  }
}
</script>

<style scoped>
  #editor{
    color: var(--text-color);
  }
</style>