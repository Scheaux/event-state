import React from 'react';

function ShopItem(props) {
  return (
    <div className='shop-item'>
      <img src={props.img} alt='card' className='shop-item-img' />
      <span className='card-title'>{props.name}</span>
      <span className='card-color'>{props.color}</span>
      <span className='card-price'>${props.price}</span>
      <button className='add-to-cart'>Add to cart</button>
    </div>
  );
}

export default ShopItem;