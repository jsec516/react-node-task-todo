import React, { Component } from 'react';
import BookSlot from '../book_slot'
import moment from 'moment';

export default class Manual extends Component {
    constructor(props) {
        super(props);
        this.state = {showBooking: false};
    }

    bookManualSlot(e) {
        e.preventDefault();
        this.setState({showBooking: true});
    }

    completeBooking(data) {
        this.setState({showBooking: false});
        //2013-02-08 09:30
        let startTime = moment(data.startTime).format('YYYY-MM-DD HH:mm');
        let endTime = moment(data.endTime).format('YYYY-MM-DD HH:mm');
        data.duration = Math.abs(moment(startTime).diff(moment(endTime), 'seconds'));
        this.props.onBook(data);
    }

    cancelBooking() {
        this.setState({showBooking: false});
    }

    render() {
        return (<div className="row justify-content-center">
          <label>Want to add Previous Task? <button className="btn btn-primary" onClick={this.bookManualSlot.bind(this)}>Click Here</button></label>
          <BookSlot data={this.state} onBook={this.completeBooking.bind(this)} showBooking={this.state.showBooking} onClose={this.cancelBooking.bind(this)} />
        </div>);
    }
}