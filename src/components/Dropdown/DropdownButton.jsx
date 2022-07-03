import React from 'react';

function DropdownButton({ onClick }) {
  return (
    <button className='account-settings-btn' onClick={onClick}>
      ACCOUNT SETTINGS
    </button>
  );
}

export default DropdownButton;
