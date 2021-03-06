import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://pspost.herokuapp.com/', // instance config header // api url
  headers: { 'Content-Type': 'application/json' }
})

export const loginLocal = (username, password) => {  // func login 
  const data = {
    username: username,
    password: password
  }
  return axiosInstance.post('login', data) // request post to login   data= username and password
    .then(data => data)
    .catch(error => error.response)
}

export const getUserOne = (username) => {  // func login 
  return axiosInstance.get('/api/user/getUserOne/' + username) // request post to login   data= username and password
    .then(response => response.data)
    .catch(error => error.response)
}

export const loginOauth = (pt) => {
  return axiosInstance.get('/oauth/' + pt)
    .then(data => data)
    .catch(error => { throw (error.response) })

}

////////

export const publishPost = (content, typeP) => {
  const data = {
    content: content,
    author: JSON.parse(localStorage.getItem('profileUser')).username,
    type: typeP
  }
  return axiosInstance.post('api/post/create/', data)
    .then(data => data)
    .catch(error => error.response)
}

export const publishPostComments = (content, typeP) => {
  const data = {
    content: content,
    author: JSON.parse(localStorage.getItem('profileUser')).username,
    type: typeP,
    reference: localStorage.getItem('post_id')
  }
  return axiosInstance.post('api/post/create/', data)
    .then(data => data)
    .catch(error => error.response)
}

export const getAllPosts = () => {
  return axiosInstance.get('/api/post/all/')
    .then(response => response.data)
    .catch(error => { throw (error.response) })
}
////

export const register = (dataR) => {
  const data = dataR
  return axiosInstance.post('/api/user/signup', data)
    .then(data => data)
    .catch(error => error.response)
}

export const saveuser = (name,mail) => {
  const data = {
    username:name,
    email:name
  }

  return axiosInstance.post('/api/user/signup', data)
    .then(data => data)
    .catch(error => error.response)
}

export const getComments = () => {
  return axiosInstance.get('api/post/getcomment/' + localStorage.getItem('post_id'))
    .then(response => response.data)
    .catch(error => error.response)
}

export const getTopic = () => {
  return axiosInstance.get('api/post/id/' + localStorage.getItem('post_id'))
    .then(response => response.data)
    .catch(error => error.response)
}

export const search = (word) => {
  return axiosInstance.get('api/post/search/' + word)
    .then(response => response.data)
    .catch(error => error.response)
}

export const getMyPost = () => {
  return axiosInstance.get('api/post/mypost/' + localStorage.getItem('temUser'))
    .then(response => response.data)
    .catch(error => error.response)
}

export const getAllUsers = () => {
  return axiosInstance.get('api/user/getuser/')
    .then(response => response.data)
    .catch(error => error.response)
}

export const deleteUser = (pt) => {
  return axiosInstance.get('api/user/delete/' + pt)
    .then(response => response.data)
    .catch(error => error.response)
}

export const deletePost = (pt) => {
  return axiosInstance.get('api/post/delete/' + pt)
    .then(response => response.data)
    .catch(error => error.response)
}

export const postEdit = (firstName, lastName, email, phone) => {
  const data = {
    username: JSON.parse(localStorage.getItem('profileUser')).username,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone
  }
  return axiosInstance.post('api/user/edit', data)
    .then(response => response.data)
    .catch(error => error.response)
}
