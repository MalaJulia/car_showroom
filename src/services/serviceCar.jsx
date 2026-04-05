import axios from "axios";

const API_URL = "https://dummyjson.com/products/";

export const getCars = async (param) => {
  const cars = await axios.get(`${API_URL}category/vehicle`, {
    params: {
      sortBy: param.sortBy,
      order: param.value,
    },
  });
  return cars.data.products;
};

export const getCarsById = async (id) => {
  const car = await axios.get(`${API_URL}/${id}`);
  return car.data;
};
