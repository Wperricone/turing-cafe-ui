import React from 'react';
import './Card.css';

const Card = ({ name, id, date, time, numberOfGuests }) => {
  return (
    <div className='card'>
      <h3>Card</h3>
      <p>Name: {name}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Number Of Guests: {numberOfGuests}</p>
      <button>Cancel</button>

    </div>
  )
}

export default Card;
