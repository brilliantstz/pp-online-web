import {request} from "./request";

export function getHomeCarouselData() {
  return request({
    url: '/front/carousel/list'
  })
}


export function getHomeRecommendData() {
  return request({
    url: '/front/recommend/list'
  })
}

export function getHomeGoodsData(type, page) {
  return request({
    url:  '/front/goods/listWithType',
    params: {
      type: type,
      current: page
    }
  })
}


