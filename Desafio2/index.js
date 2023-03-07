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

  addProduct(product) {

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

  getProductByID(id) {
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
    let indice = data.findIndex(product => product.id == id)

    if(indice >= 0){
      data.splice(indice,1)
      this.writeData(data);
      console.log(data);
    }
    throw new Error('There is no product to delete id')
  }
   updateProduct(id, data) {
    let products = this.readFile();

    let indice = products.findIndex((product) => product.id == id);

    if (indice >= 0) {
      const actualizar = products[indice]
      Object.assign(actualizar, data);
    } else{
      throw new Error('No se encuentra id a modificar');
    }
    
    this.writeData(products);
  }
}

class Product {
  static countProduct = 1;
  constructor(title, description, price, thumbanail, code, stock) {
    this.id = Product.countProduct++;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbanail = thumbanail;
    this.code = code;
    this.stock = stock;
  }
}


let persona1 = new ProductManager("data.json");

let producto0 = new Product( "Amalaki",
"vitaminadsd",
20000,
"https://cdn.shopify.com/s/files/1/0455/4224/4511/products/AMALAKI.jpg?v=1600114241",
12349,
10);

let producto1 = new Product("Te meishen limón",
" te",
29000,
"https://cdn.shopify.com/s/files/1/0455/4224/4511/products/Te-Meishen-tarro.jpg?v=1600114638",
124,
11);

// persona1.addProduct(producto0);
// persona1.addProduct(producto1);
// error ya existe el code
// persona1.addProduct(producto1);

// Buscar producto
// persona1.getProductByID(1)

// Eliminar producto
// persona1.deleteProduct(1)
persona1.updateProduct(1,{
  
  title: 'cambiando',
  description: ' rojo',
  price: 20000,
  thumbanail: 'img',
  code: 124,
  stock: 19456
})