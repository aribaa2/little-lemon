import React from 'react';
import Rating from './Rating';
import user1 from '../images/user1.jpg'
import user2 from '../images/user2.jpg'
import user3 from '../images/user3.jpg'
import user4 from '../images/user4.jpg'
function Testimonials(){
    const usersData=[
    {    rating:5,
         name: 'john',
         comment:'loved the taste',
         src: user1
     },
     {  rating:4.9,
        name:'stefan',
        comment:'very good first experience',
        src: user2
    },
    {   rating:4.5,
        name:'emily',
        comment:'enjoyed location and food',
        src: user3
    },
    {   rating:4.49,
        name:'albert',
        comment:'Best food in town',
        src: user4
    },
    ]
    return(
    <div className='testimonials'>
        <h1 className='display-title'>Testimonials</h1>
        <div id='rating'>
        {usersData.map((user) => (
                    <Rating
                      src={user.src}
                      name={user.name}
                      rating={'Rating '+ user.rating}
                      comment={user.comment}
                    />
                  ))}
        </div>
    </div>
    )
}
export default Testimonials;