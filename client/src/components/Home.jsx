import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("http://localhost:4000/products");
      const data = response.data;
      setProducts(data);
    }
    getProducts();
  }, []);
  return (
    <div>
      {products.map((products) => {
        return (
          <h2>
            {products.name}
            <img src={products.image} alt="" />
          </h2>
        );
      })}
    </div>
  );
}
