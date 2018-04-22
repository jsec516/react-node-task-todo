import React, { Component } from 'react';
import BookApt from './BookAppt';

let tickTimer;
let timerStatus = null;
let elapsed = 0;
let startTime = null;
let endTime = null;

export class Timer extends Component{
    constructor(props) {
        super(props);
        this.state = {elapsed: 0, tracker: true, showBooking: false, trackerStatus: 'not_started', startTime: 0, endTime: 0};
      }

      bookApt() {
        this.pauseTimer();
        this.setState({showBooking: true});
      }

      completeBooking(bookData) {
          this.setState({startTime: null, endTime: null, elapsed: 0, trackerStatus: 'not_started', showBooking: false}, () => {
              console.log('completing booking by updating state', bookData);
              this.props.onBook(bookData);
              this.forceUpdate();
        });
      }

      toggle() {
          this.setState({showBooking: false});
      }

      cancelApt() {
          this.setState({showBooking: true})
      }
    render() {
        return (<div className="row justify-content-center">
          <div className="col-lg-4 timer-container">
            <span className="timer-display">{this.state.elapsed} s</span>
            {this.state.trackerStatus === 'not_started'  &&
                <button onClick={this.startTimer.bind(this)} className="btn btn-primary">start tracker</button>
            }
            {this.state.trackerStatus === 'running'  &&
                <button onClick={this.pauseTimer.bind(this)} className="btn btn-danger">pause tracker</button>
            }
            {this.state.trackerStatus === 'paused'  &&
                <button onClick={this.resumeTimer.bind(this)} className="btn btn-primary">resume tracker</button>
            }
            <button onClick={this.resetTimer.bind(this)} className="btn">reset tracker</button>
            <button type="button" onClick={this.bookApt.bind(this)} className="btn btn-primary btn-lg btn-block">Book Apt</button>
            {
                this.state.showBooking && 
                <BookApt onBook={this.completeBooking.bind(this)} showBooking={this.state.showBooking} onClose={this.cancelApt.bind(this)} buttonLabel="create appts" data={this.state} />
            }
          </div>
        </div>);
    }

    startTimer() {
        startTime = new Date();
        this.setState({startTime: startTime, trackerStatus: 'running'});
        tickTimer = setInterval(() => this.tick(), 1000);
    }

    pauseTimer() {
        if (tickTimer) {
            clearInterval(tickTimer);
        }
        this.setState({trackerStatus: 'paused'});
    }

    resetTimer() {
        if (tickTimer) {
            clearInterval(tickTimer);
        }
        elapsed = 0;
        this.setState({startTime: null, endTime: null, elapsed: 0, trackerStatus: 'not_started'})
    }

    resumeTimer() {
        tickTimer = setInterval(() => this.tick(), 1000);
        this.setState({trackerStatus: 'running'});
        // https://stackoverflow.com/a/12487467
    }

    tick() {
        endTime = new Date();
        elapsed += 1;
        this.setState({elapsed: elapsed, endTime: endTime});
        this.forceUpdate();
    }

    componentWillUnmount() {
        if (tickTimer) {
          clearInterval(tickTimer);
        }
      }
}