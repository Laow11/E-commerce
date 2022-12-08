export const inicioRoutes = (req, res) => {
  res.send(`Estamos iniciando esto`);
};
import axios from "axios";
import Products from "../models/Products.js";
export const getProducts = async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products", {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });
    const data = response.data;
    const dataMap = data.map((p) => {
      return {
        id: p.id,
        name: p.title,
        price: p.price,
        categories: p.category,
        description: p.description,
        image: p.image,
      };
    });

    res.status(200).send(dataMap);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createProduct = async (req, res) => {
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
