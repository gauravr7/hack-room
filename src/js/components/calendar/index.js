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
        //01-12-2018 
        //MM-DD-YYYY
        this.formattedDate = this.systemDate.getMonth()+1 + '-' + this.systemDate.getDate() + '-' + this.systemDate.getFullYear();
		this.state = {
			daysofWeek: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            activeDate: new Date(this.formattedDate),
            activeRoom: 'MeetingRoom1',
            weekDates: []
        }
        
        this.setActiveRoom = this.setActiveRoom.bind(this);
        this.setNextWeek = this.setNextWeek.bind(this);
        this.setPrevWeek = this.setPrevWeek.bind(this);
        this.daysData = {
            "status": "SUCCESS",
            "data": {
                "MeetingRoom1": [
                    {
                    "01-15-2018":[
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
                    "01-16-2018":[
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
                    "01-22-2018":[
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
                    "01-25-2018":[
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
                    "01-29-2018":[
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
                    "01-30-2018":[
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
                    "01-31-2018":[
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
                    ,
                    {
                    "02-06-2018":[
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
                    "12-15-2017":[
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
                    "12-22-2017":[
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
                    "01-25-2018":[
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
                    "01-29-2018":[
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
                    "01-30-2018":[
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
                    "01-31-2018":[
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
                    ,
                    {
                    "02-06-2018":[
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
                    ]},
                    {
                    "02-08-2018":[
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
                   
                ]
            }
        }
    }

    currentWeekData() {
        var data = this.daysData.data[this.state.activeRoom],
        weekdata=[];

        for (var i=0 ; i<7 ; i++) {
            var currDate = new Date( this.state.activeDate.getTime() + (i * 86400000) ),
            matchedResult = {};
            
            matchedResult = data.filter( function(val) {
                var  dataDate = new Date(Object.keys(val)[0]).getTime();
                return (dataDate === currDate.getTime());
            });

            if (matchedResult.length > 0) {
                matchedResult = matchedResult[0];
            } else {
                matchedResult[currDate.getMonth()+1 + '-' + currDate.getDate() + '-' + currDate.getFullYear() + ""] = [];
            }
            weekdata.push(matchedResult);
        }
        this.setWeekDataToState(weekdata);
    }
    setWeekDataToState(weekdata) {
        this.setState({
            weekDates: weekdata
        }, () => this.renderUI() );
      
    }
    createRoomList() {
        var list = [];
        const _this = this;
        Object.keys(_this.daysData.data).forEach(function(roomName) {
            list.push(<li className={_this.state.activeRoom === roomName ? 'selected' : '' } key={roomName} onClick={() => _this.setActiveRoom(roomName)}>{roomName}</li>);
        })
        return list;
    }
  
    setNextWeek() {
        this.setState({
            activeDate: new Date( this.state.activeDate.getTime() + (7 * 86400000) )
        }, () => this.currentWeekData() )
    }

    setPrevWeek() {
        this.setState({
            activeDate: new Date( this.state.activeDate.getTime() - (7 * 86400000) )
        }, () => this.currentWeekData() )
        
    }
    setActiveRoom(roomName) {
        this.setState({
            activeRoom: roomName    
        }, () => this.currentWeekData() )
    }
    componentDidMount() {
        this.currentWeekData();
    }
    renderUI() {
        var UI = [];
    
        this.state.weekDates.map( (dayItem, index) => (
                UI.push(<Singleday key={index} dayData={dayItem}/>)
            )   
        )
 
        return UI;
    }

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
                <div className="date-markers">
                    <div>Current Date: {this.formattedDate}</div>
                    <div>Current Week start from : {this.state.activeDate.getMonth()+1 + '-' + this.state.activeDate.getDate() + '-' + this.state.activeDate.getFullYear()  }</div>
                    <div>
                        <button onClick={this.setPrevWeek}>Previous Week</button>
                        <button onClick={this.setNextWeek}>Next Week</button></div>
                </div>
                <div className="days-name">
                    <ul>
                        {
                            this.state.weekDates.map( (dayItem, index) => (
                                <li key={index}> 
                                    <span>{ new Date( Object.keys(dayItem)[0] ).getDate() } </span>
                                    <span>{ this.state.daysofWeek[new Date( Object.keys(dayItem)[0] ).getDay()] } </span>
                                </li>
                                ) 
                            )
                        }
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
                        {this.renderUI()}
                    </div>
                </div>
            </div>
            
        </div>
        );
    }
}


export default Calendar;
