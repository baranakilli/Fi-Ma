import './App.css';
import Navigation from '../Components/Navigation/Navigation';
import Hero from '../Components/Hero/Hero';
import ProductListHeader from '../Components/ProductListHeader/ProductListHeader';
import ProductList from '../Components/ProductList/ProductList';
import { useEffect, useState } from 'react';
import { createNightowl } from '@bufferhead/nightowl';

createNightowl({
  defaultMode: 'light',
  toggleButtonMode: 'newState',
});

function App() {
  const [uniqueProducts, setUniqueProducts] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  const getProducts = () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'block';
    fetch('https://gettrendyolproducts-j3kslsf7ga-uc.a.run.app')
      .then((resp) => resp.json())
      .then((data) => {
        loadProducts(data);
        loader.style.display = 'none';
      });
    setSearchField('');
  };

  const loadProducts = (products) => {
    const uniqueProductsMap = new Map();
    products.content.forEach((product) => {
      uniqueProductsMap.set(product.productContentId, product);
    });
    const uniqueProductsArray = Array.from(uniqueProductsMap.values());
    setUniqueProducts(uniqueProductsArray);
  };

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredProducts = uniqueProducts.filter((product) => {
    return product.title.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <section id='all-products'>
        <ProductListHeader
          products={filteredProducts}
          onSearchChange={onSearchChange}
          searchField={searchField}
        />
        <ProductList products={filteredProducts} />
      </section>
    </div>
  );
}

export default App;
