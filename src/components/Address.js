import React from 'react';

class Address extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullAddress: `${props.street}, ${props.city}`
    }
  }

  render() {
    return (
      <div className="address">{this.props.street}, {this.props.city}</div>


    );
  }
}
// <div className="address">
//   {this.state.fullAddress}
// </div>   (would not render state if calling on computing two props. just call props)
export default Address;
