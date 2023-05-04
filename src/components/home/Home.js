import React from 'react';
import { Link } from "react-router-dom";
import './style.css';
import EventDate from '../eventDate/EventDate';
import EventButton from '../eventButton/EventButton';
import EventBackground from '../eventBackground/EventBackground';
import EventDetails from '../eventDetails/EventDetails';



function Home() {
  return (
    <div className="Event">
      <EventBackground backgroundImage="url-to-image" />
      <div className="Event-content">
        <EventDate date="May 25, 2023" />
        <EventDetails title="John & Jane's Wedding" location="123 Main St, New York, NY 10001">
          <div className="Event-buttons">
            <EventButton icon="payment" text="Pay Gift" link="/payment" />
            <EventButton icon="location_on" text="Directions" link="/location" />
            <EventButton icon="event_available" text="RSVP" link="/rsvp" />
            <EventButton icon="event_note" text="Add to Calendar" link="/calendar" />
          </div>
        </EventDetails>
      </div>
    </div>
  );
}

export default Home;
