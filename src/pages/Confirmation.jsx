import React from 'react';
import './Confirmation.css';
import { useLocation } from 'react-router-dom';

function Confirmation() {
  const location = useLocation();
  const { reservation } = location.state || {
    reservation: {
      id: '0000',
      date: '22 juin 2024',
      time: '13:00 - 17:00',
      guests: 3,
      email: 'email@email.com',
      address: 'Street Address Line 1',
      city: 'City, Province',
      postal: 'Postal Code',
      phone: 'Phone Number',
    },
  };

  return (
    <div className="confirmation-page">
      <div className="confirmation-banner">
        <h1>Réservation confirmée</h1>
        <p>Un courriel a été envoyé à {reservation.email}</p>
      </div>

      <div className="reservation-details">
        <h2>Réservation #{reservation.id}</h2>
        <p>{reservation.date}</p>
        <p>{reservation.time}</p>
        <p>Invités : {reservation.guests}</p>
        <br />
        <p>{reservation.address}</p>
        <p>{reservation.city}</p>
        <p>{reservation.postal}</p>
        <p>{reservation.phone}</p>
      </div>
    </div>
  );
}

export default Confirmation;
