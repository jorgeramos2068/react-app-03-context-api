import React, {Component} from 'react';
// Impor consumer
import {CategoriesConsumer} from '../context/CategoriesContext';
import {EventsConsumer} from '../context/EventsContext';

class Form extends Component {
  state = {
    event: '',
    category: ''
  };

  getEventData = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <EventsConsumer>
        {(value) => {
          return (
            <form onSubmit={(e) => {
              e.preventDefault();
              value.getEvents(this.state);
            }}>
              <fieldset className="uk-fieldset uk-margin">
                <legend className="uk-legend uk-text-center">
                  Search your event by name or category
                </legend>
              </fieldset>
              <div className="uk-column-1-3@m uk-margin">
                <div className="uk-margin" uk-margin="true">
                  <input
                    name="event"
                    className="uk-input"
                    type="text"
                    placeholder="Event o city name"
                    onChange={this.getEventData} />
                </div>
                <div className="uk-margin" uk-margin="true">
                  <select className="uk-select" name="category" onChange={this.getEventData}>
                    <option value="">--Select a category--</option>
                    <CategoriesConsumer>
                      {(value) => {
                        return (
                          value.categories.map((category) => {
                            return (
                              <option key={category.id} value ={category.id} data-uk-form-select>
                                {category.name_localized}
                              </option>
                            );
                          })
                        );
                      }}
                    </CategoriesConsumer>
                  </select>
                </div>
                <div className="uk-margin" uk-margin="true">
                  <button type="submit" className="uk-button uk-button-danger">
                    Search events
                  </button>
                </div>
              </div>
            </form>
          );
        }}
      </EventsConsumer>
    );
  }
}

export default Form;
