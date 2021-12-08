<template>
  <div class="slider">
    <slot name="items">

    </slot>
    <div class="buttons">
      <div class="left" v-on:click="scrollSliderLeft">
        <
      </div>
      <div class="right" v-on:click="scrollSliderRight">
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderComponent",
  props: {
    animeList: Object,
  },
  methods: {
    scrollSliderLeft(e){
      let slider = e.target.parentNode.parentNode;
      slider.scrollLeft -= 1130
    },
    scrollSliderRight(e){
      let slider = e.target.parentNode.parentNode;
      slider.scrollLeft += 1130
    }
  }
}
</script>

<style>
  .slider{
    display: flex;
    justify-content: flex-start;
    overflow-y: hidden;
    scroll-behavior: smooth;
    gap: 12px;
    padding-top: 8px;
    padding-bottom: 16px;
    white-space: nowrap;
  }
  .slider>.buttons{
    font-size: 4rem;
    color: aliceblue;
  }
  .slider>.buttons>div{
    position: absolute;
    background: var(--block-color);
    border-radius: 50%;
    opacity: 75%;
    top: 25%;
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

  }
  .slider>.buttons>.left{
    left: 0;
  }
  .slider>.buttons>.right{
    right: 0;
  }

  .slider::-webkit-scrollbar {
    height: 1.2em
  }
  .slider>.catalog-entry{
    flex: none;
  }

  @media (max-width: 390px) {
    .slider>.catalog-entry{
      width: 56%;
    }
  }
  @media (min-width: 391px) {
    .slider>.catalog-entry{
      width: 32%;
    }
  }
  @media (min-width: 768px) {
    .slider>.catalog-entry{
      width: 25%;
    }
  }
  @media (min-width: 992px) {
    .slider>.catalog-entry{
      width: 18%;
    }
  }
  @media (min-width: 1200px) {
    .slider>.catalog-entry{
      width: 13.5%;
    }
  }
</style>