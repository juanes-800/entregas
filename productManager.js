class ProductManager {
  constructor() {
    this.products = [];
  }

  getProduct(){
    return this.products
  }

  addProd(title, description, price, thumbanail, code, stock) {
    const product = {
    id:this.products.length == 0 ? 1 : this.products.length + 1,
      title,
      description,
      price,
      thumbanail,
      code,
      stock,
    };
    const repCode = this.products.find((item) => item.code === product.code);
    if (repCode) {
      throw new Error("codigo existente");
    } else if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbanail ||
      !product.code ||
      !product.stock
    ) {
      throw new Error("Los campos son  obligatorios");
    }

    this.products.push(product);
  }

  getProductByid(id){
   const byid =  this.products.find( item=> item.id === id)

   if(byid){
   console.log(byid); 
   } else{
    throw new Error('not found')
   }
  }

}
let producto = new ProductManager();
producto.addProd(
  "Amalaki",
  "vitaminadsd",
  20000,
  "https://cdn.shopify.com/s/files/1/0455/4224/4511/products/AMALAKI.jpg?v=1600114241",
  123,
  10
);
producto.addProd(
  "Amalakir",
  "vitamina",
  20000,
  "https://cdn.shopify.com/s/files/1/0455/4224/4511/products/AMALAKI.jpg?v=1600114241",
  1233,
  10
);
producto.addProd(
  "Amalakir",
  "vitamina",
  20000,
  "https://cdn.shopify.com/s/files/1/0455/4224/4511/products/AMALAKI.jpg?v=1600114241",
  12334,
  10
);

// console.log(producto.getProduct()); 
producto.getProductByid(3); 