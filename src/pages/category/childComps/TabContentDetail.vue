<template>
  <div id="tab-content-detail">
    <goods-list :goodsList="childCategoryDetail"/>
  </div>
</template>

<script>

  import GoodsList from 'components/content/goods/GoodsList'

  export default {
    name: "TabContentDetail",
    components: {
      GoodsList
    },
    props: {
      childCategoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
