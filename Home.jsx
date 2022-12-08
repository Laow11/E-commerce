import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);
  return (
    <div>
      {products.map((product) => {
        return <h2>{product.name}</h2>;
      })}
    </div>
  );
}
