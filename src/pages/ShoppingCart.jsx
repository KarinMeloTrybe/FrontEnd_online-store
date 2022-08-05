import React from 'react';
import Header from '../component/Header';

class ShoppingCart extends React.Component {
    state = {
      products: [],
    }

    render() {
      const { products } = this.state;
      return (
        <section>
          <Header />
          {products.length === 0
            ? (
              <div>
                <p data-testid="shopping-cart-empty-message">
                  Seu carrinho está vazio.
                </p>
                <img src="#" alt="#" />
              </div>
            )
            : <div> </div>}
        </section>
      );
    }
}

export default ShoppingCart;
