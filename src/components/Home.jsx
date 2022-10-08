import {faker} from "@faker-js/faker"
import React,{useState} from 'react'
import {SingleProduct} from "./SingleProduct"
import "./styles.css"

faker.seed(100)

const generateProducts = [...Array(20)].map(()=> ({
    id:faker.datatype.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.image.fashion(200,200)
}))


function Home() {
    const [products] = useState(generateProducts)
    const [cart,setCart] = useState([])
    console.log(cart)
  return (
    <section className="products">
        {products.map((product)=><SingleProduct key ={product.id} product={product} cart={cart} setCart={setCart}/>)}
    </section>
  )
}

export default Home