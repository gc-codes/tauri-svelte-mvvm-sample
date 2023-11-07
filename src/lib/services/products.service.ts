const getProducts = async () => {
  const response = await fetch('https://dummyjson.com/products')
  const products = await response.json();
  return products;
};

const getProductById = async (id: number) => {
  const response = await fetch(`https://dummyjson.com/product/${id}`)
  const product = await response.json();
  return product;
};

export default {
  getProducts,
  getProductById,
};