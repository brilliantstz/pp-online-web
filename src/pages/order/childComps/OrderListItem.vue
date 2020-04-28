<template>
  <div id="order-list-item">

  </div>
</template>

<script>
  export default {
    name: "OrderListItem",
    props: {
      order: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>

</style>
