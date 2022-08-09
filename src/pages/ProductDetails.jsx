import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ProductDetails extends Component {
  state = {
    product: undefined,
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    api.getProduct(id).then((data) => this.setState({ product: data }));
  }

  render() {
    const { product } = this.state;
    console.log(product);
    return (
      <div>
        <Link
          to="/ShoppingCart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
        <div>Product Details</div>
        {product
          ? (
            <div>
              <p data-testid="product-detail-name">
                {product.title}
              </p>
              <img
                src={ product.thumbnail }
                data-testid="product-detail-image"
                alt="Product"
              />
              <p data-testid="product-detail-price">
                {product.price}
              </p>
              <a
                data-testid="product-detail-link"
                href={ product.permalink }
              >
                link
              </a>
            </div>
          )
          : <> </>}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired }),
  }).isRequired,
};

export default ProductDetails;
