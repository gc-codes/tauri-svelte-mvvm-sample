import { writable } from "svelte/store";
import productsRepository from "../../lib/repositories/products.repository";
import type { ProductDocType } from "../../lib/models/product.model";

const title = 'MVVM Demo';
const description = 'This is a demo of the MVVM pattern in Tauri + Svelte.';

let products = productsRepository.getAllProducts();

let singleProduct = productsRepository.getProductById(1);

const selectProduct = (id: number) => {
  console.log('select product called')
  singleProduct = productsRepository.getProductById(id);
}

export default {
  title,
  description,
  products,
  singleProduct,
  selectProduct
};