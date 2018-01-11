import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EveryQuater from './everyquater';

class Hour extends Component {
	constructor (){
		super();
		this.initTime = 0;
		this.finishTime = 59;
		this.slotData = [];
		this.finalSlots = [];
		this.SlotItem = function(start=0, ends=60, userName=null) {
			return {
				slotStart: start,
				slotEnd: ends,
				userName: userName
			}
		};
	}
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
			this.freeSlots(booked);
			return booked.map( (item, i) => ( 
			<EveryQuater key={i} userName={item.userName} position={item.start} height={item.end - item.start} />
			) );
		} else {
			this.slotData.push( this.SlotItem() )
		}
	}
	bookSlot() {
		alert('I will show the booking menu');
	}
	freeSlots(booked) {
		console.log('inside freeSlots');
		const timeInterval = 15;
		var matched;
		for (var i = 0; i < 60; i++) {
			matched = false;
			for (var x in booked) {
				if ( (i === booked[x].start)) {
					this.slotData.push( this.SlotItem(booked[x].start, booked[x].end, booked[x].userName) );
					matched = true;
					i = booked[x].end;
					break;
				} else {
					matched = false;
				}
			}
			if (!matched) {
				this.slotData.push( this.SlotItem(i, parseInt(i) ) );
			}
		}
		this.refactorSlots();
	}
	refactorSlots() {
		var slotArray = this.slotData;
		var finalSlots = this.finalSlots;
		var finalLength = finalSlots.push(slotArray[0]) - 1;

		for (var x in slotArray ) {
			var prev = parseInt(x) - 1;
			if (slotArray[x].userName === finalSlots[finalLength].userName) {
				finalSlots[finalLength].slotEnd = slotArray[x].slotEnd;		
			} else {
				finalLength = this.finalSlots.push(slotArray[x]) - 1 ;
			}
		}
	}
	render() {
		return (
			<div className="each-hour" onClick={this.bookSlot} slotdata={this.finalSlots}>
				{ this.renderSlots() }
			</div>
		);
	}
}

export default Hour;
