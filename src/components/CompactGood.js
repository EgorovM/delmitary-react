import React, { Component } from 'react'
import './CompactGood.css'

import plusSvg from '../img/plus.svg'

export default class CompactGood extends Component {
    constructor(props) {
        super(props);
        this.good = props.good;

        this.addGood.bind(this);
    }

    addGood = () => {
        this.props.addGood(this.good);
    }

    render() {
        return (
            <div className="col-md-4 mt-5">
                <div className="card good-card h-100">
                    <div class="card-body text-center">
                        <img src={this.good.icon} class="img-fluid rounded-start" alt={this.good.name} height="120px"/>
                        <h5 class="card-title">{this.good.name}</h5>
                        <div class="changing-cart d-flex justify-content-between">
                            <p class="card-text"><small>{this.good.price} ₽</small></p>
                            <div>
                                <img class="add-cart" src={plusSvg} onClick={this.addGood}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
