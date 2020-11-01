import React, { useState } from 'react'
import { FaStar } from "react-icons/fa"

export const StarRating = () => {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i} id={"star" + i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
 />
            <FaStar 
              className="star" 
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              color={ratingValue <= (hover || rating) ? "#ffee00" : "#dcdcdc"}
              size={30}              
            />
          </label>
        );
      })}

    </div>
  )
}


