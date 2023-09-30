import React from 'react';

function Review({review}) {
    return (
        <div>
            <h2>{review.author}</h2>
            <p>{review.content}</p>
        </div>
    );
}

export default Review;