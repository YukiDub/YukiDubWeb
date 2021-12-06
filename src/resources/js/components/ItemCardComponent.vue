<template>
  <div class="card">
    <div class="row header">
      <div class="col mx-auto">
        <slot name="header">
        </slot>
      </div>
    </div>
    <div class="footer">
      <slot name="footer">
      </slot>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>


<style>
  .card {
    background: var(--block-color);
    border-radius: 10px;
    padding: 1rem;
    margin-top: 1rem;
    border-left: 14px solid #C8372D;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  .card .title{
    font-weight: 600;
    font-size: 20px;
  }
  .card .avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-left: 0.4rem;
  }
</style>
