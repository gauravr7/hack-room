import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class EveryQuarter extends Component {
    static propTypes = {
      position: PropTypes.number,
      height:  PropTypes.number
    };

    static defaultProps = {
      position: 0,
      height:  0
    };
    
    render() {
      const {position, height} = this.props;
      console.log(this.props);
        return (
            <div style={{ height: height, top: position}} className="each-quater">
             Booked
            </div>
        );
    }
}

export default EveryQuarter;
