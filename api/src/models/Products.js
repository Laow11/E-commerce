import { model, Schema } from "mongoose";

const Products = Schema(
  {
    name: {
      required: true,
      type: String,
      unique: true,
      maxlength: 100,
    },
    description: {
      required: true,
      type: String,
      maxlength: 100000,
    },
    price: {
      required: true,
      type: Number,
      maxlength: 100000,
    },
    categories: {
      type: Array,
      required: true,
    },
    shipping: {
      required: true,
      type: Boolean,
    },
    available: {
      required: true,
      type: Boolean,
    },
    images: {
      type: String,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default model("Product", Products);
