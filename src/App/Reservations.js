import React from 'react';
import './Reservations.css';
import Card from './Card';

const Reservations = ( {reservationsData} ) => {

  const reservationCards = reservationsData.map(reservation => {
    return (
  <Card
    name={reservation.name}
    id={reservation.id}
    key={reservation.id}
    date={reservation.date}
    time={reservation.time}
    numberOfGuests={reservation.number}
  />

  )
})


return (
  <div className='cards-container'>
    {reservationCards}
  </div>
  )
}

export default Reservations;
