import React from 'react';
import Card from './Card';
import bruchetta from '../images/Bruschetta-recipe-with-mozzarella-2.jpg'
import greekSalad from '../images/greek salad.jpg'
import lemonDessert from '../images/lemon dessert.jpg'
function Weekly() {
    const dishes=[
        {   src: greekSalad,
            name: "Greek Salad",
            price: '$12.99',
            description:'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '
        },
        {   src: bruchetta,
            name: "Bruchetta",
            price: '$5.09',
            description:'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '
        },
        {   src: lemonDessert,
            name: "Lemon dessert",
            price: '$5.00',
            description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        }
        
    ]
    return (
        <div className='weekly'> 
            <div id='weekly-header'>
                <h6 id='specials' className='section-categories'>Specials</h6>
                <button id='online-menu' className='btn'>Online Menu</button>
            </div>
            <div className='card-place'>
                {dishes.map((dish) => (
                    <Card
                      src={dish.src}
                      name={dish.name}
                      price={dish.price}
                      description={dish.description}
                    />
                  ))}
           </div>
        </div>
    )

}
export default Weekly