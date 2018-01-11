import React, { Component } from 'react';
import Singleday from './singleday';
import Bookingform from './bookingform';
import '../../../sass/calendar.css';
import 'bootstrap/dist/css/bootstrap.css'
//react-moment 

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.systemDate = new Date();
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
            activeDate: this.systemDate.getDate() + '-' + this.systemDate.getMonth()+1 + '-' + this.systemDate.getFullYear(),
            activeSec: new Date().getSeconds(),
            activeRoom: 'MeetingRoom3'
        }
        
        this.setActiveRoom = this.setActiveRoom.bind(this);
        this.daysData = {
            "status": "SUCCESS",
            "data": {
                "MeetingRoom1": [
                    {
                    "2017-11-30":[
                        {
                            startTime: 9,
                            endTime: 10,
                            booked: [
                                {
                                    start: 15,
                                    end: 30,
                                    userName: 'Karan Sharma'
                                }
                            ]
                        },
                        {
                            startTime: 11,
                            endTime: 12,
                            booked: [
                                {
                                    start: 0,
                                    end: 30,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-01":[
                        {
                            startTime: 15,
                            endTime: 16,
                            booked: [
                                {
                                    start: 0,
                                    end: 30,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-02":[
                        {
                            startTime: 10,
                            endTime: 11,
                            booked: [
                                {
                                    start: 30,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        },
                        {
                            startTime: 15,
                            endTime: 16,
                            booked: [
                                {
                                    start: 0,
                                    end: 30,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        },
                        {
                            startTime: 19,
                            endTime: 20,
                            booked: [
                                {
                                    start: 0,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-03":[
                        {
                            startTime: 12,
                            endTime: 13,
                            booked: [
                                {
                                    start: 0,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        },
                        {
                            startTime: 14,
                            endTime: 15,
                            booked: [
                                {
                                    start: 0,
                                    end: 30,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-04":[
                        {
                            startTime: 10,
                            endTime: 11,
                            booked: [
                                {
                                    start: 30,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        },
                        {
                            startTime: 17,
                            endTime: 18,
                            booked: [
                                {
                                    start: 30,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-05":[
                        {
                            startTime: 18,
                            endTime: 19,
                            booked: [
                                {
                                    start: 30,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-06":[
                        {
                            startTime: 12,
                            endTime: 13,
                            booked: [
                                {
                                    start: 0,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]}
                ],
                "MeetingRoom2": [
                    {
                    "2017-11-30":[
                        {
                            startTime: 14,
                            endTime: 15,
                            booked: [
                                {
                                    start: 15,
                                    end: 30,
                                    userName: 'Karan Sharma'
                                }
                            ]
                        },
                        {
                            startTime: 16,
                            endTime: 17,
                            booked: [
                                {
                                    start: 0,
                                    end: 30,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-01":[
                    ]},
                    {
                    "2017-12-02":[
                        {
                            startTime: 14,
                            endTime: 15,
                            booked: [
                                {
                                    start: 30,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        },
                        {
                            startTime: 15,
                            endTime: 16,
                            booked: [
                                {
                                    start: 0,
                                    end: 30,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        },
                        {
                            startTime: 19,
                            endTime: 20,
                            booked: [
                                {
                                    start: 0,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-03":[
                        {
                            startTime: 12,
                            endTime: 13,
                            booked: [
                                {
                                    start: 0,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        },
                        {
                            startTime: 14,
                            endTime: 15,
                            booked: [
                                {
                                    start: 0,
                                    end: 30,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-04":[
                        {
                            startTime: 10,
                            endTime: 11,
                            booked: [
                                {
                                    start: 30,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        },
                        {
                            startTime: 17,
                            endTime: 18,
                            booked: [
                                {
                                    start: 30,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-05":[
                        {
                            startTime: 14,
                            endTime: 15,
                            booked: [
                                {
                                    start: 30,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-06":[
                        {
                            startTime: 17,
                            endTime: 18,
                            booked: [
                                {
                                    start: 0,
                                    end: 30,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]}
                ],
                "MeetingRoom3": [
                    {
                    "2017-11-30":[
                        {
                            startTime: 9,
                            endTime: 10,
                            booked: [
                                {
                                    start: 15,
                                    end: 30,
                                    userName: 'Karan Sharma'
                                },
                                {
                                    start: 40,
                                    end: 50,
                                    userName: 'ram ratan'
                                }
                            ]
                        },
                        {
                            startTime: 11,
                            endTime: 12,
                            booked: [
                                {
                                    start: 0,
                                    end: 30,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-01":[
                        {
                            startTime: 15,
                            endTime: 16,
                            booked: [
                                {
                                    start: 0,
                                    end: 30,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-02":[
                        {
                            startTime: 10,
                            endTime: 11,
                            booked: [
                                {
                                    start: 30,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        },
                        {
                            startTime: 15,
                            endTime: 16,
                            booked: [
                                {
                                    start: 0,
                                    end: 30,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        },
                        {
                            startTime: 19,
                            endTime: 20,
                            booked: [
                                {
                                    start: 0,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-03":[
                        {
                            startTime: 12,
                            endTime: 13,
                            booked: [
                                {
                                    start: 0,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        },
                        {
                            startTime: 14,
                            endTime: 15,
                            booked: [
                                {
                                    start: 0,
                                    end: 30,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-04":[
                        {
                            startTime: 10,
                            endTime: 11,
                            booked: [
                                {
                                    start: 30,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        },
                        {
                            startTime: 17,
                            endTime: 18,
                            booked: [
                                {
                                    start: 30,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-05":[
                        {
                            startTime: 18,
                            endTime: 19,
                            booked: [
                                {
                                    start: 30,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-06":[
                        {
                            startTime: 12,
                            endTime: 13,
                            booked: [
                                {
                                    start: 0,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]}
                ],
                "MeetingRoom4": [
                    {
                    "2017-11-30":[
                        {
                            startTime: 14,
                            endTime: 15,
                            booked: [
                                {
                                    start: 15,
                                    end: 30,
                                    userName: 'Karan Sharma'
                                }
                            ]
                        },
                        {
                            startTime: 16,
                            endTime: 17,
                            booked: [
                                {
                                    start: 0,
                                    end: 30,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-01":[
                    ]},
                    {
                    "2017-12-02":[
                        {
                            startTime: 14,
                            endTime: 15,
                            booked: [
                                {
                                    start: 30,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        },
                        {
                            startTime: 15,
                            endTime: 16,
                            booked: [
                                {
                                    start: 0,
                                    end: 30,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        },
                        {
                            startTime: 19,
                            endTime: 20,
                            booked: [
                                {
                                    start: 0,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-03":[
                        {
                            startTime: 12,
                            endTime: 13,
                            booked: [
                                {
                                    start: 0,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        },
                        {
                            startTime: 14,
                            endTime: 15,
                            booked: [
                                {
                                    start: 0,
                                    end: 30,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-04":[
                        {
                            startTime: 10,
                            endTime: 11,
                            booked: [
                                {
                                    start: 30,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        },
                        {
                            startTime: 17,
                            endTime: 18,
                            booked: [
                                {
                                    start: 30,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-05":[
                        {
                            startTime: 14,
                            endTime: 15,
                            booked: [
                                {
                                    start: 30,
                                    end: 60,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]},
                    {
                    "2017-12-06":[
                        {
                            startTime: 17,
                            endTime: 18,
                            booked: [
                                {
                                    start: 0,
                                    end: 30,
                                    userName: 'Ryan Mathew'
                                }
                            ]
                        }
                    ]}
                ]
            }
        }
    }
    testData() {
        var data = this.daysData.data;
        console.log(
            Object.keys(data).forEach(function(key) {
                console.log(data[key], key);
            })
        )    
        for (var index in data) {
            console.log(data[index]);
        }
    }
    createRoomList() {
        var list = [];
        const _this = this;
        Object.keys(_this.daysData.data).forEach(function(roomName) {
            list.push(<li className={_this.state.activeRoom === roomName ? 'selected' : '' } key={roomName} onClick={() => _this.setActiveRoom(roomName)}>{roomName}</li>);
        })
        return list;
    }
    createCalendar() {

    }
    setActiveRoom(roomName) {
        console.log(roomName);
        this.setState({
            activeRoom: roomName    
        })
    }
    // componentDidMount() {
    //     window.setInterval(() => {
    //         this.setState({
    //             activeSec: new Date().getSeconds()
    //         });
    //     }, 1000);
    // }
    //this.setActiveRoom.bind(this, 'asd')

    render() {
        return (
        <div>
            <div className="rooms-list">
                <ul>
                    { this.createRoomList() }
                </ul>
            </div>
            <div className="booking-form">
                <Bookingform />
            </div>
            <div className="app-container" >
                
                <div>
                    <div>Current Data: 2017-12-03</div>
                    <div>
                        <button>Previous Week</button>
                    <button>Next Week</button></div>
                </div>
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
                            this.daysData.data[this.state.activeRoom].map( (dayItem, index) => (
                                <Singleday key={index} dayData={dayItem}/>
                                )   
                            )
                        }
                    </div>
                </div>
            </div>
            
        </div>
        );
    }
}


export default Calendar;
