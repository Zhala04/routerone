import React, { Component } from 'react'
import AppRouter from './routers/AppRouter';
import './css/style.css';

export class App extends Component {
  render() {
    return (
      <AppRouter/>
    )
  }
}

export default App