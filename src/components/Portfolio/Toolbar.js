import React from 'react';

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    filters.map((x) => {
      return (
        <button
          className={x === selected ? 'selected' : null}
          key={x}
          onClick={onSelectFilter}>{x}</button>
      );
    })
  );
}

export default Toolbar;
