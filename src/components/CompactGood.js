import React, { Component } from 'react'
import './CompactGood.css'

export default class CompactGood extends Component {
    constructor(props) {
        super(props)
        this.good = props.good
    }

    render() {
        return (
            <div className="card good-card col-mb-12">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={this.good.icon} class="img-fluid rounded-start" alt={this.good.name} height="120px"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{this.good.name}</h5>
                            <p class="card-text">
                                {this.good.description}
                            </p>
                            <p class="card-text"><small class="text-muted">{this.good.price}₽</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
