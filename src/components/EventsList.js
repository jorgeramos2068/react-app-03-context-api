import React from 'react';
import Event from './Event';
import {EventsConsumer} from '../context/EventsContext';

const EventsList = () => {
  return (
    <div className="uk-child-width-1-3@m" uk-grid="true">
      <EventsConsumer>
        {(value) => {
          return value.events.map((event) => {
            return (
              <Event
                key={event.id}
                event={event} />
            );
          });
        }}
      </EventsConsumer>
    </div>
  );
}

export default EventsList;
