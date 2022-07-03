import React from 'react';

function DropdownItem({ name }) {
  return (
    <div>
      <div className='dropdown-item'>{name}</div>
      <div className='line'></div>
    </div>
  );
}

export default DropdownItem;
