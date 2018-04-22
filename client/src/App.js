import React, { Component } from 'react';
import { Timer } from './Timer';
import { ManualSlot } from './ManualSlot';
import Pagination from "react-js-pagination";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const PER_PAGE = 5;

class App extends Component {
  constructor() {
    super();
    this.filterInput = '';
    this.state = { bookings: [{description: 'a'}, {description: 'b'}, {description: 'c'}], activePage: 1 };
  }

  completeBooking(data) {
    axios.post('http://localhost:8080/api/v0.1/tasks/create', data)
    .then((response) => {
      this.setState(prevState => ({
        bookings: [...prevState.bookings, {
          description: data.description,
          startTime: data.startTime,
          endTime: data.endTime
        }]
      }));
      this.forceUpdate();
      console.log('app book called with ', data);
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  filter() {
    // get term
    let url = 'http://localhost:8080/api/v0.1/tasks';
    
    if(this.filterInput.value) {
      url += '?term=' + this.filterInput.value;
    }

    // build url
    // call fetchTasks
    this.fetchTasks(url);
  }

  handlePageChange(e) {
    this.setState({ activePage: e})
    console.log('page changed', e);
  }


  componentDidMount() {
    this.fetchTasks('http://localhost:8080/api/v0.1/tasks');
  }

  fetchTasks(url) {
    axios.get(url)
    .then((response) => {
      console.log(typeof response);
      console.log(response);
      this.setState({bookings: response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    let i = 0;
    let startItem = (this.state.activePage - 1) * PER_PAGE;

    return (
      <div className="container">
        <Timer onBook={this.completeBooking.bind(this)}/>
        <ManualSlot onBook={this.completeBooking.bind(this)}/>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h3>Recent Tasks</h3>
            <form>
                <div className="form-group">
                  <input type="email" ref={(input) => {this.filterInput = input}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Text.." />
                  <small id="emailHelp" className="form-text text-muted">Filter By Description.</small>
                </div>
                <button type="submit" onClick={this.filter.bind(this)} className="btn btn-primary">Filter</button>
              </form>
          </div>
          <div className="col-lg-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Start Time</th>
                  <th scope="col">End Time</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bookings.slice(startItem, startItem+PER_PAGE).map((item) => {
                  console.log('firing with ', item);
        return (<tr key={++i}>
                  <th scope="row">{i}</th>
                  <td>{item.startTime}</td>
                  <td>{item.endTime}</td>
                  <td>{item.description}</td>
                </tr>)
    })}
              </tbody>
            </table>
            <nav aria-label="Page navigation">
            <Pagination
            itemClass="page-item"
            linkClass="page-link"
              activePage={this.state.activePage}
              itemsCountPerPage={PER_PAGE}
              totalItemsCount={this.state.bookings.length}
              onChange={this.handlePageChange.bind(this)}
            />
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
