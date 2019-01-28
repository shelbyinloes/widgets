import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import '../App.css';

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      userMonth: '',
      userDay: '', 
      userYear: '',
      userEvent: 'my event',
      error: undefined
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let userDate = (this.state.userMonth + " " + this.state.userDay + " " + this.state.userYear)
    let diff = (Date.parse(new Date(userDate)) - Date.parse(new Date())) / 1000;
    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= (365 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  setUserDate = (e) => {
    e.preventDefault();
    const month = e.target.elements.month.value.toString();
    const day = e.target.elements.day.value.toString();
    const year = e.target.elements.year.value.toString();
    let eventTitle = e.target.elements.eventTitle.value;

    if(!eventTitle){
      eventTitle = 'your event'
    }

    if(year < 2019) {
      this.setState({
        userMonth: undefined,
        userDay: undefined,
        userYear: undefined,
        userEvent: '',
        error: "Please enter a future date."
      })
      return;
    }

    if((day > 31) || (day < 1)){
      this.setState({
        userMonth: undefined,
        userDay: undefined,
        userYear: undefined,
        userEvent: '',
        error: "Please enter a valid day (1-31)."
      })
      return;
    }

    if((month > 12) || (month < 1)){
      this.setState({
        userMonth: undefined,
        userDay: undefined,
        userYear: undefined,
        userEvent: '',
        error: "Please enter a valid month (1-12)."
      })
      return;
    }


    if (month && day && year){
      this.setState({
        userMonth: month,
        userDay: day,
        userYear: year,
        userEvent: eventTitle,
        error: undefined
      });
    } else {
      this.setState({
        userMonth: undefined,
        userDay: undefined,
        userYear: undefined,
        userEvent: '',
        error: "Please type in correct date."
      });
    }
  }

  stop() {
    // for unmouting component
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    const timerStyle = {
        backgroundColor: 'white',
        border: '2px solid black',
        padding: '30px'
    }

    return (
      <Grid fluid >
        <Col sm={8} smOffset={2} style={timerStyle}>
          <Row>
            <form onSubmit={this.setUserDate}>
              <input 
                type="number" 
                name="month" 
                placeholder="Month"
                id="inputMonth"
              ></input> <span>/</span>
              <input 
                type="number" 
                name="day" 
                placeholder="Day"
                id="inputDay"
              ></input> <span>/</span>
              <input 
                type="number" 
                name="year" 
                placeholder="Year"
                id="inputYear"
              ></input>
              <input 
                type="text" 
                name="eventTitle" 
                placeholder="Event Title"
                id="inputEvent"
              ></input>
              <br></br>
              <button 
                style={{borderRadius: '5px'}}
                type="submit"
                id="getCountdown"
              >Get Countdown</button>
            </form>
          </Row>
          <Row>
            {this.state.userDay &&
             <h2>Time until {this.state.userEvent}:</h2>
            }
          </Row>
          <Row id="showTimer">
            {this.state.years > 0 &&
              <> 
              <strong>{this.addLeadingZeros(countDown.years)}</strong>
              <span>{countDown.years === 1 ? '  Year  ' : '  Years  '} </span>
              </>
            }

            {this.state.userDay &&
              <>
              <strong>{this.addLeadingZeros(countDown.days)}</strong>
              <span>{countDown.days === 1 ? ' Day  ' : ' Days  '} </span>
              </>
            }

            {this.state.userDay &&
              <>
              <strong>{this.addLeadingZeros(countDown.hours)}</strong>
              <span> Hours  </span>
              </>
            }

            {this.state.userDay &&
              <>
              <strong>{this.addLeadingZeros(countDown.min)}</strong>
              <span> Minutes  </span>
              </>
            }

            {this.state.userDay &&
              <>
              <strong>{this.addLeadingZeros(countDown.sec)}</strong>
              <span> Seconds  </span>
              </>
            }

          </Row>
          <Row>
          {this.state.error && <p>{this.state.error}</p>}
          </Row>
        </Col>
      </Grid>
    );
  }
}

// Timer.propTypes = {
//   date: PropTypes.string.isRequired
// };

// Timer.defaultProps = {
//   date: new Date()
// };

export default Timer;