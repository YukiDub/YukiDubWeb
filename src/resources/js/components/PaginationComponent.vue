<template>
  <div class="pagination">
    <div class="button left" v-on:click="back()">
      <p><i class="bi bi-arrow-left-short"></i>Назад</p>
    </div>
    <div class="center" v-on:click="callChangePage">
      <p>страница {{selectedPage}} из {{lastPage}}</p>
    </div>
    <div class="button right" v-on:click="next()">
      <p>Вперед<i class="bi bi-arrow-right-short"></i></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: ["selectedPage", "lastPage"],
  computed: {
    selectedPageLocal: {
      get: function() {
        return this.selectedPage
      },
      set: function(value) {
        return this.$emit('pageChange', value);
      }
    }
  },
  model: {
    prop: 'selectedPage',
    event: 'pageChange'
  },
  methods: {
    callChangePage(e){
      e.target.innerHTML = "<p>страница <input type='number' min='1'> из " + this.selectedPageLocal + "</p>"
    },
    closeChangePage(e){

    },
    back(){
      this.selectedPageLocal = this.selectedPageLocal > 1 ? this.selectedPageLocal - 1 : 1
    },
    next(){
      this.selectedPageLocal = this.selectedPageLocal < this.lastPage ? this.selectedPageLocal + 1 : this.selectedPageLocal
    }
  }
}
</script>

<style scoped>
.pagination{
  overflow: hidden;
  background: var(--block-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1rem;
  padding-top: 12px;
  padding-left: 11px;
  padding-right: 11px;
  border-radius: 14px;
}
.pagination>.button{
cursor: pointer;
}
</style>