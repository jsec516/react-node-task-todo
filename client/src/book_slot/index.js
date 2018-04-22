import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import DatePicker from "react-datepicker";
import moment from 'moment';

export default class BookSlot extends React.Component {
    constructor(props) {
        super(props);
        this.data = Object.assign({ description: '' }, this.props.data);
    }

    handleChange(event) {
        this.data.description = event.target.value;
    }

    handleStartTime(e) {
        this.data.startTime = e;
        this.forceUpdate();
    }

    handleEndTime(e) {
        this.data.endTime = e;
        this.forceUpdate();
    }

    book() {

        //@warning: this is obviously a cowboy coding, but it serves the purpose for demo
        if (!this.data.startTime || !this.data.endTime || !this.data.description) {
            alert('All Field is required');
            return;
        }

        this.props.onBook({
            description: this.data.description,
            startTime: moment(this.data.startTime).format(),
            endTime: moment(this.data.endTime).format()
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
                                <div><label>Start Time: </label><strong>{moment(this.data.startTime).format('HH:mm:ss')}</strong></div>
                                <div><label>End Time: </label><strong>{moment(this.data.endTime).format('HH:mm:ss')}</strong></div>
                            </div>
                        }

                        {
                            !this.data.tracker && <div>
                                Start Time: 
                                <DatePicker selected={this.data.startTime} showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={5}
                                    dateFormat="LLL"
                                    timeCaption="time"
                                    onChange={this.handleStartTime.bind(this)}
                                />
                                End Time: 
                                <DatePicker selected={this.data.endTime} showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={5}
                                    dateFormat="LLL"
                                    timeCaption="time"
                                    onChange={this.handleEndTime.bind(this)} />
                            </div>
                        }
                        Description: 
                        <div>
                            <textarea onChange={this.handleChange.bind(this)} placeholder="Task Description"></textarea>
                        </div>
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
