import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import EveryQuater from './everyquater';

class Bookingform extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Name',
			bookingDate: '2014-02-09',
			startTime: '22:53:05',
			timeSlot: null
		}
	}
	// static propTypes = {
	// 	startTime: PropTypes.number,
	// 	endTime: PropTypes.number,
	// 	booked: PropTypes.array
	// };

	// static defaultProps = {
	// 	startTime: 10,
	// 	endTime: 11,
	// 	booked: []
	// };

	// renderSlots() {
	// 	const { booked } = this.props;
	// 	if (booked.length) {
	// 		return booked.map((item, i) => (<EveryQuater key={i} userName={item.userName} position={item.start} height={item.end - item.start} />));
	// 	}
	// }

	// bookSlot() {
	// 	alert('I will show the booking menu');
	// }

	render() {
		return (
			<div className="form" >
				<form>
					<div className="form-group">
						<label htmlFor="userName">Username</label>
						<input type="text" className="form-control" id="userName" placeholder="Enter email" defaultValue={this.state.name}/>
						<small className="form-text text-muted">This username will be used for booking</small>
					</div>
					<div className="form-group">
						<label htmlFor="bookingDate">booking Date</label>
						<input type="date" className="form-control" id="bookingDate" defaultValue={this.state.bookingDate}/>
					</div>
					<div className="form-group">
						<label htmlFor="slotTime">Start Time</label>
						<input type="time" className="form-control" id="slotTime" defaultValue={this.state.startTime} />
					</div>
					<div className="form-group">
						<label htmlFor="timeSlot">Time Slot</label>
						<select className="form-control" id="timeSlot">
						<option value="15">15 Min</option>
						<option value="30">30 Min</option>
						<option value="45">45 Min</option>
						<option value="60">60 Min</option>
						</select>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

export default Bookingform;
