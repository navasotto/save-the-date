import React from 'react';
import './style.css';



function EventDetails(props) {
  return (
    <div className="Event-details">
      <h1>{props.title}</h1>
      <p className="Event-location">{props.location}</p>
      {props.children}
    </div>
  );
}

export default EventDetails;
