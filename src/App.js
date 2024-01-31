import React, { useState } from "react";
import { useEffect } from "react";


function App() {
  const [products, setProducts] = useState([]);

  // Fetching product data from API
  useEffect(() => {
    fetch('https://www.flipkart.com/?ef_id=ff9f10ca4c0d1ffd77f9747cab1b8571:G:s&s_kwcid=AL!739!10!76484942419895!76485137405439&semcmpid=sem_F1167BY7_Brand_adcenter/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Flipkart Clone</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
