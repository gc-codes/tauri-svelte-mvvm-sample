import productsRepository from "../../lib/repositories/products.repository";

const title = 'MVVM Demo';
const description = 'This is a demo of the MVVM pattern in Tauri + Svelte.';

const getProducts = () => productsRepository.getAllProducts();

const getSingleProduct = (id: number) => productsRepository.getProductById(id);

const removeProduct = async (id: number) => await productsRepository.removeSelectedProductById(id);

export default {
  title,
  description,
  getProducts,
  getSingleProduct,
  removeProduct,
};