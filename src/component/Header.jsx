import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = {
    productList: [],
  }

  render() {
    const { productList } = this.state;
    return (
      <header>
        <label htmlFor="search">
          <input type="text" name="search" id="search" placeholder="Pesquisa" />
        </label>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">Clique aqui</Link>
        {productList.length === 0
          ? (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )
          : <> carrinho cheio </>}
      </header>
    );
  }
}

export default Header;
