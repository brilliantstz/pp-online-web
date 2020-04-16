<template>
  <div id="tab-menu">
    <scroll class="content" ref="scroll">
      <div class="menu-list">
        <div class="menu-list-item"
             :class="{active: index===currentIndex}"
             v-for="(item, index) in parentCategory"
             :key="index"
             @click="itemClick(index)">
          {{item.cateName}}
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>

  import Scroll from 'components/common/scroll/Scroll'

	export default {
		name: "TabMenu",
    components: {
      Scroll
    },
    props: {
		  parentCategory: {
		    type: Array,
        default() {
		      return []
        }
      },
      parentCategoryIndex: {
        default() {
          return 0
        }
      }
    },
    data() {
		  return {
		    currentIndex: this.parentCategoryIndex
      }
    },
    created() {

    },
    methods: {
		  itemClick(index) {
        this.currentIndex = index
        this.$emit('selectItem', index)
      }
    }
	}
</script>

<style scoped>
  #tab-menu {
    height: 100%;
    width: 70px;
    position: relative;
    background-color: #f6f6f6;

  }

  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }

  .menu-list-item.active {
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
  }

  .content {
    overflow: hidden;

    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

  }
</style>
