import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from '../Components/Routes/Navigation/Navigation';
import Home from '../Components/Routes/Home/Home';
import AllProducts from '../Components/Routes/AllProducts/AllProducts';
import './App.css';

function App() {
  const [uniqueProducts, setUniqueProducts] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    getProducts();
    window.history.scrollRestoration = 'manual';
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

  const tenNewProducts = uniqueProducts.slice(0, 10);

  const tenTrendProducts = uniqueProducts
    .filter((product) => product.brand !== 'Fimabijuteri')
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 10);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigation
            onSearchChange={onSearchChange}
            searchField={searchField}
          />
        }
      >
        <Route
          index
          element={
            <Home
              tenNewProducts={tenNewProducts}
              tenTrendProducts={tenTrendProducts}
            />
          }
        />
        <Route
          path="allproducts"
          element={<AllProducts filteredProducts={filteredProducts} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
