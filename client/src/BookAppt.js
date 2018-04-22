import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css'
import './BookApt.css'
import DatePicker from "react-datepicker";
import moment from 'moment'

class BookApt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    // clone this
    this.data = Object.assign({description: ''}, this.props.data);
    if(!this.data.startTime) {
        this.data.startTime = moment(new Date());
        this.data.endTime = moment(new Date());
    }
    this.toggle = this.toggle.bind(this);
  }

  handleChange(event) {
      this.data.description = event.target.value;
  }

  handleStartTime(e) {
      console.log('e is ', e);
      console.log(e.format('h:mm:ss'));
      this.data.startTime = e;
      this.forceUpdate();
  }

  handleEndTime(e) {
    console.log('e is ', e);
    console.log(e.format('h:mm:ss'));
    this.data.endTime = e;
    this.forceUpdate();
}

  book() {
      this.props.onBook({
        description: this.data.description,
        startTime: moment(this.data.startTime).format(),
        endTime: moment(this.data.endTime).format()
      });
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.showBooking}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
              {
                  this.data.tracker && <div>
                      <div>{moment(this.data.startTime).format('h:mm:ss')}</div>
                        <div>{moment(this.data.endTime).format('h:mm:ss')}</div>
                  </div>
              }
            
            {
                !this.data.tracker && <div>
                <DatePicker selected={this.data.startTime} showTimeSelect
    timeFormat="HH:mm"
    timeIntervals={5}
    dateFormat="LLL"
    timeCaption="time"
        onChange={this.handleStartTime.bind(this)}
        />
                <DatePicker selected={this.data.endTime} showTimeSelect
    timeFormat="HH:mm"
    timeIntervals={5}
    dateFormat="LLL"
    timeCaption="time"
        onChange={this.handleEndTime.bind(this)} />
                </div>
            }
            
            <textarea onChange={this.handleChange.bind(this)} placeholder="Task Description"></textarea>
            {/* {this.props.data.endTime && this.props.data.endTime.toString()} */}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.book.bind(this)}>Save Booking</Button>{' '}
            <Button color="secondary" onClick={this.props.onClose}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BookApt;