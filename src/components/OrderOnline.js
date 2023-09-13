import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { DisplayOrder } from './DisplayOrder'
import { OrderCard } from './OrderCard'
import bruchetta from '../images/Bruschetta-recipe-with-mozzarella-2.jpg'
import greekSalad from '../images/greek salad.jpg'
import lemonDessert from '../images/lemon dessert.jpg'
import crossiant from '../images/crossiant.avif'
import coffee from '../images/coffee.avif'
import cupcake from '../images/cup-cake.avif'
import friedrice from '../images/fried-rice.avif'
import pasta from '../images/pasta.avif'
import pizza from '../images/pizza.avif'
import ramen from '../images/ramen.avif'
import russiansalad from '../images/russian-salad.avif'
import sandwich from '../images/sandwich.avif'
import sushi from '../images/sushi.avif'
import soup from '../images/soup.avif'

export const OrderOnline = () => {

const[finalArray,setFinalArray]=useState([])
    const dishes=[
        {   src: greekSalad,
            name: "Greek Salad",
            price: '12.99'
        },
        {   src: bruchetta,
            name: "Bruchetta",
            price: '5.09'
        },
        {   src: lemonDessert,
            name: "Lemon dessert",
            price: '5.00'
        },
        {
            src: crossiant,
            name: "Crossiant",
            price: '5.00'},
        {
            src: sushi,
            name: "Sushi",
            price: '15.00',
        },
        {   src: sandwich,
            name: "Sandwich",
            price: '3.99'
        },
        {   src: soup,
            name: "Soup",
            price: '10.00'
        },
        {   src: russiansalad,
            name: "Russian Salad",
            price: '6.00'
        },
        {
            src: friedrice,
            name: "fried Rice",
            price: '5.00'},
        {
            src: pasta,
            name: "Pasta",
            price: '5.00',

        },
        {   src: pizza,
            name: "Pizza",
            price: '8.00'
        },
        {
            src: cupcake,
            name: "Cup Cake",
            price: '2.00'},
        {
            src: ramen,
            name: "Ramen",
            price: '5.00',

        },
        {
            src: coffee,
            name: "Coffee",
            price: '5.00',

        }
    ]
    let displayData=[];
    let arrayIndex=0;
    function getData(data,action){
        if(action===false){
            displayData[arrayIndex]=data;
      //console.log(arrayIndex)
            arrayIndex+=1;
          //  console.log(displayData)
         // console.log(displayData)
        }
        if(action===true)
       {
            displayData=displayData.filter((obj)=>{
                return obj.itemName!==data
            })
            //console.log(displayData)
            //console.log(action)
          }
        }
        function handleSubmit(){
            alert('Your order is placed. You will shortly receieve a confirmation message.')
        }
       // console.log(Array.isArray(finalArray))
       
     // console.log(displayData)
     /*if (arrayIndex===3) {
        
      displayData.forEach((item)=>{
        console.log(item);
      })
      //console.log(arrayIndex)*/
   // }
   function handleClick(e){
    e.preventDefault()
    
    setFinalArray(displayData)
    console.log(finalArray)
    console.log(typeof(finalArray))
   }
  return (
    <>
    <Header/>
    <div className='order-form'>
    <h1 className='display-title'>Order Food Online</h1>
    <div className='dishes-display'>
    {dishes.map((dish) => (
                    <OrderCard
                      src={dish.src}
                      name={dish.name}
                      price={dish.price}
                      onAdd={getData}
                    />
                  ))}
    </div>
    <button onClick={handleClick} className='btn next'>Next</button>
    <div className='display-order'>
    <h1 className='card-title'>Item</h1>
    <h1 className='card-title'>Quantity</h1>
    <h1 className='card-title'>Price</h1>
    </div>
    <div>
    {finalArray.map((a) => (
                    <DisplayOrder
                      name={a.itemName}
                      price={a.totalPrice}
                      quantity={a.itemQuantity}
                    />
                  ))}
    </div>
    <div className='personal-details'>
        <h1 className='display-title'>Customer Details:</h1>
        <div>
        <label htmlFor='name' className='card-title'>Name:</label>
        <input type='text' required placeholder='Full Name' name='name'/></div>
        <div>
        <label htmlFor='phoneno' className='card-title'> Contact No:</label>
        <input type='tel' placeholder='Phone no' /></div>
        <div>
        <label htmlFor='name' className='card-title'>Delivery Address:</label>
        <input type='text' id='address' required placeholder='Add house no, street no, block'/></div>
    </div>
    <button className='btn order' type='submit' onClick={handleSubmit}>Order Now</button>
    </div>
    <Footer/>
    </>
  )
}
