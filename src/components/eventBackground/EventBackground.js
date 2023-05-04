import React from 'react';


function EventBackground(props) {
  return (
    <div className="Event-bg" style={{ backgroundImage: `url(${props.backgroundImage})` }}></div>
  );
}

export default EventBackground;