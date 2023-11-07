import productsRepository from "../../lib/repositories/products.repository";

const title = 'MVVM Demo';
const description = 'This is a demo of the MVVM pattern in Tauri + Svelte.';

const getAllProducts = () => {
  return productsRepository.getAllProducts();
};

const getProductById = (id: number) => {
  return productsRepository.getProductById(id);
};

export default {
  title,
  description,
  getAllProducts,
  getProductById,
};