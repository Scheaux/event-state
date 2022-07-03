import React, { useState } from 'react';
import DropdownButton from './DropdownButton';
import DropdownList from './DropdownList';

function Dropdown() {
  const [optional, setOptional] = useState('open');

  function handleClick() {
    if (optional !== 'open') setOptional('open');
    else setOptional(null);
  }

  return (
    <div>
      <DropdownButton onClick={handleClick} />
      <DropdownList optional={optional} />
    </div>
  );
}

export default Dropdown;
