const { json } = require("express");
const mongoose = require("mongoose");


const farmer = new mongoose.Schema({
  aadharNumber: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const product = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: Object, required: true },
  date: { type: String, required: true },
});

const customer = new mongoose.Schema({
  customerID: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const orders = new mongoose.Schema({
    productID: { type: String, required: true },
    quantity: { type: String, required: true },
    isDelivered: { type: String, required: true },
    date: { type: String, required: true },
});



const Farmer = mongoose.model("farmer", farmer);
const Customer = mongoose.model("customer", customer);
const Product = mongoose.model("product", product);
const Order = mongoose.model("order", orders);

module.exports = {
    Farmer, 
    Customer,
    Product,
    Order
};