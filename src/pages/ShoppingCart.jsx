import React from 'react';
import Card from '../component/Card';

class ShoppingCart extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.setState({
      products: JSON.parse(localStorage.getItem('productCard')),
    });
  }

  handleDelete = ({ target }) => {
    const { id } = target;
    const { products } = this.state;
    this.setState({
      products: products.filter((product) => id !== product.title),
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
              <Card obj={ item } />
              <button
                data-testid="remove-product"
                type="button"
                id={ item.title }
                onClick={ this.handleDelete }
              >
                Excluir
              </button>
            </div>
          ))
        )}
      </section>
    );
  }
}

export default ShoppingCart;
