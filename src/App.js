import React from 'react';
import logo from './logo.svg';
import './App.css';

const divStyle = {
  backgroundColor: 'green'
};

function App() {
  return (
    <div className="App dt w-100 mw8 center">
         <nav className="Nav dt w-100 mw8 center"> 
        <div className="dtc w2 v-mid pa3">
          <a href="/" className="nav-icon no-underline dib w2 h2 pa1 ba b--white-90 grow-large border-box">
            IV
          </a>
        </div>
        <div className="dtc v-mid tr pa3">
          <a className="f4 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >How it Works</a> 
          <a className="f4 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Pricing</a> 
          <a className="f4 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >About</a> 
          <a className="f4 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Careers</a> 
        </div>
      </nav>
      <div className="fl tc-l mt4 mt5-m mt6-l ph3 w-30">
        <h1 className="f4 f1-l fw2 white-90 mb0 lh-title">Elite Talent on Demand</h1>
        <h2 className="fw1 f5 white-80 mt3 mb4">Quickly find Ivy league educated temp workers. Right now.</h2>
        <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Get Started Now</a>
      </div> 
    </div>
  );
}

export default App;
