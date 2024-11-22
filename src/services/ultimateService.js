import axios from "axios";

export const getAllResources = async (baseUrl) => {
  const response = await axios.get(baseUrl);
  return response;
};

export const getResource = async (baseUrl, id) => {
  const response = await axios.get(baseUrl + id);
  return response;
};

export const createResource = async (baseUrl, item) => {
  const response = await axios.post(baseUrl, item);
  return response;
};
