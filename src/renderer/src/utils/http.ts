import axios from './axios'
import qs from 'qs'

export function post(url, data, error="") {
  return new Promise((resolve) => {
    axios({
      method: 'post',
      url: url,
      data: data
    }).then(
      (response) => {
        resolve(response)
      },
      (err) => {
        err = error ? error : err
        // alert(err)
      }
    )
  })
}

export function get(url, data, error="") {
  return new Promise((resolve) => {
    axios({
      method: 'get',
      url: url,
      params: data
    }).then(
      (response) => {
        resolve(response)
      },
      (err) => {
        err = error ? error : err
        // alert(err)
      }
    )
  })
}


export function FormDataPost(url, data, error) {
  return new Promise((resolve) => {
    axios({
      method: 'post',
      url: url,
      data: data,
      headers: { 'Content-Type': 'application/x-www-from-urlencoded' },
      transformRequest: (data) => {
        qs.stringify(data)
      }
    }).then(
      (response) => {
        resolve(response)
      },
      (err) => {
        err = error ? error : err
        // alert(err)
      }
    )
  })
}
