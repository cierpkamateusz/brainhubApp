/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import EventListComponent from "./EventListComponent";
import { getAllEvents } from "./Event";

class EventListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount() {
    getAllEvents().then((response) => {
      this.setState({ events: response.data.data.events });
    });
  }

  render() {
    console.log(this.state.events);
    return <EventListComponent events={this.state.events} />;
  }
}

export default EventListContainer;
