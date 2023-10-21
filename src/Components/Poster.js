import React from 'react';
import collage from '../Images/Craft collage.png';

function Poster() {
  return (
    <div className='poster'>
      <img src={collage} alt='collage' className='collage' />
      <h1>Online Experiences</h1>
      <p>
        Elevate Your Space With Unique Handcrafted Treasures.
        Shop Now For One-of-a-Kind Creation!
      </p>
    </div>
  );
}

export default Poster;
