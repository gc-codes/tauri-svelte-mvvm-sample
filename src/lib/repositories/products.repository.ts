import { dbCollections } from "./db";
import productsService from "../services/products.service";
import type { ProductDocType } from "../models/product.model";
import type { RxDocument } from "rxdb";

const getAllProducts = () => {
  // TODO: How do we show loading?
  // TODO: How do we show error?

  // fetch latest data from api
  productsService
    .getProducts()
    .then(data => {
      // update the database
      dbCollections.products.bulkInsert(data.products);
    })
    .catch(error => {
      // handle the error
    })
    .finally(() => {

    });
  return dbCollections.products.find().$;
};

const removeSelectedProductById = async (productId: number) => {
  await dbCollections.products.findOne({ selector: { id: productId } }).remove();
}

const getProductById = (id: number) => {
  // fetch latest data from api
  // productsService
  //   .getProductById(id)
  //   .then(product => {
  //     // update the database
  //     dbCollections.products.insert(product);
  //   })
  //   .catch(error => {
  //     // handle the error
  //   })
  //   .finally(() => {

  //   });
  return dbCollections.products.findOne({ selector: { id } }).$;
}

export default {
  getAllProducts,
  getProductById,
  removeSelectedProductById,
};