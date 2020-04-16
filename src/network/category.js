import {request} from "./request";

export function getParentCategory() {
  return request({
    url: '/front/category/parent'
  })
}

export function getChildCategory(categoryId) {
  return request({
    url: '/front/category/child/'+categoryId,
  })
}

export function getParentCategoryGoods(categoryId,type) {
  return request({
    url: '/front/goods/listWithCategory',
    params: {
      categoryId,
      type
    }
  })
}



