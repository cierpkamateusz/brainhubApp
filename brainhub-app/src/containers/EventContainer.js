import React from "react";
import EventComponent from "./EventComponent";

class EventContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      date: null,
    };
  }

  render() {
    return <EventComponent />;
  }
}

export default EventContainer;
