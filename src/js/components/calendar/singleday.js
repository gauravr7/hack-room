import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Hour from './everyhour';

class Singleday extends Component {
    static propTypes = {
        dayData: PropTypes.object
    };
    static defaultProps = {
        dayData: {}
    };

    constructor() {
        super();
        this.daySchedule = {
            startTime: 9,
            endTime: 21
        }
    }
    
    singleDayData() {
        
        const dayData = this.props.dayData;
        var key, working, dayofWeek;
        for (key in dayData) {
            dayofWeek = new Date(key).getDay();
            working = (dayofWeek !== 0 && dayofWeek !== 6);
            
            //checked for sunday and saturday
            if (working) {
                var hoursHTML = [];
                for (var hourIndex = this.daySchedule.startTime; hourIndex < this.daySchedule.endTime; hourIndex++) {
                    var noData = true;
                    hoursHTML.push( dayData[key].map((particular, i) => {
                        if (particular.startTime === hourIndex) {
                            noData = false;
                            return <Hour key={hourIndex} startTime={hourIndex} endTime={hourIndex+1} booked={particular.booked} /> 
                        }
                    }))

                    if (noData) {
                        hoursHTML.push(<Hour key={hourIndex} startTime={hourIndex} endTime={hourIndex+1} />);
                    }
                }
            }
        }
        return (
            <div className={classNames('single-day', 
                {'non-working': !working })
                }>{hoursHTML || `Happy Weekend`}
            </div>
        )
    }
    render() {
        return this.singleDayData()
    }
}

export default Singleday;
