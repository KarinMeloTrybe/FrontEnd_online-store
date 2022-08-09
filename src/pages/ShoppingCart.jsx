import React from 'react';

class ShoppingCart extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.setState({
      products: JSON.parse(localStorage.getItem('productCard')),
    });
  }

  render() {
    const { products } = this.state;
    return (
      <section>
        {!products ? (
          <div>
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio.
            </p>
            <img src="#" alt="#" />
          </div>
        ) : (
          products.map((item, index) => (
            <div key={ index }>
              <p data-testid="shopping-cart-product-name">{`Produto ${item.title}`}</p>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{`R$ ${item.price}`}</p>
              <div>
                <p data-testid="shopping-cart-product-quantity">
                  Quantidade: 1
                </p>
              </div>
            </div>
          ))
        )}
      </section>
    );
  }
}

export default ShoppingCart;
