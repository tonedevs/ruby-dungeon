import api from './api-config'

// export const loginUser = async (loginData) => {
//   const resp = await api.post('/auth/login', { authentication: loginData })
//   localStorage.setItem('authToken', resp.data.token);
//   api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
//   return resp.data.user
// }

export const registerUser = async (registerData) => {
  const response = await api.post('/users/', { user: registerData })
  localStorage.setItem('playerId', response.data.id);
  return response.data
}

export const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`)
  return response.data;
}

// export const verifyUser = async () => {
//   const token = localStorage.getItem('authToken');
//   if (token) {
//     api.defaults.headers.common.authorization = `Bearer ${token}`
//     const resp = await api.get('/auth/verify');
//     return resp.data
//   }
//   return null
// }

// export const removeToken = () => {
//   api.defaults.headers.common.authorization = null
// }