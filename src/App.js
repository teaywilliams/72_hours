import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Weather from './components/Weather'
import Location from './components/Location'
import Restaurants from './components/Restaurants';
import NasaImage from './components/NasaImage';


// Defining our <App /> component the function name matches the file name
function App() {
  // All functional components need to return jsx with one parent element
  // The location comp will set location data for our api calls, location is an
  // object with {longitude:?, latitude:?}
  const [location, setLocation] = useState({latitude: 0, longitude:0})
  return ( 
    <div className="App">
      <Location location={location} setLocation={setLocation} />
      <p>
      Longitude: {location?.longitude}
      </p>     
      <p>
      Latitude: {location?.latitude}
      </p>
      <br />
      <NasaImage location={location}/>
      <br />
      <Restaurants location={location}/>
      {/*<Restaurants long={location.longitude} lat={location.latitude} /> */}
      <br />
      <Weather location={location}/>
    </div>
  );
}

// Makes our Component available for import
export default App;