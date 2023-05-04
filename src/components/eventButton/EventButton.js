import React from 'react';
import './style.css';
import { FaCreditCard, FaMapMarkerAlt, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function EventButton(props) {
  let Icon = props.icon === 'payment' ? <FaCreditCard /> :
    props.icon === 'location_on' ? <FaMapMarkerAlt /> :
      props.icon === 'event_available' ? <FaCheckCircle /> :
        props.icon === 'event_note' ? <FaCalendarAlt /> :
          null;

  return (
    <Link to={props.link} className="event-button">
      {Icon} {props.text}
    </Link>
  );
}

export default EventButton;
