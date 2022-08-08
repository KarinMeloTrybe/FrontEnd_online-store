import React from 'react';

class ShoppingCart extends React.Component {
    state = {
      products: [],
    }

    render() {
      const { products } = this.state;
      return (
        <section>
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
