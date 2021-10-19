/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import EventComponent from "./containers/EventComponent";
import EventListComponent from "./containers/EventListComponent";
import { getAllEvents } from "./containers/Event";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount() {
    this.setEventList();
  }

  setEventList = () => {
    getAllEvents().then((response) => {
      this.setState({ events: response.data.data.events });
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Brainhub recruitment task</h1>
        <EventComponent onSubmit={this.setEventList} />
        <EventListComponent events={this.state.events} />
      </div>
    );
  }
}

export default App;
