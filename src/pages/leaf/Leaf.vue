<template>
  <div id="leaf">
    <leaf-nav-bar :child-category-item-name="childCategoryItemName"/>

    <tab-control
      class="tab-control"
      :titles="['推荐', '最新', '最热']"
      @tabClick="tabClick"
      ref="tabControl"/>

    <scroll class="content" ref="scroll"
            :probe-type="3"
            :pullUpLoad="true"
            @scroll="contentScroll" >

      <goods-list :goodsList="showGoods"/>

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

    <back-top class="back-top" @click.native="backTopClick" v-show="isShowBackTop" />


  </div>
</template>

<script>

  import LeafNavBar from './childComps/LeafNavBar'

  import TabControl from 'components/content/tabControl/TabControl'

  import Scroll from 'components/common/scroll/Scroll'

  import GoodsList from 'components/content/goods/GoodsList'

  import BackTop from 'components/content/backTop/BackTop'

  import { getChildCategoryGoods } from "network/category"

  export default {
    name: "Leaf",
    components: {
      LeafNavBar,

      TabControl,

      Scroll,

      GoodsList,

      BackTop
    },
    data() {
      return {
        childCategoryItemId: '',
        childCategoryItemName: '',
        goodsList: {
          'recommend': [],
          'newest': [],
          'hottest': []
        },
        currentType: "recommend",
        isShowBackTop: false
      }
    },
    computed: {
      showGoods() {
        return this.goodsList[this.currentType]
      }
    },
    created() {
      this.childCategoryItemId = this.$route.query.childCategoryItemId
      this.childCategoryItemName = this.$route.query.childCategoryItemName

      this.getChildCategoryGoods(this.childCategoryItemId,"recommend")
      this.getChildCategoryGoods(this.childCategoryItemId,"newest")
      this.getChildCategoryGoods(this.childCategoryItemId,"hottest")

    },
    beforeRouteEnter(to, from, next) {
      //console.log("Leaf------>beforeRouteEnter")
      next()
    },
    beforeRouteLeave(to, from, next) {
      //console.log("Leaf------>beforeRouteLeave")
      if ( to.name.name !== 'Detail' ) {
        from.meta.keepAlive = false
      }
      next()
    },
    methods: {
      tabClick(index) {
        //console.log(index);
        switch (index) {
          case 0 :
            this.currentType = 'recommend'
            break;
          case 1 :
            this.currentType = 'newest'
            break;
          case 2 :
            this.currentType = 'hottest'
            break;
        }
      },
      contentScroll(position) {
        //console.log(position);
        // 判断是否显示backTop
        this.isShowBackTop = (-position.y) > 600

      },
      backTopClick() {
        //console.log('backTopClick');
        this.$refs.scroll.scrollTo(0, 0)
      },

      getChildCategoryGoods(childCategoryId,type){
        getChildCategoryGoods(childCategoryId,type).then(res => {
          //console.log(res.data)
          this.goodsList[type] = res.data
        })
      }
    }
  }
</script>

<style scoped>

  #leaf {
    height: 100vh;

    position: relative;

  }
  .tab-control {
    position: fixed;

    top: 44px;
    left: 0;
    right: 0;

  }

  .content {
    position: absolute;

    overflow: hidden;
    background-color: #fff;

    top: 84px;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 1;

  }

  .back-top {
    position: fixed;

    bottom: 5px;
    right: 5px;

    z-index: 2;
  }


</style>
