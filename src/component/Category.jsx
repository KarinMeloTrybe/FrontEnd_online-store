import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Category extends Component {
    state = {
      category: [],
    }

    async componentDidMount() {
      const categories = await getCategories();
      this.setState({ category: categories });
    }

    render() {
      const { category } = this.state;
      return (
        <form>
          {
            category.map((categoryItem) => (
              <label
                key={ categoryItem.id }
                data-testid="category"
                htmlFor={ categoryItem.name }
              >
                {' '}
                {categoryItem.name}
                <input
                  type="radio"
                  name={ categoryItem.name }
                  value={ categoryItem.name }
                />
              </label>
            ))
          }
        </form>
      );
    }
}

export default Category;
