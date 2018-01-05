import React, { Component } from 'react';
import PropTypes from 'prop-types';


class EveryQuarter extends Component {
    static propTypes = {
      position: PropTypes.number,
      height:  PropTypes.number,
      userName: PropTypes.string
    };

    static defaultProps = {
      position: 0,
      height:  0,
      userName: ''
    };

    showBooking(e, name) {
      alert(name);
      e.preventDefault();
      e.stopPropagation();
      
    }

    render() {
      const {position, height, userName} = this.props;
        return userName && (
            <div style={{ height: height, top: position}} className="each-quater" onClick={(e) => { this.showBooking(e, userName); }}>
             Booked
            </div>
        );
    }
}

export default EveryQuarter;
