import React, { Component } from 'react'

export default class CompactOrder extends Component {
    render() {
        console.log('os')
        console.log(this.props.order)
        console.log('oe')
        return (
            <div>
                <div className="card">
                    <div className="card-body" style={{padding: "36px 45px"}}>
                        <p style={{fontSize: "36px", fontWeight: "bold"}}>№{this.props.order.id}</p>
                        <p>{this.props.order.has_completed}</p>
                        <p>Сумма заказа: {this.props.order.total_price} ₽</p>
                    </div>
                </div>
            </div>
        )
    }
}
