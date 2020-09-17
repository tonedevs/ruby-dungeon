import api from './api-config'

export const getAllEquipment = async () => {
  const response = await api.get('/equips');
  return response.data;
}

export const getOneEquipment = async (id) => {
  const response = await api.get(`/equips/${id}`);
  return response.data;
}

export const getAllUserEquipment = async () => {
  const response = await api.get('/user_equips');
  return response.data;
}

export const getOnseUserEquipment = async (id) => {
  const response = await api.get(`/user_equips/${id}`);
  return response.data;
}

export const putUserEquipment = async (id, formData) => {
  const response = await api.put(`/user_equips/${id}`, { user_equip: formData })
  return response.data;
}