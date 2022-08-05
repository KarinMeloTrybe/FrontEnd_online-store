export async function getCategories() {
  const url = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const json = await url.json();
  return json;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId) {
    const requisition = await fetch(` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const json = await requisition.json();
    return json;
  } if (query) {
    const requisitionQuery = await fetch(` https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const jsonQuery = await requisitionQuery.json();
    return jsonQuery;
  } if (categoryId && query) {
    const requisitionCategoryIdAndQ = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const jsonCategoryIdAndQ = await requisitionCategoryIdAndQ.json();
    return jsonCategoryIdAndQ;
  }
}
