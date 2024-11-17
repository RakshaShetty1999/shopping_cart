import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className="text-warning" />
      ))}
      {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />}
      <span className="ms-2">({rating})</span>
    </div>
  );
};

export default StarRating;
