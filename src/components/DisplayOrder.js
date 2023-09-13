import React from 'react'

export const DisplayOrder = ({name,price,quantity}) => {
  return (
    <div className='display-order'>
    <h1 className='card-title'>{name}</h1>
    <h1 className='card-title'>{quantity}</h1>
    <h1 className='card-title'>{"$" + price}</h1>
    </div>
  )
}
