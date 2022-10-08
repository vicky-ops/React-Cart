import React from 'react'

export function SingleProduct({product,cart,setCart}) {
  return (
    <div className='product'>
        <img src={product.image} alt={product.name}/>
        <div className='productDesc'>
            <span style={{fontWeight:700}}>{product.name}</span>
            <span>₹ {product.price.substring(0,3)}</span>
        </div>
        <button className='add' onClick={()=>{
            setCart([...cart,product])}
            }>Add to Cart</button>
       
    </div>
  )
}
