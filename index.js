class ProductManager {

  constructor(){
    this.products =[],
    this.id = 1
  }

  addProduct (product){
    const {title, description, price, thumbnail, code, stock} = product
    
    const newProduct = {
      id: this.id++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    }
    
    if(
      !title || 
      !description || 
      !price ||
      !thumbnail ||
      !code || 
      !stock
    ){
      console.log('Error: faltan datos')
      return
    }      
    if ( this.products.some(p => p.code === code) ){
      console.log('Error: El código del producto ya existe')
      return
    }
        
    this.products.push(newProduct)
    
  }
  
  getProducts() {
    return this.products
  }

  getProductByID = (id) => {
    const product = this.products.find(p => p.id === id)
    return product ? product : 'ID Not Found'
  }

}

const productManager = new ProductManager()

console.log('Chequeando el array al inicio: ', productManager.getProducts())

productManager.addProduct({
  title:'producto prueba',
  description:'Este es un producto prueba',
  price:200,
  thumbnail:'Sin Imágen',
  code:'abc123',
  stock:25
})

console.log('Chequeando el arreglo luego de agregar productos: ', productManager.getProducts())

productManager.addProduct({
  title:'producto prueba',
  description:'Este es un producto prueba',
  price:200,
  thumbnail:'Sin Imágen',
  code:'abc123',
  stock:25
})

console.log('Este es el producto segun ID dado:', productManager.getProductByID(8))

