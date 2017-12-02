import React, { Component } from 'react';
import Singleday from './singleday'
import '../../../sass/calendar.css';
//react-moment 

class Calendar extends Component {
    constructor(props) {
		super(props);
		this.state = {
			daysofWeek: [
                { dayname: "Monday" },
                { dayname: "Tuesday" },
                { dayname: "Wednesday" },
                { dayname: "Thursday" },
                { dayname: "Friday" },
                { dayname: "Saturday" },
                { dayname: "Sunday" }
            ],
            activeDate: new Date(),
            activeSec: new Date().getSeconds()
        }
        this.dayData = [
            {"2017-11-30":[
                    {
                        startTime: 9,
                        endTime: 10,
                        booked: [
                            {
                                start: 15,
                                end: 30
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
                        endTime: 13
                    },
                    {
                        startTime: 13,
                        endTime: 14
                    },
                    {
                        startTime: 14,
                        endTime: 15,
                        booked: [
                            {
                                start: 0,
                                end: 30
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
            },
            {"2017-12-01":[
                    {
                        startTime: 9,
                        endTime: 10
                    },
                    {
                        startTime: 10,
                        endTime: 11
                    },
                    {
                        startTime: 11,
                        endTime: 12
                    },
                    {
                        startTime: 12,
                        endTime: 13
                    },
                    {
                        startTime: 13,
                        endTime: 14
                    },
                    {
                        startTime: 14,
                        endTime: 15
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
                        endTime: 17
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
                        endTime: 20,
                        booked: [
                            {
                                start: 0,
                                end: 60
                            }
                        ]
                    },
                    {
                        startTime: 20,
                        endTime: 21,
                        booked: [
                            {
                                start: 0,
                                end: 60
                            }
                        ]
                    }
                ]
            },
            {"2017-12-02":[
                    {
                        startTime: 9,
                        endTime: 10
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
                        endTime: 12
                    },
                    {
                        startTime: 12,
                        endTime: 13
                    },
                    {
                        startTime: 13,
                        endTime: 14
                    },
                    {
                        startTime: 14,
                        endTime: 15
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
                        endTime: 17
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
                        endTime: 20,
                        booked: [
                            {
                                start: 0,
                                end: 60
                            }
                        ]
                    },
                    {
                        startTime: 20,
                        endTime: 21
                    }
                ]
            },
            {"2017-12-03":[
                    {
                        startTime: 9,
                        endTime: 10
                    },
                    {
                        startTime: 10,
                        endTime: 11
                    },
                    {
                        startTime: 11,
                        endTime: 12
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
                        endTime: 14
                    },
                    {
                        startTime: 14,
                        endTime: 15,
                        booked: [
                            {
                                start: 0,
                                end: 30
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
                        endTime: 17
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
                        endTime: 21,
                        booked: [
                            {
                                start: 0,
                                end: 60
                            }
                        ]
                    }
                ]
            },
            {"2017-12-04":[
                    {
                        startTime: 9,
                        endTime: 10
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
                        endTime: 13
                    },
                    {
                        startTime: 13,
                        endTime: 14
                    },
                    {
                        startTime: 14,
                        endTime: 15
                    },
                    {
                        startTime: 15,
                        endTime: 16
                    },
                    {
                        startTime: 16,
                        endTime: 17
                    },
                    {
                        startTime: 17,
                        endTime: 18,
                        booked: [
                            {
                                start: 30,
                                end: 60
                            }
                        ]
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
            },
            {"2017-12-05":[
                    {
                        startTime: 9,
                        endTime: 10
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
                        endTime: 12
                    },
                    {
                        startTime: 12,
                        endTime: 13
                    },
                    {
                        startTime: 13,
                        endTime: 14
                    },
                    {
                        startTime: 14,
                        endTime: 15
                    },
                    {
                        startTime: 15,
                        endTime: 16
                    },
                    {
                        startTime: 16,
                        endTime: 17
                    },
                    {
                        startTime: 17,
                        endTime: 18
                    },
                    {
                        startTime: 18,
                        endTime: 19,
                        booked: [
                            {
                                start: 30,
                                end: 60
                            }
                        ]
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
            },
            {"2017-12-06":[
                    {
                        startTime: 9,
                        endTime: 10
                    },
                    {
                        startTime: 10,
                        endTime: 11
                    },
                    {
                        startTime: 11,
                        endTime: 12
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
                        endTime: 14
                    },
                    {
                        startTime: 14,
                        endTime: 15
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
        ]
    }
    // componentDidMount() {
    //     window.setInterval(() => {
    //         this.setState({
    //             activeSec: new Date().getSeconds()
    //         });
    //     }, 1000);
    // }

    render() {
        return (
        <div className="container" >
            <div className="days-name">
                { this.state.activeSec }
                <ul>
                    <li>Monday</li>
                    {/* {
                        this.state.daysofWeek.map( (day, i) => {
                            return ( 
                                <li key={i}>{day.dayname}</li>
                            )
                        })
                    } */}
                </ul>
            </div>
            <div className='cal-wrapper'>
                <div className="timings">
                    <div> <span> 9:00 </span> AM </div>
                    <div> 9:30 </div>
                    <div> <span> 10:00 </span>AM </div>
                    <div> 10:30 </div>
                    <div> <span> 11:00 </span>AM </div>
                    <div> 11:30 </div>
                    <div> <span> 12:00 </span>PM </div>
                    <div> 12:30 </div>
                    <div> <span> 1:00 </span>PM </div>
                    <div> 1:30 </div>
                    <div> <span> 2:00 </span>PM </div>
                    <div> 2:30 </div>
                    <div> <span> 3:00 </span>PM </div>
                    <div> 3:30 </div>
                    <div> <span> 4:00 </span>PM </div>
                    <div> 4:30 </div>
                    <div> <span> 5:00 </span>PM </div>
                    <div> 5:30 </div>
                    <div> <span> 6:00 </span>PM </div>
                    <div> 6:30 </div>
                    <div> <span> 7:00 </span>PM </div>
                    <div> 7:30 </div>
                    <div> <span> 8:00 </span>PM </div>
                    <div> 8:30 </div>
                    <div> <span> 9:00 </span>PM </div>
                </div>
                <div className="days" id="events">
                    {
                        this.dayData.map( (dayItem, index) => (
                            <Singleday key={index} dayData={dayItem}/>
                            )
                        )
                    }
                </div>
            </div>
        </div>
        );
    }
}


export default Calendar;
