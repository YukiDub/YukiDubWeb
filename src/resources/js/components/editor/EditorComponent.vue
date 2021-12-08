<template>
  <div class="editor-container">
    <div class="header">
      <div class="buttons-section text-types">
        <i class="bi bi-type-bold"></i>
        <i class="bi bi-type-italic"></i>
        <i class="bi bi-type-h1"></i>
        <i class="bi bi-type-h2"></i>
        <i class="bi bi-type-h3"></i>
      </div>
      <div class="buttons-section text-justify">
        <i class="bi bi-justify"></i>
        <i class="bi bi-justify-left"></i>
        <i class="bi bi-justify-right"></i>
      </div>
      <i class="bi bi-quote"></i>
      <i class="bi bi-link"></i>
      <i class="bi bi-card-image"></i>
    </div>
    <textarea>

    </textarea>
  </div>
</template>

<script>
export default {
  name: "EditorComponent"
}
</script>

<style scoped>
.editor-container > .header{
  display: flex;
  font-size: 2rem;
  gap: 1rem;
  color: aliceblue;
  padding-bottom: .5rem;
}
.editor-container > .header i:hover{
  color: var(--focus-color);
}
.editor-container > .header >.buttons-section {
  padding-right: 1rem;
  border-right: 2px solid var(--focus-color);
}
.editor-container > textarea{
  width: 100%;
  height: 10rem;
  border: none;
  background: var(--block-color);
  color: var(--text-color);
}
.editor-container > textarea:hover{
  border: none;
}
</style>