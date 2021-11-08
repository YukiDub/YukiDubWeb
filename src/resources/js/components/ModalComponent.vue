<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          {{title}}
        </slot>
      </header>

      <section class="modal-body">
        <slot name="body">
          <div class="row">
            <slot>
              ...
            </slot>
          </div>
        </slot>
      </section>
      <footer class="modal-footer">
        <button
            type="button"
            class="btn"
            @click="close"
        >
          Закрыть
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  methods: {
    close() {
      this.$emit('close');
    },
  },
  props: {
    title: String,
  }
}
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.43);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #353944;
  box-shadow: 2px 2px 20px 1px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 60%;
  position: initial;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  color: black;
  justify-content: space-between;
}

.modal-footer {
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  color: #FFFFFF;
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #FFFFFF;
  background: transparent;
}
</style>