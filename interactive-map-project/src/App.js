import './App.css';
import { } from 'react-google-maps';

function Map() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 40.757339, lng: -73.985992 }}
        />
    );
}

function App() {
  return (
    <div className="App">
      <h1>Project</h1>
    </div>
  );
}

export default App;
