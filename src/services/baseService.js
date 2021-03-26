import axios from 'axios'


const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

http.interceptors.response.use(response => response.data)

export const getPosts = () => {
  return http.get(`/posts`)
}

export const getPost = (post) => {
  return http.get(`/posts/${post}`)
}