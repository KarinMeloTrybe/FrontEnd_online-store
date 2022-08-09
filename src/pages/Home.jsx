import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import Category from '../component/Category';

class Home extends React.Component {
  state = {
    productList: [],
    noProducts: false,
    searchValue: '',
    category: [],
  }

  async componentDidMount() {
    const categories = await api.getCategories();
    this.setState({ category: categories });
  }

  handlerChange = ({ target }) => {
    const { value } = target;
    this.setState({ searchValue: value });
  }

  fetchCategory = async ({ target }) => {
    const { value } = target;
    const data = await api.getProductsFromCategoryAndQuery(value);
    this.setState({ productList: data.results });
  }

  fetchButton = () => {
    const { searchValue } = this.state;
    if (searchValue.trim() === '') {
      this.setState({ productList: [], noProducts: true });
      return;
    }
    api.getProductsFromCategoryAndQuery(null, searchValue)
      .then((data) => { this.setState({ productList: data.results }); });
  }

  render() {
    const { productList, noProducts, category } = this.state;
    return (
      <div>
        <aside>
          {category.map((categoryItem) => (
            <Category
              key={ categoryItem.name }
              name={ categoryItem.name }
              id={ categoryItem.id }
              fetchCategory={ this.fetchCategory }
            />
          ))}
        </aside>
        <main>
          <label htmlFor="search">
            <input
              data-testid="query-input"
              type="text"
              name="search"
              id="search"
              placeholder="Pesquisa"
              onChange={ this.handlerChange }
            />
          </label>
          <button
            data-testid="query-button"
            type="submit"
            onClick={ this.fetchButton }
          >
            Buscar
          </button>
          <Link to="/shoppingcart" data-testid="shopping-cart-button">Clique aqui</Link>
          {productList.length === 0 && !noProducts
            ? (
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )
            : (
              <ul>
                {productList.map((product, index) => (
                  <li
                    key={ index }
                    data-testid="product"
                  >
                    <Link
                      to={ `/productdetails/${product.id}` }
                      data-testid="product-detail-link"
                    >
                      Detalhes do Produto
                    </Link>
                    <p>
                      { product.title}
                    </p>
                    <img src={ product.thumbnail } alt={ product.title } />
                    <p>
                      { product.price }
                    </p>
                  </li>
                ))}
              </ul>
            )}
          {noProducts && <p>Nenhum produto foi encontrado</p>}
        </main>
      </div>
    );
  }
}

export default Home;
