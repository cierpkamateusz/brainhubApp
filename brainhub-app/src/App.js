import EventComponent from "./containers/EventComponent";
import EventListContainer from "./containers/EventListContainer";

function App() {
  return (
    <div className="App">
      <h1>Brainhub recruitment task</h1>
      <EventComponent />
      <EventListContainer />
    </div>
  );
}

export default App;
