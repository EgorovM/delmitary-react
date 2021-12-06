import React, { Component } from 'react'

export default class CompactOrder extends Component {
    render() {
        console.log('os')
        console.log(this.props.order)
        console.log('oe')
        return (
            <div>
                <p>{this.props.order.id}</p>
                <p>{this.props.order.has_completed}</p>
                <p>{this.props.order.total_price}</p>
            </div>
        )
    }
}
