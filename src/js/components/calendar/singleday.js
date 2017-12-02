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
    
    createData () {
        const dayData = this.props.dayData;

        for (var key in dayData) {
            var dayofWeek = new Date(key).getDay();
            //checked for sunday and saturday
            var working = (dayofWeek !== 0 && dayofWeek !== 6)
            if (working) {
                var hoursHTML =  dayData[key].map( (particular, i) => {
                    return <Hour key={i} startTime={particular.startTime} endTime={particular.endTime} booked={particular.booked} /> 
                })
            } else {

            }
        }
        return (
            <div className={classNames('single-day', 
             {'non-working': !working },
             )}>
                {hoursHTML}
            </div>
        )
    }
    render() {
        return this.createData()
    }
}

export default Singleday;
