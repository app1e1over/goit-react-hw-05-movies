import React from 'react';
import './style.css'

function Review({review}) {
    return (
        <div className='review-container'>
            <h2 className='reviewer-name'>{review.author}</h2>
            <p className='review'>{review.content}</p>
        </div>
    );
}

export default Review;