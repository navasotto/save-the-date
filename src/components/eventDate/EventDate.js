import React from 'react';
import './style.css';

function EventDate(props) {
  return (
    <div className="Event-date">
      <h2>{props.date}</h2>
    </div>
  );
}

export default EventDate;