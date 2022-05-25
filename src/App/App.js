import React, { Component } from 'react';
import './App.css';
import Reservations from './Reservations';
import Card from './Card';
import { fetchAllReservations } from './apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservationsData: [],
      error: "",
    }
  };

componentDidMount = () => {
  fetchAllReservations()
  .then(data => this.setState({ reservationsData: data }))
  .catch(err => this.setState({ error: "Something went wrong. Please try again."}))
}

  render() {
    return (
      <main className="App">
        <header className='header'>
          <h1 className='app-title'>Turing Cafe Reservations</h1>
        </header>
        <div className='body'>
          <div className='resy-form'>

          </div>
          <div className='resy-container'>
            <Reservations
            reservationsData={this.state.reservationsData}

            />
          </div>
        </div>
      </main>
    )
  }
}

export default App;
