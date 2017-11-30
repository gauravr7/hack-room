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
                    <Singleday/>
                </div>
            </div>
        </div>
        );
    }
}


export default Calendar;
