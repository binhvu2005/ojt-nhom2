import axios from "axios";

const baseUrl = "http://localhost:8080";

export const getUsersApi = async (page, limit) => {
  try {
    const res = await axios.get(`${baseUrl}?_page=${page}&_limit=${limit}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserApi = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const editUserApi = async (user) => {
  try {
    const res = await axios.patch(`${baseUrl}/${user.id}`, user);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const createUserApi = async (user) => {
  try {
    const res = await axios.post(`${baseUrl}`, user);
  } catch (error) {
    console.error(error);
  }
};

export const deleteUserApi = async (id) => {
  try {
    const res = await axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    console.error(error);
  }
};
