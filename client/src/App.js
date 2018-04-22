import React, { Component } from 'react';
import './App.css';
import { createTask, findTask } from './service';
import Manual from './manual';
import Tracker from './tracker';
import TimeLog from './timelog';


class App extends Component {
  constructor() {
    super();
    this.state = { bookings: [] };
  }

  completeBooking(data) {
    createTask(data)
    .then(response => {
      this.setState(prevState => ({
        bookings: [...prevState.bookings, {
          description: data.description,
          startTime: data.startTime,
          endTime: data.endTime,
          duration: data.duration
        }]
      }));
      // this.forceUpdate();
    })
    .catch(error => console.log(error));
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks(params) {
    findTask(params)
    .then(tasks => this.setState({bookings: tasks}))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <h1>Time Tracking App</h1>
        <Tracker onBook={this.completeBooking.bind(this)}/>
        <Manual onBook={this.completeBooking.bind(this)}/>
        <TimeLog onFilter={this.fetchTasks.bind(this)} data={this.state.bookings} />
      </div>
    );
  }
}

export default App;
