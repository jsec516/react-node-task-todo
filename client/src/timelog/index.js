import React, { Component } from 'react';
import Pagination from "react-js-pagination";
const PER_PAGE = 5;

export default class TimeLog extends Component {
    constructor(props) {
        super(props);
        this.filterInput = '';
        this.state = { activePage: 1 };
    }

    handleFilter() {
        let params = {};
        if (this.filterInput.value) {
            params.term = this.filterInput.value;
        }
        this.setState({ activePage: 1});
        this.props.onFilter(params);
    }

    handlePageChange(e) {
        this.setState({ activePage: e })
    }

    render() {
        let i = 0;
        let startItem = (this.state.activePage - 1) * PER_PAGE;

        return (
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <h3>Recent Tasks</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" ref={(input) => { this.filterInput = input }} className="form-control" aria-describedby="filterHelp" placeholder="Enter Text.." />
                            <small id="emailHelp" className="form-text text-muted">Filter By Description.</small>
                        </div>
                        <button type="button" onClick={this.handleFilter.bind(this)} className="btn btn-primary">Filter</button>
                    </form>
                </div>
                <div className="col-lg-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Start Time</th>
                                <th scope="col">End Time</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.slice(startItem, startItem + PER_PAGE).map((item) => {
                                let readableDuration = 'N/A';
                                if(item.duration) {
                                    let date = new Date(null);
                                    date.setSeconds(item.duration); // specify value for SECONDS here
                                    readableDuration = date.toISOString().substr(11, 8);
                                }
                                
                                return (<tr key={++i}>
                                    <th scope="row">{i}</th>
                                    <td>{item.startTime}</td>
                                    <td>{item.endTime}</td>
                                    <td>{readableDuration}</td>
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
                            totalItemsCount={this.props.data.length}
                            onChange={this.handlePageChange.bind(this)}
                        />
                    </nav>
                </div>
            </div>
        );
    }
}