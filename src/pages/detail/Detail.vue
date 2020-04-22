<template>
    <div id="detail">
      <detail-nav-bar @titleClick="titleClick" ref="nav"/>

      <scroll class="content" ref="scroll"
              :probe-type="3"
              :pullUpLoad="true"
              @scroll="contentScroll">

        <detail-swiper  :detailSwiperImages="detailSwiperImages"/>

        <detail-base-info :detailBaseInfo="goodsItemDetail"/>
        <detail-shop-info :shop-info="shopInfo" ref="shop"/>

        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
          <li>32</li>
          <li>33</li>
          <li>34</li>
          <li>35</li>
          <li>36</li>
          <li>37</li>
          <li>38</li>
          <li>39</li>
          <li>40</li>
          <li>41</li>
          <li>42</li>
          <li>43</li>
          <li>44</li>
          <li>45</li>
          <li>46</li>
          <li>47</li>
          <li>48</li>
          <li>49</li>
          <li>50</li>
          <li>51</li>
          <li>52</li>
          <li>53</li>
          <li>54</li>
          <li>55</li>
          <li>56</li>
          <li>57</li>
          <li>58</li>
          <li>59</li>
          <li>60</li>
          <li>61</li>
          <li>62</li>
          <li>63</li>
          <li>64</li>
          <li>65</li>
          <li>66</li>
          <li>67</li>
          <li>68</li>
          <li>69</li>
          <li>70</li>
          <li>71</li>
          <li>72</li>
          <li>73</li>
          <li>74</li>
          <li>75</li>
          <li>76</li>
          <li>77</li>
          <li>78</li>
          <li>79</li>
          <li>80</li>
          <li>81</li>
          <li>82</li>
          <li>83</li>
          <li>84</li>
          <li>85</li>
          <li>86</li>
          <li>87</li>
          <li>88</li>
          <li>89</li>
          <li>90</li>
          <li>91</li>
          <li>92</li>
          <li>93</li>
          <li>94</li>
          <li>95</li>
          <li>96</li>
          <li>97</li>
          <li>98</li>
          <li>99</li>
          <li>100</li>
        </ul>

      </scroll>

      <detail-bottom-bar @addToCart="addToCart"/>


      <back-top @click.native="backTopClick" v-show="isShowBackTop"/>

    </div>
</template>

<script>

    import DetailNavBar from './childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import DetailBaseInfo from './childComps/DetailBaseInfo'
    import DetailShopInfo from './childComps/DetailShopInfo'
    import DetailBottomBar from './childComps/DetailBottomBar'


    import Scroll from 'components/common/scroll/Scroll'
    import BackTop from 'components/content/backTop/BackTop'


    export default {
      name: "Detail",
      components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailBottomBar,

        Scroll,
        BackTop

      },
      data() {
        return {
          isShowBackTop: false,
          goodsItemDetail: {},
          detailSwiperImages: "",
          shopInfo: {},
          themeTopYs: [],
          currentIndex: 0,
        }
      },
      created() {
        //console.log(this.$route.query.goodsItemDetail);
        this.goodsItemDetail = this.$route.query.goodsItemDetail
        this.detailSwiperImages =  this.goodsItemDetail.goodsDetail.detailImageUrl
        this.shopInfo = this.goodsItemDetail.shop


      },
      mounted() {
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.shop.$el.offsetTop)
        this.themeTopYs.push(500)
        this.themeTopYs.push(800)

        //console.log(this.themeTopYs)
      },
      methods: {
        titleClick(index) {
          //console.log(index);
          this.$refs.scroll.scrollTo(0,-this.themeTopYs[index])
        },
        backTopClick() {
          //console.log('backTopClick');
          this.$refs.scroll.scrollTo(0, 0)
        },
        contentScroll(position) {
          //console.log(position);
          // 判断是否显示backTop
          const positionY = -position.y
          this.isShowBackTop = positionY > 600

          // positionY和themeTopYs
          let length = this.themeTopYs.length
          for (let i = 0; i < length ; i++) {
            if (this.currentIndex !== i && ((i<length-1 && positionY>=this.themeTopYs[i] && positionY<this.themeTopYs[i+1])
              || (i===length-1 && positionY>=this.themeTopYs[i]))){
              this.currentIndex = i;
              this.$refs.nav.currentIndex = this.currentIndex
            }
          }

        },
        addToCart(){
          console.log("添加商品到购物车......");
          // 1 获取购物车需要展示的商品信息
          const cartGoods = {}
          cartGoods.image = this.goodsItemDetail.goods.goodsImageUrl
          cartGoods.name = this.goodsItemDetail.goods.goodsName
          cartGoods.title = this.goodsItemDetail.goods.goodsTitle
          cartGoods.price = this.goodsItemDetail.goodsDetail.newPrice
          cartGoods.id = this.goodsItemDetail.goods.goodsId

          //默认的属性
          cartGoods.count = 0
          cartGoods.isChecked = false

          // 2 将商品添加到购物车里
          this.$store.dispatch('addToCart', cartGoods).then(res => {

            this.$toast.showMsg(res)

          })

        }
      }
    }
</script>

<style scoped>

  #detail {
    height: 100vh;

    position: relative;

  }

  .content {
    overflow: hidden;

    position: absolute;

    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

  }


</style>
