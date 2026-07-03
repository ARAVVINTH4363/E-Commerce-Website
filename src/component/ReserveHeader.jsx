import React from 'react';
import '../css/ReservationHeader.css';

const ReservationHeader = () => {
  return (
    <section className="reservation-header">
      <p className="subtitle">Book a Table</p>
      <h1 className="title">
        Make a <span className="highlight">Reservation</span>
      </h1>
      <div className="divider"></div>
      <p className="description">
        Reserve your table for a memorable dining experience. We recommend booking 24 hours in advance for weekend evenings.
      </p>
    </section>
  );
};

export default ReservationHeader;