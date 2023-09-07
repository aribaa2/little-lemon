import React from 'react';
function Card({src,name,price,description}){
    return(
        <div className='card'>
            <img src={src} alt='bruschetta' style={{width:'100%' , height:'45%'}}/>
            <div className='card-header'>
            <h2 className='homepage card-heading'>{name}</h2>
            <h2 className='highlight card-heading'>{price}</h2></div>
            <div id='card-para'>
            <p className='paragraph'>{description}</p></div>
            <p className='section-categories'>Order a delivery</p>
        </div>
    )
}
export default Card;