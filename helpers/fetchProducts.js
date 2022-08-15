const linkUrl = 'https://api.mercadolibre.com/sites/MLB/search?q=';

const fetchProducts = async (prod) => {
  try {
    const urlProd = `${linkUrl}${prod}`;
    const response = await fetch(urlProd);
    const products = await response.json();
    return products;
  } catch (error) {
    return new Error('You must provide an url');
  }
};
// fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
