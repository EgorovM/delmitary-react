import React, { Component } from 'react'
import { withRouter } from '../utils';
import CouriersAPI from '../api/couriersAPI'
import CourierShift from '../components/CourierShift'
import HeaderTitle from '../components/HeaderTitle'

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
                <HeaderTitle title={this.state.courier.first_name + " " + this.state.courier.last_name}/>

                {this.state.shifts.map(
                    (shift) => <CourierShift shift={shift} courier={this.state.courier}/>
                )}
            </div>
        )
    }
}

export default withRouter(Courier);