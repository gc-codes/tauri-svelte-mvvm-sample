import { writable } from "svelte/store";
import productsRepository from "../../lib/repositories/products.repository";
import type { ProductDocType } from "../../lib/models/product.model";

const title = 'MVVM Demo';
const description = 'This is a demo of the MVVM pattern in Tauri + Svelte.';


let productsObservable = productsRepository.getAllProducts();
productsObservable.subscribe((productsList) => {
  
});

const getAllProducts = () => {
  
};

const getProductById = (id: number) => {
  return productsRepository.getProductById(id);
};

export default {
  title,
  description,
  productsObservable,
  getAllProducts,
  getProductById,
};