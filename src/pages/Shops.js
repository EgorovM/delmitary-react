import React, { Component } from 'react'
import ShopsAPI from '../api/shopsAPI'
import CompactShop from '../components/CompactShop'
import HeaderTitle from '../components/HeaderTitle'


export default class Shops extends Component {
    constructor(props) {
        super(props);

        this.state = {shops: []}
        this.api = new ShopsAPI();
    }

    componentDidMount() {
        this.setShops = this.setShops.bind(this);
        this.setShops();
    }


    async setShops(page = 1) {
        const shops = await this.api.list();

        this.setState({
            shops: shops
        })
    }

    render() {
        return (
            <div>
                <HeaderTitle title="Рестораны"/>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {this.state.shops.map((shop) => 
                        <CompactShop key={shop.toString()} shop={shop}/>
                    )}
                </div>
            </div>
        )
    }
}
