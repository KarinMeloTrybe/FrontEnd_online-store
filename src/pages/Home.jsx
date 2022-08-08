import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import Category from '../component/Category';

class Home extends React.Component {
  state = {
    productList: [],
    noProducts: false,
    searchValue: '',
  }

  handlerChang = ({ target }) => {
    const { value } = target;
    this.setState({ searchValue: value });
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
    const { productList, noProducts } = this.state;
    return (
      <div>
        <aside>
          <Category />
        </aside>
        <main>
          <label htmlFor="search">
            <input
              data-testid="query-input"
              type="text"
              name="search"
              id="search"
              placeholder="Pesquisa"
              onChange={ this.handlerChang }
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
                  <li key={ index } data-testid="product">
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
