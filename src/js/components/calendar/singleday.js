import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Hour from './everyhour';

class Singleday extends Component {
    // static propTypes = {
    //     days: PropTypes.array
    // };
    // static defaultProps = {
    //     days: []
    // };

    constructor() {
        super();

        this.dayData = [
            {
                startTime: 9,
                endTime: 10,
                booked: [
                    {
                        start: 15,
                        end: 30
                    },
                    {
                        start: 45,
                        end: 60
                    }
                ]
            },
            {
                startTime: 10,
                endTime: 11,
                booked: [
                    {
                        start: 30,
                        end: 60
                    }
                ]
            },
            {
                startTime: 11,
                endTime: 12,
                booked: [
                    {
                        start: 0,
                        end: 30
                    }
                ]
            },
            {
                startTime: 12,
                endTime: 13,
                booked: [
                    {
                        start: 0,
                        end: 60
                    }
                ]
            },
            {
                startTime: 13,
                endTime: 14,
                booked: [
                    {
                        start: 0,
                        end: 60
                    }
                ]
            },
            {
                startTime: 14,
                endTime: 15,
                booked: [
                    {
                        start: 15,
                        end: 30
                    },
                    {
                        start: 45,
                        end: 60
                    }
                ]
            },
            {
                startTime: 15,
                endTime: 16,
                booked: [
                    {
                        start: 0,
                        end: 30
                    }
                ]
            },
            {
                startTime: 16,
                endTime: 17,
                booked: [
                    {
                        start: 0,
                        end: 60
                    }
                ]
            },
            {
                startTime: 17,
                endTime: 18
                
            },
            {
                startTime: 18,
                endTime: 19
                
            },
            {
                startTime: 19,
                endTime: 20
                
            },
            {
                startTime: 20,
                endTime: 21
                
            }
        ]
    }

    render() {
        // const { days } = this.props;
        return (
            <div className="single-day">
                {
                    this.dayData.map((item, index) => <Hour key={`item_${index}`} startTime={item.startTime} endTime={item.endTime} booked={item.booked} />)
                }
            </div>
        );
    }
}

export default Singleday;
