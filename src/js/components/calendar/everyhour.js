import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EveryQuater from './everyquater';

class Hour extends Component {
	
	static propTypes = {
		startTime: PropTypes.number,
		endTime: PropTypes.number,
		booked: PropTypes.array
	};

	static defaultProps = {
		startTime: 10,
		endTime: 11,
		booked: []
	};

	renderSlots() {
		const { booked } = this.props;
		if (booked.length) {
			return booked.map((item, i) => (<EveryQuater key={i} position={item.start} height={item.end - item.start} />));
		}
	}
	bookSlot() {
		alert('I will show the booking menu');
	}
	render() {
		return (
			<div className="each-hour" onClick={this.bookSlot}>
				{ this.renderSlots() }
			</div>
		);
	}
}

export default Hour;
