import React, { Component } from 'react';
import logo from './logo.svg';
import s from './App.scss';
import Clock from './component/clock'
import Reservation from './component/form'
class App extends Component {
  render() {
    return (
      <div className={s.App}>
        <header className={s.App_header}>
          <img src={logo} className={s.App_logo} alt="logo" />
          <h1 className={s.App_title}>Welcome to React {this.props.name}</h1>
        </header>
        <p className={s.App_intro}>
            <Clock/>
          To get started, edit <code>src/App.js</code> and save to reload change.
        </p>
        <Reservation/>
      </div>
    );
  }
}

export default App;
