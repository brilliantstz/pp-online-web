import {request} from "./request";

export function getPhoneCode(phoneNumber) {
  return request({
    url: '/front/code/send',
    params: {
      phoneNumber
    }
  })
}

export function register(frontUser, code) {

  return request({
    url: '/front/user/register',
    method: "post",
    data: {
      username: frontUser.username,
      password: frontUser.password,
      phone: frontUser.phone,
      code
    }
  })
}

export function login(frontUser) {

  return request({
    url: '/front/user/login',
    method: "post",
    data: {
      username: frontUser.username,
      password: frontUser.password,
    }
  })
}

