import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Auth from './Auth'
import Account from './Account'
import Shops from './Shops'
import Goods from './Goods'
import BadPage from './BadPage'
import Landing from './Landing'
import Couriers from './Couriers'
import Courier from './Courier'
import logo from '../img/delmitary.svg'
import cart from '../img/cart.png'
import './App.css';


export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light">
              <div className="inner_wrapper">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <Link to="/"><img src={logo} style={{height: "39px"}} /></Link>
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <Link  className="nav-link" to="/shops"> Магазины</Link>
                          </li>
                          <li className="nav-item">
                              <Link  className="nav-link" to="/auth"> Войти</Link>
                          </li>
                          <li className="nav-item">
                              <Link  className="nav-link" to="/couriers">Курьеры</Link>
                          </li>
                          <li className="nav-item">
                              <Link  className="nav-link" to="/account">Личный кабинет</Link>
                          </li>
                          <li> <img src={cart} style={{height: "30px"}} /></li>
                      </ul>
                  </div>
              </div>
          </nav>
      </header>
      
        <div class="wrapper">
          <div class="inner_wrapper">
            <Routes>
              <Route index path="/" element={<Landing />} />
              <Route path="/goods/:shopId" element={<Goods />}/>
              <Route path="/shops" element={<Shops />}/>
              <Route path="/auth" element={<Auth />}/>
              <Route path="/account" element={<Account />}/>
              <Route path="/couriers/:courierID" element={<Courier />}/>
              <Route path="/couriers/" element={<Couriers />}/>
              <Route path="*" element={<BadPage />} />
            </Routes>
          </div>
      </div>
      </div>
    </Router>
    )
  }
}
