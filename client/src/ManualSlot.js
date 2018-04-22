import React, { Component } from 'react';
import BookApt from './BookAppt'

export class ManualSlot extends Component {
    constructor(props) {
        super(props);
        this.state = {showBooking: false};
    }

    bookManualSlot(e) {
        e.preventDefault();
        this.setState({showBooking: true});
    }
    completeBooking(data) {
        console.log('manual booking data ', data);
        this.setState({showBooking: false})
        this.props.onBook(data);
    }
    cancelApt() {

    }
    render() {
        return (<div className="row justify-content-center">
          <label>Want to add Previous Task? <a href="#" onClick={this.bookManualSlot.bind(this)}>Click Here</a></label>
          <BookApt data={this.state} onBook={this.completeBooking.bind(this)} showBooking={this.state.showBooking} onClose={this.cancelApt.bind(this)} />
        </div>);
    }
}