const url = 'https://api.mercadolibre.com/items/';

const fetchItem = async (it) => {
  try {
    const urlIt = `${url}${it}`;
    const response = await fetch(urlIt);
    const products = await response.json();
    return products;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
