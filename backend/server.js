const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { uid } = require("uid");
const { urlencoded } = require("express");
require("dotenv").config();
const cors = require("cors");

const { Customer, Farmer, Product, Order } = require("./models")

app.use(urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const database = () => {
  return mongoose.connect(process.env.MONGO_URI);
};


app.get("/products", async (req, res) => {
    try {
        const products = await Product.find()
        res.send(products).status(200)
    }
    catch (err) {
        res.send("error occured while fetching products").send(404)
    }
})

app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.send(orders).status(200);
  } catch (err) {
    res.send("error occured while fetching orders").send(404);
  }
});

app.post("/products", async (req, res) => {
    try {
        const {
            title,
            price,
            imageUrl,
            category,
            description,
            time,
            date,
        } = req.body

        const data = {
          title,
          price,
          imageUrl,
          category,
          description,
          time,
          date,
        };

        await Product.create(data)

        res.send("added successfully").status(200)
    }
    catch (err) {
        res.send("error while adding").status(400)
    }
})

app.post("/order", async (req, res) => {
  try {
    const { productID, quantity, isDelivered } = req.body;

      const data = {
          productID,
          quantity,
          isDelivered,
          date: new Date()
    };

    await Order.create(data);

    res.send("ordered successfully").status(200);
  } catch (err) {
    res.send("error while ordering").status(400);
  }
});

const port = 5000;

const connectDatabase = async () => {
  try {
    await database();
    app.listen(port, () => {
      console.log(`server listening to port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connectDatabase();