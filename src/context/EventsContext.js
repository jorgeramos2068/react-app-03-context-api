import React, {Component} from 'react';
import axios from 'axios';

const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

class EventsProvider extends Component
{
  token = 'XXXXXXX';
  state = {
    events: []
  };

  getEvents = async (search) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.event}&categories=${search.category}&sort_by=date&token=${this.token}`;
    let events = await axios.get(url);
    this.setState({
      events: events.data.events
    });
  }

  render() {
    return (
      <EventsContext.Provider
        value={{
          events: this.state.events,
          getEvents: this.getEvents
        }}>
        {this.props.children}
      </EventsContext.Provider>
    );
  }
}

export default EventsProvider;
