import React from 'react';

function IconSwitch({ icon, onSwitch }) {
  return (
    <div className='material-icons big-font' onClick={onSwitch}>{icon}</div>
  );
}

export default IconSwitch;