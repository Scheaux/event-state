import React from 'react';

function ShopCard(props) {
  return (
    <div className='shop-card'>
      <span className='card-title'>{props.name}</span>
      <span className='card-color'>{props.color}</span>
      <img src={props.img} alt='card' />
      <div className='price-and-button'>
        <span className='card-price'>${props.price}</span>
        <button className='add-to-cart'>Add to cart</button>
      </div>
    </div>
  );
}

export default ShopCard;