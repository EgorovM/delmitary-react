import React, { Component } from 'react'
import Auth from './Auth'

import Order from '../components/CompactOrder'

import AuthAPI from '../api/authAPI';
import OrderAPI from '../api/ordersAPI'


export default class Account extends Component {
    constructor() {
        super();

        this.state = {user: {}, orders: []};

        this.auth_api = new AuthAPI();
        this.order_api = new OrderAPI();
    }

    componentDidMount() {
        this.setInfo = this.setInfo.bind(this);
        this.setOrders = this.setOrders.bind(this);
        this.setInfo().then(() => this.setOrders());
    }

    async setInfo() {
        const data = await this.auth_api.me();
        this.setState({
            user: data,
        })
    }

    async setOrders() {
        const data = await this.order_api.list(
            {filters: `customer=${this.state.user.id}`}
        )
        this.setState({
            orders: data,
        })
    }

    render() {
        if(sessionStorage.getItem('auth_token') === null) {
            return <Auth />
        }

        return (
            <div>
                <h2>Пользователь</h2>
                <p>Имя: {this.state.user.username} </p>
                <p>Почта: {this.state.user.email} </p>
                
                <h3> Заказы </h3>
                {this.state.orders.map((order) => <Order order={order}/>)}
            </div>
        )
    }
}
