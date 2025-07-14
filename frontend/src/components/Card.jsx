import React from 'react'
import ProductCard from './ProductCard'

function Card() {
  const pods = ['pods1','pods2','pods3','pods4']
  return (
    <div className='flex gap-4 flex-wrap justify-center'>
      {
        pods.map((pod,index)=>
          <ProductCard
            path={`./img/${pod}.webp`}
            key={index} 
            alt={`${pod}`}
          />
        )
      }
    </div>
  )
}

export default Card