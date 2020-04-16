import { debounce } from "./utils";

export const imgListenerMixin = {
  data() {
    return {
      // 监听图片
      itemImgListener: null
    };
  },
  mounted() {
    // 给防抖函数赋值一个新的函数
    const refresh = debounce(this.$refs.scroll.refresh, 100);

    // 接收发射的事件总线,并用监听图片变量保存
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  }
};
