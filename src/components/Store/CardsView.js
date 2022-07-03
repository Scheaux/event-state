import React from 'react';
import ShopCard from './ShopCard';

function CardsView({ cards }) {
  return (
    cards.map((x) => {
      return <ShopCard key={x.name + x.price + x.color} name={x.name} price={x.price} color={x.color} img={x.img} />;
    })
  );
}

export default CardsView;