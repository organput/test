import axios from 'axios'

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, { params, baseURL: 'https://dylmj.wiremockapi.cloud/' }).then((res) => {
      resolve(res.data)
    }, err => {
      reject(err)
    })
  })
}

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL: 'https://dylmj.wiremockapi.cloud/'
    }).then((res) => {
      resolve(res.data)
    }, err => {
      reject(err)
    })
  })
}
