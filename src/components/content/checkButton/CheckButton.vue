<template>
    <div class="check-button">
      <img v-if="isChecked" src="~assets/img/cart/checked.svg" alt="">
      <img v-else src="~assets/img/cart/unchecked.svg" alt="">
    </div>
</template>

<script>
    export default {
      name: "CheckButton",
      props: {
        isChecked: {
          type: Boolean,
          default: false
        }
      }
    }
</script>

<style scoped>

  .check-button>img {
    width: 20px;
    height: 20px;
  }

</style>
