import React, { Component } from 'react'
import { withRouter } from '../utils';
import CouriersAPI from '../api/couriersAPI'

import CourierShift from '../components/CourierShift'

class Courier extends Component {
    constructor(props) {
        super(props);

        this.state = {courier: {}, shifts: []};

        this.courierId = this.getCourierId();
        this.courier_api = new CouriersAPI();
    }

    componentDidMount() {
        this.setCourier = this.setCourier.bind(this)
        this.setCourier();
    }

    getCourierId() {
        // TODO: parse from location
        return 1;
    }

    async setCourier() {
        const data = await this.courier_api.get({suffix: this.courierId});
        this.setState({
            courier: data,
            shifts: data.shifts,
        });
    }

    render() {
        return (
            <div>
                <h1> Курьер </h1>
                <p>{this.state.courier.first_name} {this.state.courier.last_name}</p>
                <p>{this.state.courier.room_number}</p>
                <p>{this.state.courier.vehicle}</p>
                <p>{this.state.courier.telephone}</p>

                <h4> Свободные смены </h4>
                {this.state.shifts.map(
                    (shift) => <CourierShift shift={shift} courier={this.state.courier}/>
                )}
            </div>
        )
    }
}

export default withRouter(Courier);