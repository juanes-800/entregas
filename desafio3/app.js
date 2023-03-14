const express = require("express");
const { ProductManager } = require("./productManager");
const app = express();
const port = 8080;

app.get("/products", (req, res) => {
  const productos = ProductManager.getProduct();
  const { limit } = req.query;

  if (limit) {
    return res.send(productos.slice(0, limit));
  } else {
    return res.send(productos);
  }
});

app.get("/products/:pid", (req, res) => {
  const productos = ProductManager.getProduct();
  const producto = productos.find((item) => item.id === Number(req.params.pid));
  

  if (producto) {
    return res.status(200).send(producto);
  } else {
    return res.status(404).send({message: "product not found!!"})
  }
});

app.listen(port, () => {
  console.log("servidor levantado", port);
});
 