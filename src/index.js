import React from 'react';
import ReactDOM from 'react-dom';

import Address from './components/Address';

ReactDOM.render(
  <Address
    street="Santa Monica Blvd."
    city="Santa Monica"
  />,
  document.getElementById('root')
);
// import ToggleButton from './components/ToggleButton';
//
// ReactDOM.render(
//   <ToggleButton />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <div>Components Need To Be Mounted</div>,
//   document.getElementById('root')
// )
