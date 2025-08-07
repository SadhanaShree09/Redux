import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  return (
    <div>
      <h1> E-Commerce App</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
