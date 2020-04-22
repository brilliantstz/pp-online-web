<template>
    <div class="recommend">
      <div v-for="(item,index) in recommends" class="recommend-item">
        <a target="_blank" @click="parentCategoryClick(index)">
          <img :src="item.cateImageUrl" alt=""/>
          <div>{{item.cateTitle}}</div>
        </a>
      </div>
    </div>

</template>

<script>
    export default {
        name: "HomeRecommendView",
        props: {
          recommends :{
            type: Array,
            default() {
              return [];
            }
          }
        },
      methods: {
        parentCategoryClick(index) {
          //console.log(index)
          this.$router.push({
            path: '/category',
            query: {
              currentIndex: index
            }
          })
        }
      }
    }
</script>

<style scoped>
  .recommend {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eeeeee;

  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

</style>
