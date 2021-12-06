import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class CompactCourier extends Component {
    render() {
        return (
            <div>
                <p>{this.props.courier.first_name} {this.props.courier.last_name}</p>
                <p>{this.props.courier.room_number}</p>
                <p>{this.props.courier.vehicle}</p>
                <p>{this.props.courier.telephone}</p>
                <Link to={`/couriers/${this.props.courier.id}`}>Подробнее</Link>
            </div>
        )
    }
}
