import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ReactConcepts from './components/ReactConcepts/ReactConcepts';
import Shop from './components/Shop/Shop';

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
      <ReactConcepts></ReactConcepts>
    </div>
  );
}

export default App;
