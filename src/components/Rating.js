import React from 'react';

function Rating({rating,name,src,comment}){
    return(
        <div className='reviews'>
            <p className='review-text'>{rating}</p>
            <div className='rating-profile'> 
            <div className='user-pic'>
                <img src={src} alt='user'></img>
            </div>
            <p className='review-text'>{name}</p>
            </div>
            <p className='highlight'>{comment}</p>
        </div>
    )
}
export default Rating;