import React, { Component } from 'react';

const fetchAllReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(res => {
    if (!res.ok) {
      throw new Error("Something went wrong")
    }
    return res.json();
  })
}

export {fetchAllReservations};
