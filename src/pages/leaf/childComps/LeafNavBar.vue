<template>
  <div id="lef-nav-bar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">
        {{childCategoryItem.cateName}}
      </div>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "LeafNavBar",
    components: {
      NavBar
    },
    props: {
      childCategoryItem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      backClick() {
        //console.log("backClick");
        this.$router.back()
      }
    }
  }
</script>

<style scoped>

  #lef-nav-bar {
    background-color:  #f6f6f6;
  }

  .back img {
    margin-top: 10px;
  }

</style>
