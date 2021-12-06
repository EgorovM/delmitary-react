import React, { Component } from 'react'

export default class CourierShift extends Component {
    render() {
        return (
            <div>
                <p>Начало: {this.props.shift.start}</p>
                <p>Конец: {this.props.shift.end}</p>
            </div>
        )
    }
}
