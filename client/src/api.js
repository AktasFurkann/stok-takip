import axios from "axios";

export const listProducts = async () => {
  const { data } = await axios.get("http://localhost:4000/api/products");
  return data;
};
export const listStocks = async () => {
  const { data } = await axios.get("http://localhost:4000/api/stocks");
  return data;
};
export const getProduct = async id => {
  const { data } = await axios.get(`http://localhost:4000/api/products/${id}`);
  return data;
};
export const productInStock = async id => {
  const { data } = await axios.get(
    `http://localhost:4000/api/products/stock/${id}`
  );
  return data;
};
export const getStock = async id => {
  const { data } = await axios.get(`http://localhost:4000/api/stocks/${id}`);
  return data;
};
export const addProduct = async input => {
  const { data } = await axios.post(
    "http://localhost:4000/api/products",
    input
  );
  return data;
};
export const addStock = async input => {
  const { data } = await axios.post("http://localhost:4000/api/stocks", input);
  return data;
};
export const updateProduct = async (input, id) => {
  const { data } = await axios.patch(
    `http://localhost:4000/api/products/${id}`,
    input
  );
  return data;
};
export const updateStock = async (input, id) => {
  const { data } = await axios.patch(
    `http://localhost:4000/api/stocks/${id}`,
    input
  );
  return data;
};
export const deleteProduct = async id => {
  const { data } = await axios.delete(
    `http://localhost:4000/api/products/${id}`
  );
  return data;
};
export const deleteStock = async id => {
  const { data } = await axios.delete(`http://localhost:4000/api/stocks/${id}`);
  return data;
};
