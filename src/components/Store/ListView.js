import React from 'react';
import ShopItem from './ShopItem';

function ListView({ list }) {
  return (
    list.map((x) => {
      return <ShopItem key={x.name + x.price + x.color} name={x.name} price={x.price} color={x.color} img={x.img} />;
    })
  );
}

export default ListView;