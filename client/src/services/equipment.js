import api from './api-config'

export const getAllEquipment = async () => {
  const response = await api.get('/equips');
  return response.data;
}

export const getOneEquipment = async (id) => {
  const response = await api.get(`/equips/${id}`);
  return response.data;
}

export const getAllUserEquipment = async (id) => {
  const response = await api.get(`/users/${id}/user_equips/`);
  return response.data;
}

export const getOneUserEquipment = async (userId, id) => {
  const response = await api.get(`/users/${userId}/user_equips/${id}`);
  return response.data;
}

export const putUserEquipment = async (id, userId, data) => {
  const response = await api.put(`/users/${userId}/user_equips/${id}`, { user_equip: data })
  return response.data;
}

export const postUserEquipment = async (userId, data) => {
  const response = await api.post(`/users/${userId}/user_equips/`, { user_equip: data })
  return response.data;
}

export const deleteUserEquipment = async (userId) => {
  const response = await api.delete(`/users/${userId}/user_equips/`)
  return response.data;
}