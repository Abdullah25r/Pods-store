import React from 'react'

function Card() {
  const pods = ['pods1','pods2','pods3','pods4']
  return (
    <div>
      {
        pods.map((pod,index)=>
          <img src={`./img/${pod}.webp`} key={index} alt={`${pod}`} />
        )
      }
    </div>
  )
}

export default Card