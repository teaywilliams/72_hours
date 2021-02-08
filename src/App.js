import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Weather from './components/Weather'
import Location from './components/Location'


// Defining our <App /> component the function name matches the file name
function App() {
  // All functional components need to return jsx with one parent element
  // The location comp will set location data for our api calls, location is an
  // object with {longitude:?, latitude:?}
  const [location, setLocation] = useState()
  return ( 
    <div className="App">
      <Location location={location} setLocation={setLocation} />
      {location?.longitude}
      {location?.latitude}
      <Weather location={location}/>
    </div>
  );
}

// Makes our Component available for import
export default App;