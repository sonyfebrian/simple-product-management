// src/services/apiService.ts
import axios from 'axios';

import { Product } from './productTypes';

const API_URL = 'https://dummyjson.com/products';


export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(API_URL);
    const products  = response.data.products;

    console.log(products, "product")
    return products;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
