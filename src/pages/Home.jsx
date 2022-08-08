import React from 'react';
import Header from '../component/HeaderMain';
import Category from '../component/Category';

class Home extends React.Component {
  render() {
    return (
      <div>
        <aside>
          <Category />
        </aside>
        <Header />
      </div>
    );
  }
}

export default Home;
