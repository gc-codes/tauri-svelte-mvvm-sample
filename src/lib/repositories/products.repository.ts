import { dbCollections } from "./db";
import productsService from "../services/products.service";

const getAllProducts = () => {
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

const getProductById = async (id: number) => {
  // fetch latest data from api
  productsService
    .getProductById(id)
    .then(product => {
      // update the database
      dbCollections.products.insert(product);
    })
    .catch(error => {
      // handle the error
    })
    .finally(() => {

    });
  return dbCollections.products.findOne({ selector: { id } }).$;
}

export default {
  getAllProducts,
  getProductById,
};