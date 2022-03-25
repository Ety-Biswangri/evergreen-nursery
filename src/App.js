import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Shop from './Shop/Shop';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  return (
    <div>
      <Header></Header>
      <Shop products={products}></Shop>
    </div>
  );
}

export default App;
