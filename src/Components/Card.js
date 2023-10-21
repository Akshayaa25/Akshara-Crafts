import React from 'react';
import star from '../Images/star.png';

function Card(props) {
  return (
    <div className='card'>
      {props.availability === 0 && <div className='card-badge'>SOLD OUT</div>}
      <img src={props.img} alt='lamp' className='card-image' />
      <div className='card-stats'>
        <img src={star} alt='star' className='card-star' />
        <span> {props.stats.rating} </span>
        <span> ({props.stats.reviewCount}) </span>
      </div>
      <p className='card-title'> {props.title} </p>
      <p className='card-price'>
        <span className='price'>From ${props.price}</span> / piece
      </p>
    </div>
  );
}

export default Card;
