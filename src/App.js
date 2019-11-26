import React, { Component } from 'react';

import './App.css';

import Services from './components/Services';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import  createBrowserHistory  from 'history/createBrowserHistory'

const history = createBrowserHistory();

class App extends Component {    
  render() {
    return (
      <BrowserRouter history={history}>
        <div className = "firstLine">
          <div>Барбершоп "Haft"</div>
          <div>ул. Чернышевского 17/26 <br /> Пространство "Мультиплейс" 5 этаж</div>
          <div>тел.: +7 (923) 101 00 07</div>
        </div>

        <hr/>

        <div className = "menu">
          <div><Link to="/">О нас</Link></div>
          <div><Link to="/services">Услуги</Link></div>
          <div><Link to="/lk">Личный кабинет</Link></div>
        </div>

        <Route exact path='/' component={Home}/>
        <Route path='/services' component={Services}/>
        <Route path='/lk' component={RegistrationForm}/>
      </BrowserRouter>
    );
  }
}

export default App;
