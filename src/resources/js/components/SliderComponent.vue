<template>
  <div class="slider">
    <slot name="items">

    </slot>
  </div>
</template>

<script>
export default {
  name: "SliderComponent",
  props: {
    animeList: Object,

  }
}
</script>

<style>
  .slider{
    display: flex;
    justify-content: flex-start;
    overflow-y: hidden;
    gap: 12px;
    padding-top: 8px;
    padding-bottom: 16px;
    white-space: nowrap;
  }
  .slider>.catalog-entry{
    width: 12%;
    flex: none;
  }
</style>