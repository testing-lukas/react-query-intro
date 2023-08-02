import axios from "axios";

export const getProducts = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  return res?.data ?? {};
};

export const getProduct = async id => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  return res?.data ?? {};
};

export const getCategories = async () => {
  const res = await axios.get("https://dummyjson.com/products/categories");
  return res?.data ?? {};
};
