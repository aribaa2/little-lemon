import React, {useState } from 'react'

export const OrderCard = ({src,name,price,onAdd}) => {
  const[status,setStatus]=useState(false);
  const [quantity,setQuantity]=useState(1)
 let rem=false;
    function addItem(e){
        e.preventDefault();
        setStatus(!status);
        if (status===true) {
           // console.log(name)
            //console.log(quantity)
            //let totalPrice =  price*quantity
            //console.log(Number(price))
            //setRemove(false)
            rem=true
            //console.log(rem)
           onAdd(name,rem)
           
           // 
          //console.log(finalArray)
        }
        else{
          let finalData={
            itemName:name,
            itemPrice:price,
            itemQuantity:quantity,
            totalPrice : quantity * price
          }
        // console.log(finalData)
         rem=false
         onAdd(finalData,rem)
        // console.log(rem)
        }
    }
    return(
        <>
        <div className={status===true?'order-card selected ':'order-card'}>
            <img src={src} alt='bruchetta'></img>
            <div className='order-details'>
             <h1 className='card-title'>{name}</h1>
             <h1 className='card-title'>{"$" + price}</h1></div>
             <div className='order-button'>
              <label for='quantity' className='card-title'>Quantity</label>
              <input type='number' min={1} max={5} value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
              <button className='btn add' id='add' onClick={addItem}>{status===false ? 'Add' : 'Remove'}</button>
             </div>
        </div>
        </>
    )
}