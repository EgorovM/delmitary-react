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


export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                  <Link to="/">Delmitary</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <Link className="nav-link active" aria-current="page" to="/">Главная</Link>
                          </li>
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
                      </ul>
                  </div>
              </div>
          </nav>
      </header>

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
    </Router>
    )
  }
}
