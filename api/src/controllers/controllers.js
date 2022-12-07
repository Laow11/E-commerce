<<<<<<< HEAD
export const inicioRoutes = (req, res) => {
  res.send(`Estamos iniciando esto`)
}
=======
import axios from "axios";
import Products from "../models/Products.js";
const getProducts = async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data;
    const dataMap = data.map((products) => {
      return {
        id: products.id,
        name: products.title,
        price: products.price,
      };
    });

    res.status(200).send(dataMap);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  const { body } = req;
  const { name, description, price, categories, shipping, available, images } =
    body;

  const newProduct = await Products({
    name,
    description,
    price,
    categories,
    shipping,
    available,
    images,
  });
  try {
    const savedProduct = newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.log(error);
  }
};

export default { createProduct, getProducts };
>>>>>>> c8bd79ef521e53b4b7dc13c57a2ca58e6fc87022
