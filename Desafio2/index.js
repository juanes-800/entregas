const fs = require("fs");

class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = this.readFile();
  }
  writeData(data) {
    const dataStrings = JSON.stringify(data);
    fs.writeFileSync(`./${this.path}`, dataStrings);
    return dataStrings;
  }
  readFile() {
    const data = JSON.parse(fs.readFileSync(`./${this.path}`, "utf-8"));
    return data;
  }

  getProduct() {
    let data = this.readFile();
    return data;
  }

  addProd(title, description, price, thumbanail, code, stock) {
    const product = {
      id: this.products.length == 0 ? 1 : this.products.length + 1,
      title,
      description,
      price,
      thumbanail,
      code,
      stock,
    };
    const repCode = this.products.find((item) => item.code === product.code);
    if (repCode) {
      throw new Error("existing code");
    } else if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbanail ||
      !product.code ||
      !product.stock
    ) {
      throw new Error("Fields are required");
    }
    let data = this.readFile();
    data.push(product);
    this.writeData(data);
  }

  getProductByid(id) {
    let data = this.readFile();
    const save = data.find((item) => Number(item.id == id));

    if (save) {
      console.log(save);
    } else {
      throw new Error("not found");
    }
  }

  deleteProduct(id){
    let data = this.readFile();
    let indice = data.finIndex(product => product.id == id)

    if(indice >= 0){
      data.splice(indice,1)
      this.writeData(data);
      console.log(data);
    }
    throw new Error('There is no product to delete id')
  }
}

let producto = new ProductManager("data.json");

producto.addProd(
  "Amalaki",
  "vitaminadsd",
  20000,
  "https://cdn.shopify.com/s/files/1/0455/4224/4511/products/AMALAKI.jpg?v=1600114241",
  12349,
  10
);
producto.addProd(
  "Te meishen limón",
  " te",
  29000,
  "https://cdn.shopify.com/s/files/1/0455/4224/4511/products/Te-Meishen-tarro.jpg?v=1600114638",
  124,
  11
);

// producto.getProductByid(3);
