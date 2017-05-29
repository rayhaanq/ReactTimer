const React = require('react');
const ReactDOM = require('react-dom');
import { HashRouter, Route } from 'react-router-dom';
const css = require('./styles/app.scss');

const Main = require('Main');
const Timer = require('Timer');
const Countdown = require('Countdown');

ReactDOM.render(

  <HashRouter>

    <div>
      <Route path="/" component={Main}/>
      
      <div  className="container">
      
        <Route exact path="/" component={Timer}/>
        <Route path="/countdown" component={Countdown}/>
      
      </div>
      
    </div>


  </HashRouter>,
    document.getElementById('app')

);
