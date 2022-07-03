import React, { useState } from 'react';
import DropdownItem from './DropdownItem';

function DropdownList({ optional }) {
  const [, setSelected] = useState(null);

  function handleClick(evt) {
    setSelected((prev) => {
      if (prev === evt.target) {
        prev.classList.remove('selected');
        return null;
      }
      if (prev !== null) {
        prev.classList.remove('selected');
      }
      evt.target.classList.add('selected');
      return evt.target;
    });
  }

  const dropDownItems = [
    'Profile information',
    'Change password',
    'Become PRO',
    'Help',
    'Log Out',
  ];

  return (
    <div className={`dropdown-container ${optional}`} onClick={handleClick}>
      {dropDownItems.map((x) => {
        return <DropdownItem key={x} name={x} />;
      })}
    </div>
  );
}

export default DropdownList;
