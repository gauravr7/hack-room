import React, { Component } from 'react';
import PropTypes from 'prop-types';


class EveryQuarter extends Component {
    static propTypes = {
      position: PropTypes.number,
      height:  PropTypes.number
    };

    static defaultProps = {
      position: 0,
      height:  0
    };

    showBooking() {
      alert('Hi I am booked');
    }

    render() {
      const {position, height} = this.props;
      //console.log(this.props);
        return (
            <div style={{ height: height, top: position}} className="each-quater" onClick={this.showBooking}>
             Booked
            </div>
        );
    }
}

export default EveryQuarter;
