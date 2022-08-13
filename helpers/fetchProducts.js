const url = 'https://api.mercadolibre.com/sites/MLB/search?q=';

const fetchProducts = async (prod) => {
  try {
    const urlProd = `${url}${prod}`;
    const response = await fetch(urlProd);
    const products = await response.json();
    return products;
  } catch (error) {
    return error;
  }
};
// console.log(fetchProducts());

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
